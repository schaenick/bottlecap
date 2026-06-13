from database import get_db, init_db
from pathlib import Path
import json

colors_list = Path(__file__).parent / "colors.json"

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
        False,
    )
    cur.execute(
        """
        INSERT INTO colors (article_number, shelf_number, name, hex, description, brand, owned, reorder)
        VALUES (?,?,?,?,?,?,?,?)
        ON CONFLICT(brand, name) DO UPDATE SET
            article_number = excluded.article_number,
            shelf_number = excluded.shelf_number,
            hex = excluded.hex,
            description = excluded.description
        """,
        values,
    )
con.commit()
con.close()
