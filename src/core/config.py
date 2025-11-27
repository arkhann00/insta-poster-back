from typing import List

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # URL подключения к базе (можно переопределить через переменную окружения DATABASE_URL)
    database_url: str = Field(
        default="postgresql+asyncpg://khaarsyan:Djagarta2005@localhost:5432/insta_poster_db",  # <-- поменяй под свои данные, если нужно
        alias="DATABASE_URL",
    )

    # Секрет для JWT (можно переопределить через переменную окружения JWT_SECRET_KEY)
    jwt_secret_key: str = Field(
        default="dev_super_secret_jwt_key_change_me",  # для разработки ок, в проде обязательно поменять
        alias="JWT_SECRET_KEY",
    )
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24 * 7  # 7 дней

    # Общие настройки приложения
    api_v1_prefix: str = "/api"
    project_name: str = "Insta Poster"

    # Разрешённые источники для фронта
    cors_origins: List[str] = ["http://localhost:5173"]

    # Публичный URL бэкенда, по которому Instagram будет забирать видео
    backend_base_url: str = Field(
        default="http://127.0.0.1:8000",
        alias="BACKEND_BASE_URL",
    )

    # Версия Instagram Graph API
    instagram_graph_api_version: str = Field(
        default="v18.0",
        alias="INSTAGRAM_GRAPH_API_VERSION",
    )

    # Настройки загрузки env
    model_config = SettingsConfigDict(
        env_file="../../.env",            # если .env есть — значения из него переопределят дефолты
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()
