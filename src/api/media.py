# src/api/media.py

from __future__ import annotations

from datetime import datetime
from hashlib import sha256
from pathlib import Path
from typing import Annotated
import uuid

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    UploadFile,
    File,
    Form,
    status,
)
from pydantic import BaseModel
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from src.core.db import get_session
from src.models.media_asset import MediaAsset
from src.models.instagram_account import InstagramAccount
from src.models.user import User
from src.api.deps import get_current_user, get_current_admin
from fastapi import Depends, HTTPException, UploadFile, File, Form, status
from fastapi.responses import FileResponse

router = APIRouter(prefix="/media", tags=["media"])

# папка для файлов, относительно backend/
MEDIA_ROOT = Path(__file__).resolve().parents[2] / "media"
MEDIA_ROOT.mkdir(exist_ok=True)


# ===== Pydantic-схемы =====

class MediaOut(BaseModel):
    id: uuid.UUID
    account_id: uuid.UUID
    filename: str
    mime: str
    size_bytes: int
    storage_provider: str
    storage_key: str
    created_at: datetime

    class Config:
        from_attributes = True


# ===== Handlers =====
ALLOWED_VIDEO_EXTS = {".mp4"}
ALLOWED_VIDEO_MIMES = {"video/mp4"}  # при необходимости расширишь


@router.post(
    "",
    response_model=MediaOut,
    status_code=status.HTTP_201_CREATED,
)
async def upload_media(
    account_id: str = Form(...),
    file: UploadFile = File(...),
    session: AsyncSession = Depends(get_session),
    user: User = Depends(get_current_user),
):
    """
    Загрузка видео/файла и сохранение в media_assets.
    Разрешаем только MP4, чтобы потом всё уверенно работало в браузере и Instagram.
    """

    # 1) Валидация account_id
    try:
        acc_uuid = uuid.UUID(account_id)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid account_id",
        )

    acc_q = await session.execute(
        select(InstagramAccount).where(InstagramAccount.id == acc_uuid)
    )
    account = acc_q.scalar_one_or_none()
    if not account:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Instagram account not found",
        )

    # 2) Проверяем расширение и mime
    ext = Path(file.filename).suffix.lower()
    mime = file.content_type or ""

    if ext not in ALLOWED_VIDEO_EXTS or mime not in ALLOWED_VIDEO_MIMES:
        # Можно сделать более мягко: принять файл, но пометить как "требует конвертации".
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Поддерживаются только MP4 (video/mp4). "
                   "Если у тебя .mov — конвертируй в mp4 перед загрузкой.",
        )

    # 3) Читаем файл
    content = await file.read()
    if not content:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Empty file",
        )

    checksum = sha256(content).hexdigest()

    stored_name = f"{uuid.uuid4()}{ext}"
    stored_path = MEDIA_ROOT / stored_name

    with stored_path.open("wb") as f:
        f.write(content)

    asset = MediaAsset(
        account_id=account.id,
        uploader_id=user.id,
        storage_provider="local",
        storage_key=str(stored_path.relative_to(MEDIA_ROOT.parent)),  # media/...
        filename=file.filename,
        mime=mime or "application/octet-stream",
        size_bytes=len(content),
        duration_ms=None,
        width=None,
        height=None,
        checksum_sha256=checksum,
    )

    session.add(asset)
    await session.commit()
    await session.refresh(asset)

    return asset


@router.get("", response_model=list[MediaOut])
@router.get("", response_model=list[MediaOut])
async def list_media(
    account_id: uuid.UUID | None = None,
    session: AsyncSession = Depends(get_session),
    user: User = Depends(get_current_user),
):

    """
    Список медиа. Пока без разграничения по пользователям:
    любой авторизованный видит все.
    """
    stmt = select(MediaAsset)
    if account_id:
        stmt = stmt.where(MediaAsset.account_id == account_id)

    res = await session.execute(stmt.order_by(MediaAsset.created_at.desc()))
    items = res.scalars().all()
    return items


@router.delete("/{media_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_media(
    media_id: uuid.UUID,
    session: AsyncSession = Depends(get_session),
    admin: User = Depends(get_current_admin),
):

    # проверяем наличие
    res = await session.execute(
        select(MediaAsset).where(MediaAsset.id == media_id)
    )
    asset = res.scalar_one_or_none()
    if not asset:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Media not found",
        )

    # удаляем файл с диска (если есть)
    path = (MEDIA_ROOT.parent / asset.storage_key).resolve()
    try:
        if path.is_file():
            path.unlink()
    except OSError:
        # если не получилось удалить — не фейлим API, просто логически удаляем запись
        pass

    await session.execute(
        delete(MediaAsset).where(MediaAsset.id == media_id)
    )
    await session.commit()
    return

@router.get("/files/{media_id}")
async def get_media_file(
    media_id: uuid.UUID,
    session: AsyncSession = Depends(get_session),
):
    res = await session.execute(
        select(MediaAsset).where(MediaAsset.id == media_id)
    )
    asset = res.scalar_one_or_none()
    if not asset:
        raise HTTPException(status_code=404, detail="Media not found")

    path = (MEDIA_ROOT.parent / asset.storage_key).resolve()
    if not path.is_file():
        raise HTTPException(status_code=404, detail="File not found on disk")

    return FileResponse(
        path,
        media_type=asset.mime or "application/octet-stream",
        filename=asset.filename,
    )
