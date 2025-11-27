from datetime import datetime, timedelta, timezone
from typing import Any

from jose import jwt
from passlib.context import CryptContext
from passlib.exc import UnknownHashError

from src.core.config import settings

# Используем pbkdf2_sha256 вместо bcrypt
pwd_context = CryptContext(
    schemes=["pbkdf2_sha256"],
    deprecated="auto",
)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Проверка пароля.
    Если хеш в БД в непонятном формате (старый/битый), возвращаем False,
    а не роняем сервер.
    """
    try:
        return pwd_context.verify(plain_password, hashed_password)
    except UnknownHashError:
        return False


def get_password_hash(password: str) -> str:
    """
    Хеширование пароля через pbkdf2_sha256.
    Никаких ограничений по длине до 72 байт, как у bcrypt.
    """
    return pwd_context.hash(password)


def create_access_token(*, subject: str, expires_minutes: int | None = None) -> str:
    """
    Генерация JWT токена.
    subject — обычно str(user.id)
    """
    if expires_minutes is None:
        expires_minutes = settings.access_token_expire_minutes

    expire = datetime.now(timezone.utc) + timedelta(minutes=expires_minutes)

    to_encode: dict[str, Any] = {
        "sub": subject,
        "exp": expire,
    }

    encoded_jwt = jwt.encode(
        to_encode,
        settings.jwt_secret_key,
        algorithm=settings.jwt_algorithm,
    )
    return encoded_jwt
