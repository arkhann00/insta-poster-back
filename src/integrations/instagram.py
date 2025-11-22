# src/integrations/instagram.py

from __future__ import annotations

from typing import Optional
import asyncio
import logging

import httpx

from src.core.config import settings
from src.models.instagram_account import InstagramAccount
from src.models.media_asset import MediaAsset

API_PUBLIC_URL = settings.API_PUBLIC_URL

logger = logging.getLogger("instagram")


class InstagramPublishError(Exception):
    pass


async def _wait_for_container_ready(
    client: httpx.AsyncClient,
    creation_id: str,
    access_token: str,
    max_wait_seconds: int = 300,
    poll_interval_seconds: int = 5,
) -> None:
    """
    Ждёт, пока контейнер медиа станет готов к публикации (status_code = FINISHED).
    Если статус ERROR или по таймауту — выбрасывает InstagramPublishError.
    """

    status_url = f"https://graph.facebook.com/v21.0/{creation_id}"
    elapsed = 0
    last_status: Optional[str] = None
    last_raw: Optional[dict] = None

    while elapsed < max_wait_seconds:
        resp = await client.get(
            status_url,
            params={
                # Просим не только status_code, но и status (может содержать пояснение)
                "fields": "status_code,status",
                "access_token": access_token,
            },
        )
        data = resp.json()
        last_raw = data

        logger.info("[instagram] container %s poll response: %s", creation_id, data)

        if "error" in data:
            # Ошибка самого Graph API
            raise InstagramPublishError(
                f"Error checking media container status: {data['error']}"
            )

        status = data.get("status_code")
        last_status = status

        if status == "FINISHED":
            logger.info("[instagram] container %s is FINISHED", creation_id)
            return

        if status == "ERROR":
            # Instagram не смог обработать медиаданные (формат, длительность, кодеки и т.п.)
            logger.error(
                "[instagram] container %s processing ERROR, raw=%s",
                creation_id,
                data,
            )
            raise InstagramPublishError(
                f"Media container processing failed with status ERROR: {data}"
            )

        # Всё ещё IN_PROGRESS или что-то иное — ждём и пробуем снова
        await asyncio.sleep(poll_interval_seconds)
        elapsed += poll_interval_seconds

    # Если вышли из цикла по таймауту
    logger.error(
        "[instagram] container %s timeout. Last status=%r, raw=%s",
        creation_id,
        last_status,
        last_raw,
    )
    raise InstagramPublishError(
        f"Timeout waiting for media container {creation_id} to be ready. "
        f"Last known status: {last_status!r}, raw={last_raw}"
    )


async def publish_reel_to_instagram(
    account: InstagramAccount,
    media: MediaAsset,
    caption: Optional[str],
) -> str:
    """
    Публикует Reels в Instagram для данного бизнес-аккаунта.
    Возвращает instagram_media_id.
    """

    if not account.ig_user_id:
        raise InstagramPublishError("Instagram account has no ig_user_id")

    if not account.access_token:
        raise InstagramPublishError("Instagram account has no access_token")

    # Публичный URL до файла в твоём бэке
    video_url = f"{API_PUBLIC_URL}/media/files/{media.id}"
    logger.info(
        "[instagram] publish_reel_to_instagram for account=%s, media=%s, video_url=%s",
        account.id,
        media.id,
        video_url,
    )

    creation_url = f"https://graph.facebook.com/v21.0/{account.ig_user_id}/media"

    async with httpx.AsyncClient(timeout=120) as client:
        # 1) создаём контейнер медиа (REELS)
        creation_resp = await client.post(
            creation_url,
            data={
                "media_type": "REELS",
                "video_url": video_url,
                "caption": caption or "",
                "access_token": account.access_token,
            },
        )

        try:
            creation_data = creation_resp.json()
        except Exception:
            logger.exception(
                "[instagram] failed to parse creation_resp json, text=%s",
                creation_resp.text,
            )
            raise InstagramPublishError(
                f"Error parsing media creation response: {creation_resp.text}"
            )

        logger.info(
            "[instagram] media creation response for account=%s, media=%s: %s",
            account.id,
            media.id,
            creation_data,
        )

        if "error" in creation_data:
            logger.error(
                "[instagram] error creating media container: %s",
                creation_data["error"],
            )
            raise InstagramPublishError(
                f"Error creating media container: {creation_data['error']}"
            )

        creation_id = creation_data.get("id")
        if not creation_id:
            logger.error(
                "[instagram] media container created without id. Raw response: %s",
                creation_data,
            )
            raise InstagramPublishError(
                f"Media container created without id: {creation_data}"
            )

        # 2) ждём готовности контейнера
        await _wait_for_container_ready(
            client=client,
            creation_id=creation_id,
            access_token=account.access_token,
            max_wait_seconds=300,
            poll_interval_seconds=5,
        )

        # 3) публикуем контейнер
        publish_url = f"https://graph.facebook.com/v24.0/{account.ig_user_id}/media_publish"

        publish_resp = await client.post(
            publish_url,
            data={
                "creation_id": creation_id,
                "access_token": account.access_token,
            },
        )

        try:
            publish_data = publish_resp.json()
        except Exception:
            logger.exception(
                "[instagram] failed to parse publish_resp json, text=%s",
                publish_resp.text,
            )
            raise InstagramPublishError(
                f"Error parsing media publish response: {publish_resp.text}"
            )

        logger.info(
            "[instagram] media publish response for account=%s, media=%s: %s",
            account.id,
            media.id,
            publish_data,
        )

        if "error" in publish_data:
            logger.error(
                "[instagram] error publishing media: %s",
                publish_data["error"],
            )
            raise InstagramPublishError(
                f"Error publishing media: {publish_data['error']}"
            )

        ig_media_id = publish_data.get("id")
        if not ig_media_id:
            logger.error(
                "[instagram] publish response without id. Raw response: %s",
                publish_data,
            )
            raise InstagramPublishError(
                f"Publish response without id: {publish_data}"
            )

        logger.info(
            "[instagram] reel published successfully. ig_media_id=%s",
            ig_media_id,
        )
        return ig_media_id
