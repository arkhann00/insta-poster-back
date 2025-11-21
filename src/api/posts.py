# src/api/posts.py

from __future__ import annotations

from datetime import datetime
from typing import Optional, List
import uuid

from fastapi import APIRouter, Depends, HTTPException, Query, status, Request
from pydantic import BaseModel, field_validator
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.core.db import get_session
from src.models.user import User
from src.models.instagram_account import InstagramAccount
from src.models.media_asset import MediaAsset
from src.models.post import Post, PostStatus
from src.api.deps import get_current_user, get_current_admin

router = APIRouter(prefix="/posts", tags=["posts"])

# ===== Pydantic-схемы =====

class PostCreate(BaseModel):
    account_id: uuid.UUID
    media_id: uuid.UUID
    caption: Optional[str] = None
    tags: List[str] = []
    scheduled_at: Optional[datetime] = None

    @field_validator("tags", mode="before")
    @classmethod
    def default_tags(cls, v):
        return v or []

class PostOut(BaseModel):
    id: uuid.UUID
    account_id: uuid.UUID
    media_id: uuid.UUID
    media_url: str
    caption: Optional[str]
    tags: List[str]
    scheduled_at: Optional[datetime]
    status: PostStatus
    attempt: int
    error: Optional[str]
    instagram_media_id: Optional[str]
    publish_started_at: Optional[datetime]
    published_at: Optional[datetime]
    created_by: Optional[uuid.UUID]
    created_at: datetime

    class Config:
        from_attributes = True

# src/api/media.py
from fastapi.responses import FileResponse





def build_post_out(post: Post, request: Request) -> PostOut:
    base_url = str(request.base_url).rstrip("/")
    media_url = f"{base_url}/media/files/{post.media_id}"

    return PostOut(
        id=post.id,
        account_id=post.account_id,
        media_id=post.media_id,
        media_url=media_url,
        caption=post.caption,
        tags=post.tags,
        scheduled_at=post.scheduled_at,
        status=post.status,
        attempt=post.attempt,
        error=post.error,
        instagram_media_id=post.instagram_media_id,
        publish_started_at=post.publish_started_at,
        published_at=post.published_at,
        created_by=post.created_by,
        created_at=post.created_at,
    )



# ===== Handlers =====

@router.post(
    "",
    response_model=PostOut,
    status_code=status.HTTP_201_CREATED,
)
async def create_post(
    payload: PostCreate,
    request: Request,
    session: AsyncSession = Depends(get_session),
    user: User = Depends(get_current_user),
):
    acc_q = await session.execute(
        select(InstagramAccount).where(
            InstagramAccount.id == payload.account_id
        )
    )
    account = acc_q.scalar_one_or_none()
    if not account:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Instagram account not found",
        )

    media_q = await session.execute(
        select(MediaAsset).where(MediaAsset.id == payload.media_id)
    )
    media = media_q.scalar_one_or_none()
    if not media:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Media not found",
        )
    if media.account_id != account.id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Media belongs to another account",
        )

    post = Post(
        account_id=account.id,
        media_id=media.id,
        caption=payload.caption,
        tags=payload.tags,
        scheduled_at=payload.scheduled_at,
        status=PostStatus.PLANNED,
        attempt=0,
        error=None,
        instagram_media_id=None,
        publish_started_at=None,
        published_at=None,
        created_by=user.id,
    )

    session.add(post)
    await session.commit()
    await session.refresh(post)

    return build_post_out(post, request)


@router.get("", response_model=list[PostOut])
async def list_posts(
    request: Request,
    account_id: Optional[uuid.UUID] = None,
    status_filter: Optional[PostStatus] = Query(
        None,
        alias="status",
        description="Фильтр по статусу",
    ),
    session: AsyncSession = Depends(get_session),
    user: User = Depends(get_current_user),
):
    """
    Получить список постов. Можно фильтровать по account_id и статусу.
    """
    stmt = select(Post)

    if account_id:
        stmt = stmt.where(Post.account_id == account_id)
    if status_filter:
        stmt = stmt.where(Post.status == status_filter)

    stmt = stmt.order_by(Post.created_at.desc())

    res = await session.execute(stmt)
    posts = res.scalars().all()
    return [build_post_out(post, request) for post in posts]


@router.get("/{post_id}", response_model=PostOut)
async def get_post(
    post_id: uuid.UUID,
    request: Request,
    session: AsyncSession = Depends(get_session),
    user: User = Depends(get_current_user),
):
    res = await session.execute(select(Post).where(Post.id == post_id))
    post = res.scalar_one_or_none()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found",
        )
    return build_post_out(post, request)


@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(
    post_id: uuid.UUID,
    session: AsyncSession = Depends(get_session),
    admin: User = Depends(get_current_admin),
):
    res = await session.execute(select(Post).where(Post.id == post_id))
    post = res.scalar_one_or_none()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found",
        )

    await session.delete(post)
    await session.commit()
    return
