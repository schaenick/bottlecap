from database import get_db, init_db
from pathlib import Path
import json

colors_list = Path("backend/colors.json")

with open(colors_list) as json_data:
    data = json.load(json_data)


init_db()

con = get_db()
cur = con.cursor()
for row in data:
    values = (
        row["article_number"],
        row["shelf_number"],
        row["name"],
        row["hex"],
        row["description"],
        row["brand"],
        False,
    )
    cur.execute(
        "INSERT INTO colors (article_number, shelf_number, name, hex, description, brand, owned) VALUES (?,?,?,?,?,?, ?)",
        values,
    )
con.commit()
con.close()

"""
    cur.execute(
        CREATE TABLE IF NOT EXISTS colors(
        id INTEGER PRIMARY KEY, 
        article_number VARCHAR(20), 
        shelf_number VARCHAR(20), 
        name VARCHAR(100), 
        hex VARCHAR(10), 
        description TEXT, 
        brand VARCHAR(50), 
        owned BOOL, 
        comment TEXT)
        """
