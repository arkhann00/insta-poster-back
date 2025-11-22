from __future__ import annotations

import asyncio
from datetime import datetime, timezone
import logging

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.core.db import async_session_maker
from src.models.post import Post, PostStatus
from src.models.media_asset import MediaAsset
from src.models.instagram_account import InstagramAccount
from src.integrations.instagram import (
    publish_reel_to_instagram,
    InstagramPublishError,
)

logger = logging.getLogger("scheduler")


async def process_queue_once(session: AsyncSession) -> None:
    """
    Берет один запланированный пост и пытается его опубликовать.
    """

    now = datetime.now(timezone.utc)

    # 1. Находим один пост со статусом planned
    stmt = (
        select(Post)
        .where(
            Post.status == PostStatus.PLANNED,
            (Post.scheduled_at == None) | (Post.scheduled_at <= now),
        )
        .order_by(Post.created_at.asc())
        .limit(1)
    )

    res = await session.execute(stmt)
    post = res.scalar_one_or_none()
    if not post:
        logger.debug("[scheduler] no planned posts to publish")
        return  # пока нечего публиковать

    logger.info("[scheduler] processing planned post %s", post.id)

    # 2. Получаем аккаунт и медиа
    acc_res = await session.execute(
        select(InstagramAccount).where(
            InstagramAccount.id == post.account_id
        )
    )
    account = acc_res.scalar_one_or_none()

    media_res = await session.execute(
        select(MediaAsset).where(MediaAsset.id == post.media_id)
    )
    media = media_res.scalar_one_or_none()

    if not account or not media:
        post.status = PostStatus.FAILED
        post.error = "Account or media not found"
        post.attempt += 1
        await session.commit()
        logger.error(
            "[scheduler] account or media not found for post %s (account=%s, media=%s)",
            post.id,
            post.account_id,
            post.media_id,
        )
        return

    # 3. Помечаем, что начали публикацию
    post.status = PostStatus.PUBLISHING
    post.publish_started_at = now
    post.attempt += 1
    post.error = None
    await session.commit()
    logger.info(
        "[scheduler] start publishing post %s (account=%s, media=%s, attempt=%s)",
        post.id,
        post.account_id,
        post.media_id,
        post.attempt,
    )

    raw_caption = post.caption or ""
    tags = post.tags or []  # список строк, например ["reels", "test"]

    tags_str = ""
    if tags:
        tags_str = " " + " ".join(
            f"#{t.strip().replace('#', '')}" for t in tags if t and t.strip()
        )

    full_caption = f"{raw_caption}\n\n{tags_str}"

    try:
        ig_media_id = await publish_reel_to_instagram(
            account=account,
            media=media,
            caption=full_caption,
        )
    except InstagramPublishError as e:
        post.status = PostStatus.FAILED
        post.error = str(e)
        await session.commit()
        logger.exception("[scheduler] instagram publish error for post %s", post.id)
        return
    except Exception as e:
        post.status = PostStatus.FAILED
        post.error = f"Unexpected error: {e}"
        await session.commit()
        logger.exception("[scheduler] unexpected error for post %s", post.id)
        return

    # 4. Успешная публикация
    post.status = PostStatus.PUBLISHED
    post.instagram_media_id = ig_media_id
    post.published_at = datetime.now(timezone.utc)
    await session.commit()
    logger.info("[scheduler] post %s published as %s", post.id, ig_media_id)


async def scheduler_loop(poll_interval_seconds: int = 5) -> None:
    """
    Бесконечный цикл шедулера — вызывается один раз при старте приложения.
    """

    logger.info("[scheduler] starting loop")

    while True:
        try:
            async with async_session_maker() as session:
                await process_queue_once(session)
        except Exception:
            logger.exception("[scheduler] top-level error in loop")

        await asyncio.sleep(poll_interval_seconds)
