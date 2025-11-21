import asyncio
import os
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import text
from sqlalchemy.ext.asyncio import create_async_engine
import re

load_dotenv(dotenv_path="../.env")
DB_URL = os.environ["DATABASE_URL"]

MIGRATIONS_DIR = Path(__file__).resolve().parents[1] / "migrations"

SQL_COMMENT_PREFIX = "--"
VERSION_PREFIX = ""  # не нужен, просто берём имя файла

async def apply_sql(conn, sql_text: str):
    """
    Режем SQL на отдельные выражения, уважая:
    - одинарные строки '...'
    - доллар-квотирование $$ ... $$ или $tag$ ... $tag$
    """
    stmts = []
    buf = []
    in_single = False
    in_dollar = False
    dollar_tag = None  # например, 'tag' для $tag$

    i = 0
    s = sql_text
    n = len(s)

    while i < n:
        ch = s[i]
        nxt = s[i+1] if i + 1 < n else ''

        # начало/конец доллар-квоты: $...$
        if not in_single:
            # матч начала $tag$ или $$
            m = re.match(r"\$([A-Za-z0-9_]*)\$", s[i:])
            if not in_dollar and m:
                in_dollar = True
                dollar_tag = m.group(1)  # может быть ''
                buf.append(m.group(0))
                i += len(m.group(0))
                continue
            # матч конца $tag$ / $$
            if in_dollar:
                end_pat = f"${dollar_tag}$"
                if s.startswith(end_pat, i):
                    in_dollar = False
                    dollar_tag = None
                    buf.append(end_pat)
                    i += len(end_pat)
                    continue

        # одинарные кавычки (экранирование через '')
        if not in_dollar and ch == "'":
            if in_single and nxt == "'":  # escaped '
                buf.append("''")
                i += 2
                continue
            in_single = not in_single
            buf.append(ch)
            i += 1
            continue

        # разделяем по ';' только если НЕ внутри кавычек/доллар-квоты
        if ch == ';' and not in_single and not in_dollar:
            stmt = ''.join(buf).strip()
            if stmt:
                stmts.append(stmt)
            buf = []
            i += 1
            continue

        buf.append(ch)
        i += 1

    tail = ''.join(buf).strip()
    if tail:
        stmts.append(tail)

    for stmt in stmts:
        await conn.exec_driver_sql(stmt)


async def ensure_table(conn):
    await conn.exec_driver_sql("""
    CREATE TABLE IF NOT EXISTS app_migrations (
      id BIGSERIAL PRIMARY KEY,
      version TEXT NOT NULL UNIQUE,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    """)

async def already_applied(conn):
    rows = await conn.exec_driver_sql("SELECT version FROM app_migrations ORDER BY version")
    return {r[0] for r in rows}

async def mark_applied(conn, version: str):
    await conn.execute(text("INSERT INTO app_migrations(version) VALUES (:v)"), {"v": version})

async def main():
    engine = create_async_engine(DB_URL, echo=True)
    async with engine.begin() as conn:
        await ensure_table(conn)
        done = await already_applied(conn)

        files = sorted(MIGRATIONS_DIR.glob("*.sql"))
        to_apply = [f for f in files if f.name not in done]

        if not to_apply:
            print("No pending migrations.")
            return

        for f in to_apply:
            print(f"Applying {f.name} ...")
            sql = f.read_text(encoding="utf-8")
            await apply_sql(conn, sql)
            await mark_applied(conn, f.name)
            print(f"Applied {f.name}")

    await engine.dispose()
    print("Done.")

if __name__ == "__main__":
    asyncio.run(main())
