from datetime import datetime
from typing import Annotated
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy import select, delete
from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession

from ..core.db import get_session
from ..core.security import encrypt_ig_token
from ..models.instagram_account import InstagramAccount
from ..models.user import User
from .deps import get_current_user, get_current_admin

router = APIRouter(prefix="/accounts", tags=["accounts"])


# ===== Pydantic-схемы =====

class AccountBase(BaseModel):
    name: str
    ig_user_id: str
    token_expires_at: datetime | None = None


class AccountCreate(AccountBase):
    access_token: str


class AccountOut(AccountBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True  # для Pydantic v2


# ===== Ручки =====

@router.post(
    "",
    response_model=AccountOut,
    status_code=status.HTTP_201_CREATED,
)
async def create_account(
    payload: AccountCreate,
    session: Annotated[AsyncSession, Depends(get_session)],
    admin: Annotated[User, Depends(get_current_admin)],
):
    # Проверяем уникальность ig_user_id
    existing = await session.execute(
        select(InstagramAccount).where(
            InstagramAccount.ig_user_id == payload.ig_user_id
        )
    )
    if existing.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Instagram account with this ig_user_id already exists",
        )

    acc = InstagramAccount(
        name=payload.name,
        ig_user_id=payload.ig_user_id,
        access_token=payload.access_token,
        token_expires_at=payload.token_expires_at,
        created_by=admin.id,
    )

    session.add(acc)
    await session.commit()
    await session.refresh(acc)
    return acc


@router.get("", response_model=list[AccountOut])
async def list_accounts(
    session: Annotated[AsyncSession, Depends(get_session)],
    current_user: Annotated[User, Depends(get_current_user)],
):
    # Пока нет разделения по правам здесь: любой авторизованный видит список
    result = await session.execute(select(InstagramAccount))
    accounts = result.scalars().all()
    return accounts


@router.delete(
    "/{account_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_account(
    account_id: uuid.UUID,
    session: Annotated[AsyncSession, Depends(get_session)],
    admin: Annotated[User, Depends(get_current_admin)],
):
    # Проверим, что аккаунт есть
    result = await session.execute(
        select(InstagramAccount).where(InstagramAccount.id == account_id)
    )
    acc = result.scalar_one_or_none()
    if not acc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Account not found",
        )

    await session.execute(
        delete(InstagramAccount).where(InstagramAccount.id == account_id)
    )
    await session.commit()
    return