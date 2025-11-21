import os
from pathlib import Path

from pydantic_settings import SettingsConfigDict, BaseSettings

BASE_DIR = Path(__file__).resolve().parents[2]
ENV_FILE = BASE_DIR / ".env"

class Settings(BaseSettings):
    DATABASE_URL: str
    DATABASE_URL_WITHOUT_ASYNCPG: str
    JWT_SECRET: str
    JWT_ALG: str
    JWT_EXPIRE_MINUTES: int
    IG_TOKEN_ENC_KEY: str
    API_PUBLIC_URL: str
    model_config = SettingsConfigDict(
        env_file=str(ENV_FILE),
        env_file_encoding="utf-8",
    )

settings = Settings()