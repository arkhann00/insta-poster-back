# src/models/post.py

from __future__ import annotations

from datetime import datetime
import uuid
from enum import Enum as PyEnum

from sqlalchemy import ForeignKey, text, Enum as SAEnum
from sqlalchemy.dialects.postgresql import (
    UUID,
    TIMESTAMP,
    INTEGER,
    TEXT,
    JSONB,
)
from sqlalchemy.orm import Mapped, mapped_column

from src.core.db import Base


class PostStatus(str, PyEnum):
    PLANNED = "planned"
    BOOKING = "booking"
    PUBLISHING = "publishing"
    PUBLISHED = "published"
    FAILED = "failed"
    PAUSED = "paused"


class Post(Base):
    __tablename__ = "posts"

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

    media_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("media_assets.id", ondelete="CASCADE"),
        nullable=False,
    )

    caption: Mapped[str | None] = mapped_column(TEXT, nullable=True)

    tags: Mapped[list[str]] = mapped_column(
        JSONB,
        nullable=False,
        server_default=text("'[]'::jsonb"),
    )

    scheduled_at: Mapped[datetime | None] = mapped_column(
        TIMESTAMP(timezone=True),
        nullable=True,
    )

    # ВАЖНО: говорим SQLAlchemy использовать значения .value (строчные),
    # а не имена enum'а ("PLANNED").
    status: Mapped[PostStatus] = mapped_column(
        SAEnum(
            PostStatus,
            name="post_status",
            values_callable=lambda enum_cls: [e.value for e in enum_cls],
            create_type=False,
        ),
        nullable=False,
    )

    attempt: Mapped[int] = mapped_column(
        INTEGER,
        nullable=False,
        server_default=text("0"),
    )

    error: Mapped[str | None] = mapped_column(TEXT, nullable=True)

    instagram_media_id: Mapped[str | None] = mapped_column(TEXT, nullable=True)

    publish_started_at: Mapped[datetime | None] = mapped_column(
        TIMESTAMP(timezone=True),
        nullable=True,
    )

    published_at: Mapped[datetime | None] = mapped_column(
        TIMESTAMP(timezone=True),
        nullable=True,
    )

    created_by: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("now()"),
    )
