from pydantic import BaseModel, ConfigDict


class ReelRead(BaseModel):
    id: int
    original_filename: str
    is_used: bool

    model_config = ConfigDict(from_attributes=True)
