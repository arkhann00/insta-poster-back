# src/models/media_asset.py

from datetime import datetime
import uuid

from sqlalchemy import ForeignKey, text
from sqlalchemy.dialects.postgresql import UUID, TIMESTAMP, BIGINT
from sqlalchemy.orm import Mapped, mapped_column

from src.core.db import Base


class MediaAsset(Base):
    __tablename__ = "media_assets"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    account_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("instagram_accounts.id", ondelete="CASCADE"),
        nullable=False,
    )

    uploader_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )

    storage_provider: Mapped[str] = mapped_column(nullable=False)  # 'local'
    storage_key: Mapped[str] = mapped_column(nullable=False)       # путь к файлу

    filename: Mapped[str] = mapped_column(nullable=False)
    mime: Mapped[str] = mapped_column(nullable=False)
    size_bytes: Mapped[int] = mapped_column(BIGINT, nullable=False)

    duration_ms: Mapped[int | None] = mapped_column(nullable=True)
    width: Mapped[int | None] = mapped_column(nullable=True)
    height: Mapped[int | None] = mapped_column(nullable=True)

    checksum_sha256: Mapped[str | None] = mapped_column(nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        TIMESTAMP(timezone=True),
        server_default=text("now()"),
        nullable=False,
    )
