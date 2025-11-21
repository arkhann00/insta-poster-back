# src/main.py

import asyncio

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.auth import router as auth_router
from src.api.accounts import router as accounts_router
from src.api.media import router as media_router
from src.api.posts import router as posts_router
from src.core.scheduler import scheduler_loop
from src.api.files import router as files_router

from src.core.config import settings


app = FastAPI(title="Reels Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(accounts_router)
app.include_router(media_router)
app.include_router(posts_router)
app.include_router(files_router)


@app.on_event("startup")
async def on_startup():
    # Запускаем планировщик в фоне
    asyncio.create_task(scheduler_loop())
    print("[app] scheduler started")


@app.get("/health")
async def health():
    return {"ok": True}
