from pydantic import BaseModel, ConfigDict


class BusinessAccountBase(BaseModel):
    # Название аккаунта внутри сервиса
    name: str

    # ID бизнес-аккаунта в Instagram / Meta
    external_id: str | None = None

    # Специальный токен для выкладки
    access_token: str | None = None

    is_active: bool = True


class BusinessAccountCreate(BusinessAccountBase):
    pass


class BusinessAccountRead(BaseModel):
    id: int
    name: str
    external_id: str | None = None
    is_active: bool

    # Токен в ответе не возвращаем, чтобы его лишний раз не светить
    model_config = ConfigDict(from_attributes=True)
