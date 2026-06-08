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
    init_db()
    con = get_db()
    cur = con.cursor()
    cur.execute("CREATE TABLE movie(title, year, score)")
