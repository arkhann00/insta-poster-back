import asyncio
import uuid

from src.core.db import SessionLocal
from src.models.user import User


async def create_user(email: str, password: str, role: str = "admin"):
    async with SessionLocal() as session:
        # проверим, что такого email ещё нет
        existing = await session.execute(
            User.__table__.select().where(User.email == email)
        )
        row = existing.first()
        if row:
            print(f"Пользователь {email} уже существует")
            return

        user = User(
            id=uuid.uuid4(),
            email=email,
            password_hash=get_password_hash(password),
            role=role,
        )
        session.add(user)
        await session.commit()
        print(f"Создан пользователь {email} с ролью {role}")


if __name__ == "__main__":
    asyncio.run(create_user("admin@agency.local", "admin123", "admin"))
