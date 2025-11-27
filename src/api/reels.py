from pathlib import Path
from typing import List
from uuid import uuid4

from fastapi import (
    APIRouter,
    Depends,
    File,
    HTTPException,
    UploadFile,
    status,
)
from sqlalchemy.orm import Session, selectinload

from src.api.deps import get_current_user, get_db
from src.core.paths import REELS_ROOT
from src.integrations.instagram import (
    InstagramPublishError,
    publish_reel_to_instagram,
)
from src.models.business_account import BusinessAccount
from src.models.reel import Reel
from src.models.reel_assignment import ReelAssignment
from src.models.user import User
from src.schemas.reel import ReelRead
from src.schemas.reel_assignment import ReelAssignmentRead
from src.schemas.reels_publish import PublishedPair, ReelsPublishResult

router = APIRouter()


@router.get("/", response_model=List[ReelRead])
def list_reels(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[Reel]:
    reels = (
        db.query(Reel)
        .filter(Reel.user_id == current_user.id)
        .order_by(Reel.id)
        .all()
    )
    return reels


@router.post(
    "/",
    response_model=ReelRead,
    status_code=status.HTTP_201_CREATED,
)
async def upload_reel(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> Reel:
    original_name = file.filename or "reel.mp4"
    ext = Path(original_name).suffix.lower()
    if not ext:
        ext = ".mp4"

    new_filename = f"{uuid4().hex}{ext}"

    user_dir = REELS_ROOT / str(current_user.id)
    user_dir.mkdir(parents=True, exist_ok=True)

    dest_path = user_dir / new_filename

    try:
        with dest_path.open("wb") as out_file:
            while True:
                chunk = await file.read(1024 * 1024)
                if not chunk:
                    break
                out_file.write(chunk)
    finally:
        await file.close()

    reel = Reel(
        user_id=current_user.id,
        file_path=str(dest_path),
        original_filename=original_name,
        caption=None,
        is_used=False,
    )
    db.add(reel)
    db.commit()
    db.refresh(reel)
    return reel


@router.post(
    "/bulk",
    response_model=List[ReelRead],
    status_code=status.HTTP_201_CREATED,
)
async def upload_reels_bulk(
    files: List[UploadFile] = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[Reel]:
    if not files:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Не передано ни одного файла",
        )

    user_dir = REELS_ROOT / str(current_user.id)
    user_dir.mkdir(parents=True, exist_ok=True)

    created_reels: list[Reel] = []

    for upload in files:
        original_name = upload.filename or "reel.mp4"
        ext = Path(original_name).suffix.lower()
        if not ext:
            ext = ".mp4"

        new_filename = f"{uuid4().hex}{ext}"
        dest_path = user_dir / new_filename

        try:
            with dest_path.open("wb") as out_file:
                while True:
                    chunk = await upload.read(1024 * 1024)
                    if not chunk:
                        break
                    out_file.write(chunk)
        finally:
            await upload.close()

        reel = Reel(
            user_id=current_user.id,
            file_path=str(dest_path),
            original_filename=original_name,
            caption=None,
            is_used=False,
        )
        db.add(reel)
        created_reels.append(reel)

    db.commit()

    for reel in created_reels:
        db.refresh(reel)

    return created_reels


@router.delete(
    "/{reel_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_reel(
    reel_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> None:
    reel = (
        db.query(Reel)
        .filter(
            Reel.id == reel_id,
            Reel.user_id == current_user.id,
        )
        .first()
    )
    if reel is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Рилс не найден",
        )

    file_path = Path(reel.file_path)
    try:
        file_path.unlink(missing_ok=True)
    except Exception:
        pass

    db.delete(reel)
    db.commit()


@router.post(
    "/publish",
    response_model=ReelsPublishResult,
)
def publish_reels(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> ReelsPublishResult:
    reels = (
        db.query(Reel)
        .filter(
            Reel.user_id == current_user.id,
            Reel.is_used.is_(False),
        )
        .order_by(Reel.id)
        .all()
    )

    accounts = (
        db.query(BusinessAccount)
        .filter(
            BusinessAccount.user_id == current_user.id,
            BusinessAccount.is_active.is_(True),
        )
        .order_by(BusinessAccount.id)
        .all()
    )

    if not reels or not accounts:
        return ReelsPublishResult(
            published=[],
            total_published=0,
            reels_left_unassigned=len(reels),
            accounts_without_reels=len(accounts),
        )

    pairs_count = min(len(reels), len(accounts))
    published_pairs: list[PublishedPair] = []

    for index in range(pairs_count):
        reel = reels[index]
        account = accounts[index]

        assignment = ReelAssignment(
            user_id=current_user.id,
            reel_id=reel.id,
            business_account_id=account.id,
            status="pending",
        )
        db.add(assignment)
        db.flush()

        try:
            ig_media_id = publish_reel_to_instagram(reel=reel, account=account)

            assignment.instagram_media_id = ig_media_id
            assignment.status = "published"
            assignment.error_message = None

            reel.is_used = True

            try:
                Path(reel.file_path).unlink(missing_ok=True)
            except Exception:
                pass

            published_pairs.append(
                PublishedPair(
                    reel_id=reel.id,
                    business_account_id=account.id,
                )
            )
        except InstagramPublishError as exc:
            assignment.status = "error"
            assignment.error_message = str(exc)

    db.commit()

    return ReelsPublishResult(
        published=published_pairs,
        total_published=len(published_pairs),
        reels_left_unassigned=len(reels) - pairs_count,
        accounts_without_reels=len(accounts) - pairs_count,
    )


@router.get(
    "/assignments",
    response_model=List[ReelAssignmentRead],
)
def list_reel_assignments(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[ReelAssignment]:
    """
    Лог всех попыток отправки рилсов текущего пользователя:
    какой рилс -> на какой аккаунт -> статус / ошибка.
    """
    assignments = (
        db.query(ReelAssignment)
        .options(
            selectinload(ReelAssignment.reel),
            selectinload(ReelAssignment.business_account),
        )
        .filter(ReelAssignment.user_id == current_user.id)
        .order_by(ReelAssignment.created_at.desc())
        .all()
    )
    return assignments
