from pydantic import BaseModel
from typing import Optional


class Color(BaseModel):
    id: int
    article_number: str
    shelf_number: Optional[str] = None
    name: str
    hex: Optional[str] = None
    description: Optional[str] = None
    brand: str
    owned: bool
    reorder: bool
    comment: Optional[str] = None


class ColorUpdate(BaseModel):
    owned: Optional[bool] = None
    comment: Optional[str] = None
    reorder: Optional[bool] = None
