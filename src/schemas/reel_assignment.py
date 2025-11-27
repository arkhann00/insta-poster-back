from datetime import datetime

from pydantic import BaseModel, ConfigDict


class BusinessAccountShort(BaseModel):
    id: int
    name: str
    external_id: str | None = None

    model_config = ConfigDict(from_attributes=True)


class ReelShort(BaseModel):
    id: int
    original_filename: str

    model_config = ConfigDict(from_attributes=True)


class ReelAssignmentRead(BaseModel):
    id: int
    status: str
    instagram_media_id: str | None = None
    error_message: str | None = None
    created_at: datetime

    reel: ReelShort
    business_account: BusinessAccountShort

    model_config = ConfigDict(from_attributes=True)
