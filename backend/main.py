from fastapi import FastAPI, Path, HTTPException
from database import get_db, init_db
from models import Color, ColorUpdate
from contextlib import asynccontextmanager


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
