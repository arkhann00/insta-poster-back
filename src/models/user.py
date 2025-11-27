from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship

from src.db.base import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String, nullable=True)
    is_active = Column(Boolean, nullable=False, default=True)

    # Бизнес-аккаунты пользователя
    business_accounts = relationship(
        "BusinessAccount",
        back_populates="owner",
        cascade="all, delete-orphan",
    )

    # Рилсы пользователя
    reels = relationship(
        "Reel",
        back_populates="owner",
        cascade="all, delete-orphan",
    )

    # Логи назначений рилсов
    reel_assignments = relationship(
        "ReelAssignment",
        back_populates="owner",
        cascade="all, delete-orphan",
    )
    assignments = relationship(
        "ReelAssignment",
        back_populates="owner",
        cascade="all, delete-orphan",
    )
