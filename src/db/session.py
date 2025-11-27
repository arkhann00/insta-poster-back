from sqlalchemy import create_engine
from sqlalchemy.engine.url import make_url
from sqlalchemy.orm import sessionmaker

from src.core.config import settings

# Берём URL из настроек
raw_url = settings.database_url

# Разбираем URL, чтобы можно было безопасно поменять драйвер
url_obj = make_url(raw_url)

# Если вдруг в URL указан async-драйвер (postgresql+asyncpg),
# принудительно переключаем на обычный sync-драйвер postgresql (psycopg2)
if url_obj.drivername.startswith("postgresql+"):
    url_obj = url_obj.set(drivername="postgresql")

# Создаём обычный синхронный движок
engine = create_engine(
    url_obj,
    pool_pre_ping=True,
    future=True,
)

# Фабрика сессий
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)


def get_db():
    """
    Зависимость для FastAPI: выдаёт синхронную сессию БД
    и закрывает её после использования.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
