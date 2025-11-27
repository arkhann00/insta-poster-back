from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, func
from sqlalchemy.orm import relationship

from src.db.base import Base


class ReelAssignment(Base):
    __tablename__ = "reel_assignments"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
    )
    reel_id = Column(
        Integer,
        ForeignKey("reels.id", ondelete="CASCADE"),
        nullable=False,
    )
    business_account_id = Column(
        Integer,
        ForeignKey("business_accounts.id", ondelete="CASCADE"),
        nullable=False,
    )

    instagram_media_id = Column(String, nullable=True)
    status = Column(String, nullable=False, default="pending")
    error_message = Column(Text, nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    # ВАЖНО: это то самое свойство, которого не хватало
    owner = relationship("User", back_populates="assignments")

    reel = relationship("Reel", back_populates="assignments")
    business_account = relationship("BusinessAccount", back_populates="assignments")
