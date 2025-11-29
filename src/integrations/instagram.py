import logging
import time
from pathlib import Path

import httpx

from src.core.config import settings

logger = logging.getLogger(__name__)


class InstagramPublishError(Exception):
    """Ошибка при публикации рилса в Instagram."""


GRAPH_BASE_URL = f"https://graph.facebook.com/{settings.instagram_graph_api_version}"


def _graph_url(path: str) -> str:
    return f"{GRAPH_BASE_URL}/{path.lstrip('/')}"


def build_video_url_for_reel(*, reel, backend_base_url: str | None = None) -> str:
    """
    Собираем публичный URL вида:
    {backend_base_url}/media/reels/{user_id}/{filename}
    """
    base_url = (backend_base_url or settings.backend_base_url).rstrip("/")
    file_name = Path(reel.file_path).name
    return f"{base_url}/media/reels/{reel.user_id}/{file_name}"


def _log_http_request(method: str, url: str, **kwargs) -> None:
    # Логируем без токена целиком (чтобы не светить его полностью)
    safe_kwargs = dict(kwargs)
    data = safe_kwargs.get("data")
    params = safe_kwargs.get("params")

    def _mask_token(obj):
        if not isinstance(obj, dict):
            return obj
        masked = dict(obj)
        token = masked.get("access_token")
        if isinstance(token, str) and len(token) > 10:
            masked["access_token"] = token[:6] + "..." + token[-4:]
        return masked

    if data:
        safe_kwargs["data"] = _mask_token(data)
    if params:
        safe_kwargs["params"] = _mask_token(params)

    logger.info("Instagram API request: %s %s %s", method, url, safe_kwargs)


def _log_http_response(resp: httpx.Response) -> None:
    try:
        json_body = resp.json()
    except Exception:
        json_body = resp.text
    logger.info(
        "Instagram API response: status=%s body=%s",
        resp.status_code,
        json_body,
    )


def publish_reel_to_instagram(*, reel, account) -> str:
    """
    Полный цикл публикации рилса в Instagram:
    1. Создаём media container (media_type=REELS, video_url=...).
    2. Ждём, пока status_code станет FINISHED.
    3. Делаем media_publish и получаем ig_media_id.
    Возвращает ig_media_id.
    """
    if not account.external_id:
        raise InstagramPublishError("У бизнес-аккаунта не заполнен external_id (IG user id)")

    if not account.access_token:
        raise InstagramPublishError("У бизнес-аккаунта не заполнен access_token")

    video_url = build_video_url_for_reel(reel=reel)
    logger.info(
        "Старт публикации рилса: reel_id=%s user_id=%s account_id=%s ig_user_id=%s video_url=%s",
        reel.id,
        reel.user_id,
        account.id,
        account.external_id,
        video_url,
    )

    # 1. Создание media container
    create_url = _graph_url(f"{account.external_id}/media")
    create_data = {
        "media_type": "REELS",
        "video_url": video_url,
        "caption": "",
        "share_to_feed": "true",
        "access_token": account.access_token,
    }

    _log_http_request("POST", create_url, data=create_data)

    try:
        create_resp = httpx.post(create_url, data=create_data, timeout=60)
    except httpx.RequestError as exc:
        logger.exception("Ошибка сети при создании media container: %s", exc)
        raise InstagramPublishError(f"Ошибка сети при создании media container: {exc}") from exc

    _log_http_response(create_resp)

    try:
        create_body = create_resp.json()
    except Exception:
        create_body = {"raw": create_resp.text}

    if create_resp.status_code != 200:
        raise InstagramPublishError(
            f"Ошибка создания media container: status={create_resp.status_code}, body={create_body}"
        )

    creation_id = create_body.get("id")
    if not creation_id:
        raise InstagramPublishError(f"В ответе на создание контейнера нет id: {create_body}")

    logger.info(
        "Media container создан: creation_id=%s reel_id=%s account_id=%s",
        creation_id,
        reel.id,
        account.id,
    )

    # 2. Ожидание обработки контейнера
    status_url = _graph_url(creation_id)
    max_attempts = 10

    for attempt in range(1, max_attempts + 1):
        params = {
            "fields": "status_code",
            "access_token": account.access_token,
        }
        _log_http_request("GET", status_url, params=params)

        try:
            status_resp = httpx.get(status_url, params=params, timeout=30)
        except httpx.RequestError as exc:
            logger.exception(
                "Ошибка сети при проверке статуса контейнера %s: %s",
                creation_id,
                exc,
            )
            raise InstagramPublishError(
                f"Ошибка сети при проверке статуса контейнера {creation_id}: {exc}"
            ) from exc

        _log_http_response(status_resp)

        try:
            status_body = status_resp.json()
        except Exception:
            status_body = {"raw": status_resp.text}

        status_code = status_body.get("status_code")
        logger.info(
            "Статус контейнера %s: попытка=%s status_code=%s body=%s",
            creation_id,
            attempt,
            status_code,
            status_body,
        )

        if status_code == "FINISHED":
            break
        if status_code == "ERROR":
            raise InstagramPublishError(
                f"Instagram вернул статус ERROR для контейнера {creation_id}: {status_body}"
            )

        time.sleep(5)
    else:
        # цикл закончился без break
        raise InstagramPublishError(
            f"Таймаут ожидания обработки контейнера {creation_id}"
        )

    # 3. Публикация контейнера
    publish_url = _graph_url(f"{account.external_id}/media_publish")
    publish_data = {
        "creation_id": creation_id,
        "access_token": account.access_token,
    }

    _log_http_request("POST", publish_url, data=publish_data)

    try:
        publish_resp = httpx.post(publish_url, data=publish_data, timeout=60)
    except httpx.RequestError as exc:
        logger.exception(
            "Ошибка сети при media_publish для контейнера %s: %s",
            creation_id,
            exc,
        )
        raise InstagramPublishError(
            f"Ошибка сети при media_publish для контейнера {creation_id}: {exc}"
        ) from exc

    _log_http_response(publish_resp)

    try:
        publish_body = publish_resp.json()
    except Exception:
        publish_body = {"raw": publish_resp.text}

    if publish_resp.status_code != 200:
        raise InstagramPublishError(
            f"Ошибка media_publish: status={publish_resp.status_code}, body={publish_body}"
        )

    ig_media_id = publish_body.get("id")
    if not ig_media_id:
        raise InstagramPublishError(f"В ответе media_publish нет id: {publish_body}")

    logger.info(
        "Успешная публикация рилса: reel_id=%s account_id=%s ig_media_id=%s",
        reel.id,
        account.id,
        ig_media_id,
    )

    return ig_media_id
