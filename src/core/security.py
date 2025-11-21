from datetime import datetime, timedelta, timezone
from typing import Any, Dict

from jose import jwt
from passlib.context import CryptContext
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os
import hashlib

from src.core.config import settings

JWT_SECRET = settings.JWT_SECRET
JWT_ALG = settings.JWT_ALG
IG_TOKEN_ENC_KEY = settings.IG_TOKEN_ENC_KEY

# ================== Хэширование паролей (pbkdf2_sha256) ==================
# Без bcrypt, без 72-байтных ограничений и без танцев с версиями.

pwd_context = CryptContext(
    schemes=["pbkdf2_sha256"],
    deprecated="auto",
)


def hash_password(plain: str) -> str:
    if not isinstance(plain, str):
        plain = str(plain)
    return pwd_context.hash(plain)


def get_password_hash(plain: str) -> str:
    # алиас на случай, если где-то использовалось старое имя
    return hash_password(plain)


def verify_password(plain: str, hashed: str) -> bool:
    if not isinstance(plain, str):
        plain = str(plain)
    return pwd_context.verify(plain, hashed)


# ================== JWT ==================

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 30  # 30 дней


def create_access_token(
    data: Dict[str, Any],
    expires_delta: timedelta | None = None,
) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode["exp"] = expire
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALG)
    return encoded_jwt


# ================== Шифрование IG-токенов ==================
# Никаких unhexlify, IG_TOKEN_ENC_KEY может быть любой строкой.

# Получаем 32 байта для AES-256-GCM из строки IG_TOKEN_ENC_KEY:
IG_KEY_BYTES = hashlib.sha256(IG_TOKEN_ENC_KEY.encode("utf-8")).digest()


def encrypt_ig_token(token: str) -> tuple[bytes, bytes]:
    """
    Шифруем Instagram-токен для хранения в БД.
    Возвращаем (ciphertext, iv), которые кладём в:
    - token_encrypted (BYTEA)
    - token_iv        (BYTEA)
    """
    if not isinstance(token, str):
        token = str(token)

    aesgcm = AESGCM(IG_KEY_BYTES)
    iv = os.urandom(12)  # 96 бит для AES-GCM
    ciphertext = aesgcm.encrypt(iv, token.encode("utf-8"), None)
    return ciphertext, iv


def decrypt_ig_token(ciphertext: bytes, iv: bytes) -> str:
    """
    Расшифровать Instagram-токен из БД.
    """
    aesgcm = AESGCM(IG_KEY_BYTES)
    plain = aesgcm.decrypt(iv, ciphertext, None)
    return plain.decode("utf-8")
