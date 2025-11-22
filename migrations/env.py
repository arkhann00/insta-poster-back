# migrations/env.py

from __future__ import annotations

from logging.config import fileConfig

from sqlalchemy import engine_from_config, pool
from alembic import context

from src.core.config import settings
from src.core.db import Base  # если у тебя так называется общий Base для моделей

config = context.config

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """
    Запуск миграций в offline-режиме.
    """
    # Для offline можешь использовать ту же строку, но тоже экранированную
    raw_url = settings.DATABASE_URL_WITHOUT_ASYNCPG
    safe_url = raw_url.replace("%", "%%")

    context.configure(
        url=safe_url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """
    Запуск миграций в online-режиме (через engine).
    """
    configuration = config.get_section(config.config_ini_section, {})

    raw_url = settings.DATABASE_URL_WITHOUT_ASYNCPG
    # КЛЮЧЕВАЯ СТРОКА: экранируем все `%` для ConfigParser
    safe_url = raw_url.replace("%", "%%")

    configuration["sqlalchemy.url"] = safe_url

    connectable = engine_from_config(
        configuration,
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
