# src/api/files.py

from __future__ import annotations

from pathlib import Path
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import FileResponse
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.core.db import get_session
from src.models.media_asset import MediaAsset
from src.api.media import MEDIA_ROOT  # тот же MEDIA_ROOT, что и в upload_media

router = APIRouter(prefix="/files", tags=["files"])


@router.get("/{media_id}")
async def serve_media_file(
    media_id: uuid.UUID,
    session: AsyncSession = Depends(get_session),
):
    res = await session.execute(
        select(MediaAsset).where(MediaAsset.id == media_id)
    )
    asset = res.scalar_one_or_none()
    if not asset:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Media not found",
        )

    # storage_key у тебя вида "media/uuid-file.mp4"
    path = (MEDIA_ROOT.parent / asset.storage_key).resolve()

    if not path.is_file():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="File is missing on disk",
        )

    return FileResponse(
        path,
        media_type=asset.mime,
        filename=asset.filename,
    )
