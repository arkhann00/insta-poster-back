from __future__ import annotations

from typing import Optional
import asyncio
import logging

import httpx

from src.core.config import settings
from src.models.instagram_account import InstagramAccount
from src.models.media_asset import MediaAsset

API_PUBLIC_URL = settings.API_PUBLIC_URL
GRAPH_API_VERSION = "v21.0"

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
    Ожидает, пока контейнер медиа станет готов к публикации (status_code = FINISHED).
    Если статус ERROR или по таймауту — выбрасывает InstagramPublishError.
    """

    status_url = f"https://graph.facebook.com/{GRAPH_API_VERSION}/{creation_id}"
    elapsed = 0
    last_status: Optional[str] = None

    logger.info(
        "[instagram] wait container %s ready (max_wait=%s, poll=%s)",
        creation_id,
        max_wait_seconds,
        poll_interval_seconds,
    )

    while elapsed < max_wait_seconds:
        resp = await client.get(
            status_url,
            params={
                # добавили больше полей для нормального дебага
                "fields": "status_code,status,error_message",
                "access_token": access_token,
            },
        )

        try:
            resp.raise_for_status()
        except httpx.HTTPError as e:
            raise InstagramPublishError(
                f"HTTP error while checking media container status: {e}"
            ) from e

        data = resp.json()
        logger.debug("[instagram] container %s status poll: %s", creation_id, data)

        if "error" in data:
            raise InstagramPublishError(
                f"Error checking media container status: {data['error']}"
            )

        status = data.get("status_code")
        last_status = status

        if status == "FINISHED":
            # Контейнер готов, можно публиковать
            logger.info("[instagram] container %s finished", creation_id)
            return

        if status == "ERROR":
            # Instagram не смог обработать медиаданные (неподходящий формат, кодек и т.п.)
            raise InstagramPublishError(
                f"Media container processing failed with status ERROR: {data}"
            )

        # Всё ещё IN_PROGRESS или неизвестный статус — подождём и попробуем снова
        await asyncio.sleep(poll_interval_seconds)
        elapsed += poll_interval_seconds

    # Если вышли из цикла по времени — таймаут
    raise InstagramPublishError(
        f"Timeout waiting for media container {creation_id} to be ready. "
        f"Last known status: {last_status!r}"
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

    # ПУБЛИЧНЫЙ URL до файла, который доступен из интернета
    # и совпадает с роутом в src/api/media.py
    video_url = f"{API_PUBLIC_URL}/media/files/{media.id}"
    logger.info(
        "[instagram] publishing reel: account=%s, media=%s, video_url=%s",
        account.id,
        media.id,
        video_url,
    )

    creation_url = (
        f"https://graph.facebook.com/{GRAPH_API_VERSION}/{account.ig_user_id}/media"
    )

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
            creation_resp.raise_for_status()
        except httpx.HTTPError as e:
            raise InstagramPublishError(
                f"HTTP error while creating media container: {e}"
            ) from e

        creation_data = creation_resp.json()
        logger.info("[instagram] creation response: %s", creation_data)

        if "error" in creation_data:
            raise InstagramPublishError(
                f"Error creating media container: {creation_data['error']}"
            )

        creation_id = creation_data.get("id")
        if not creation_id:
            raise InstagramPublishError(
                f"Media container created without id: {creation_data}"
            )

        # 2) Ждём, пока контейнер станет готов к публикации
        await _wait_for_container_ready(
            client=client,
            creation_id=creation_id,
            access_token=account.access_token,
            max_wait_seconds=300,        # до 5 минут ожидания
            poll_interval_seconds=5,     # опрос каждые 5 секунд
        )

        # 3) публикуем контейнер
        publish_url = (
            f"https://graph.facebook.com/{GRAPH_API_VERSION}/{account.ig_user_id}/media_publish"
        )

        publish_resp = await client.post(
            publish_url,
            data={
                "creation_id": creation_id,
                "access_token": account.access_token,
            },
        )

        try:
            publish_resp.raise_for_status()
        except httpx.HTTPError as e:
            raise InstagramPublishError(
                f"HTTP error while publishing media: {e}"
            ) from e

        publish_data = publish_resp.json()
        logger.info("[instagram] publish response: %s", publish_data)

        if "error" in publish_data:
            raise InstagramPublishError(
                f"Error publishing media: {publish_data['error']}"
            )

        ig_media_id = publish_data.get("id")
        if not ig_media_id:
            raise InstagramPublishError(
                f"Publish response without id: {publish_data}"
            )

        return ig_media_id
