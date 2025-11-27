from pydantic import BaseModel


class PublishedPair(BaseModel):
    reel_id: int
    business_account_id: int


class ReelsPublishResult(BaseModel):
    published: list[PublishedPair]
    total_published: int
    reels_left_unassigned: int
    accounts_without_reels: int
