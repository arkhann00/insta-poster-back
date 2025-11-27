from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, func
from sqlalchemy.orm import relationship

from src.db.base import Base


class Reel(Base):
    __tablename__ = "reels"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)

    # Полный путь к файлу на диске
    file_path = Column(String, nullable=False)

    # Имя файла, которое было у пользователя при загрузке
    original_filename = Column(String, nullable=False)

    # Подпись к рилсу (на будущее)
    caption = Column(String, nullable=True)

    # Был ли рилс уже использован для выкладки (1 рилс -> 1 аккаунт)
    is_used = Column(Boolean, nullable=False, default=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    # Владелец
    owner = relationship("User", back_populates="reels")

    # Логи назначений
    assignments = relationship(
        "ReelAssignment",
        back_populates="reel",
        cascade="all, delete-orphan",
    )

