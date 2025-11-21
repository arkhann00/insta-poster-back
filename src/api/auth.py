# src/api/auth.py

from uuid import UUID, uuid4
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr, ConfigDict
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from src.api.deps import get_current_user
from src.core.db import get_session
from src.core.security import verify_password, hash_password, create_access_token
from src.models.user import User

router = APIRouter(prefix="/auth", tags=["auth"])


# ====== Pydantic-схемы ======

class LoginIn(BaseModel):
    email: EmailStr
    password: str


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserOut(BaseModel):
    """
    То, что мы возвращаем наружу (без password_hash)
    """
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    email: EmailStr
    role: str


class UserCreate(BaseModel):
    """
    Тело запроса для регистрации.
    Через Swagger будет очень удобно:
    - email
    - password
    - role (admin/worker)
    """
    email: EmailStr
    password: str
    role: Literal["admin", "worker"] = "worker"


# ====== Ручка логина ======

@router.post("/login", response_model=TokenOut)
async def login(
    data: LoginIn,
    session: AsyncSession = Depends(get_session),
) -> TokenOut:
    stmt = select(User).where(User.email == data.email)
    user = await session.scalar(stmt)

    if not user or not verify_password(data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный email или пароль",
        )

    token = create_access_token({"sub": str(user.id), "role": user.role})
    return TokenOut(access_token=token)


# ====== Ручка регистрации пользователя ======

@router.post("/register", response_model=UserOut, status_code=201)
async def register_user(
    data: UserCreate,
    session: AsyncSession = Depends(get_session),
) -> UserOut:
    """
    Удобная регистрация пользователя через Swagger.

    Пока хэндлер открыт. Для боевого режима можно будет повесить
    проверку «только админ» через Depends(get_current_user).
    """

    # Проверяем, что такого email ещё нет
    stmt = select(User).where(User.email == data.email)
    existing = await session.scalar(stmt)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Пользователь с таким email уже существует",
        )

    # Хэшируем пароль
    password_hash = hash_password(data.password)

    # Создаём пользователя
    user = User(
        id=uuid4(),
        email=data.email,
        password_hash=password_hash,
        role=data.role,
    )

    session.add(user)
    await session.commit()
    await session.refresh(user)

    return user


# ====== /auth/me (если ещё нет – можешь добавить) ======

@router.get("/me", response_model=UserOut)
async def get_me(current_user: User = Depends(get_current_user)) -> UserOut:
    return current_user