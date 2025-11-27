from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from src.api.deps import get_current_user, get_db
from src.models.business_account import BusinessAccount
from src.models.user import User
from src.schemas.business_account import (
    BusinessAccountCreate,
    BusinessAccountRead,
)

router = APIRouter()


@router.get("/", response_model=List[BusinessAccountRead])
def list_business_accounts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[BusinessAccount]:
    accounts = (
        db.query(BusinessAccount)
        .filter(BusinessAccount.user_id == current_user.id)
        .order_by(BusinessAccount.id)
        .all()
    )
    return accounts


@router.post(
    "/",
    response_model=BusinessAccountRead,
    status_code=status.HTTP_201_CREATED,
)
def create_business_account(
    account_in: BusinessAccountCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> BusinessAccount:
    account = BusinessAccount(
        user_id=current_user.id,
        name=account_in.name,
        external_id=account_in.external_id,
        access_token=account_in.access_token,
        is_active=account_in.is_active,
    )
    db.add(account)
    db.commit()
    db.refresh(account)
    return account


@router.get("/{account_id}", response_model=BusinessAccountRead)
def get_business_account(
    account_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> BusinessAccount:
    account = (
        db.query(BusinessAccount)
        .filter(
            BusinessAccount.id == account_id,
            BusinessAccount.user_id == current_user.id,
        )
        .first()
    )
    if account is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Бизнес-аккаунт не найден",
        )
    return account


@router.delete(
    "/{account_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_business_account(
    account_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> None:
    account = (
        db.query(BusinessAccount)
        .filter(
            BusinessAccount.id == account_id,
            BusinessAccount.user_id == current_user.id,
        )
        .first()
    )
    if account is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Бизнес-аккаунт не найден",
        )

    db.delete(account)
    db.commit()
