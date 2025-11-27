from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text, func
from sqlalchemy.orm import relationship

from src.db.base import Base


class BusinessAccount(Base):
    __tablename__ = "business_accounts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)

    # Человекочитаемое имя аккаунта внутри сервиса
    name = Column(String, nullable=False)

    # ID бизнес-аккаунта в Instagram / Meta
    external_id = Column(String, nullable=True)

    # Специальный токен для выкладки от лица этого аккаунта
    access_token = Column(Text, nullable=True)

    is_active = Column(Boolean, nullable=False, default=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )
    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    owner = relationship("User", back_populates="business_accounts")

    assignments = relationship(
        "ReelAssignment",
        back_populates="business_account",
        cascade="all, delete-orphan",
    )

