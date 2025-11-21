import uuid

from sqlalchemy import ForeignKey, text, Text
from sqlalchemy.dialects.postgresql import UUID, BYTEA, TIMESTAMP
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime

from ..core.db import Base


class InstagramAccount(Base):
    __tablename__ = "instagram_accounts"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )
    name: Mapped[str] = mapped_column(nullable=False)
    ig_user_id: Mapped[str] = mapped_column(nullable=False, unique=True)

    access_token: Mapped[str] = mapped_column(Text, nullable=False)

    token_expires_at: Mapped[datetime | None] = mapped_column(
        TIMESTAMP(timezone=True),
        nullable=True,
    )

    created_by: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    created_at: Mapped[datetime] = mapped_column(
        TIMESTAMP(timezone=True),
        server_default=text("now()"),
    )
