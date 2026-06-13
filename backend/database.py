import sqlite3
from pathlib import Path

database_path = Path(__file__).parent / "bottlecap.db"


def get_db():
    con = sqlite3.connect(database_path)
    con.row_factory = sqlite3.Row
    return con


def init_db():
    con = get_db()
    cur = con.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS colors(
        id INTEGER PRIMARY KEY, 
        article_number VARCHAR(20), 
        shelf_number VARCHAR(20), 
        name VARCHAR(100), 
        hex VARCHAR(10), 
        description TEXT, 
        brand VARCHAR(50), 
        owned BOOL,
        reorder BOOL, 
        comment TEXT),
        UNIQUE(brand, name))
        """)

    con.commit()
    con.close()


# sqlite3.connect("database.db")
