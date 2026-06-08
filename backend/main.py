from fastapi import FastAPI, Path, HTTPException
from database import get_db, init_db
from models import Color, ColorUpdate
from contextlib import asynccontextmanager
import sqlite3


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(lifespan=lifespan)


@app.get("/colors")
def get_colors():

    con = get_db()
    cur = con.cursor()
    colors = cur.execute("SELECT * FROM colors").fetchall()

    con.close()
    return colors


@app.patch("/colors/{id}")
def update_color(id: int, update: ColorUpdate):
    changes = update.model_dump(exclude_unset=True)
    con = get_db()
    cur = con.cursor()

    selected_color = cur.execute("SELECT * FROM colors WHERE id = ?", (id,)).fetchone()
    if selected_color is None:
        raise HTTPException(status_code=404, detail="Color not found")
    fields = ", ".join(f"{key} = ?" for key in changes.keys())
    values = list(changes.values()) + [id]
    cur.execute(f"UPDATE colors SET {fields} WHERE id = ?", values)
    con.commit()
    selected_color = cur.execute("SELECT * FROM colors WHERE id = ?", (id,)).fetchone()
    con.close()

    return selected_color
