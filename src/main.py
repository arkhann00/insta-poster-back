from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.auth import router as auth_router
from src.api.accounts import router as accounts_router
from src.api.reels import router as reels_router
from src.core.config import settings
from src.db.base import Base
from src.db.session import engine
from fastapi.staticfiles import StaticFiles
from src.core.paths import REELS_ROOT

app = FastAPI(
    title=settings.project_name,
    version="0.1.0",
    description=(
        "Бэкенд-сервис для рекламного агентства "
        "для выкладки рилсов по аккаунтам."
    ),
)

# Разрешаем запросы с нашего фронта
origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)


app.include_router(
    auth_router,
    prefix=f"{settings.api_v1_prefix}/auth",
    tags=["auth"],
)

app.include_router(
    accounts_router,
    prefix=f"{settings.api_v1_prefix}/accounts",
    tags=["accounts"],
)

app.include_router(
    reels_router,
    prefix=f"{settings.api_v1_prefix}/reels",
    tags=["reels"],
)
app.mount(
    "/media/reels",
    StaticFiles(directory=REELS_ROOT, check_dir=True),
    name="reels",
)

@app.get("/health")
async def health_check():
    return {"status": "ok"}
