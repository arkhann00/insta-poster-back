#!/bin/sh
set -e

# применяем миграции
alembic upgrade head

# запускаем приложение
exec uvicorn src.main:app --host 0.0.0.0 --port 8000
