import sqlite3 as sql

con = sql.connect("job-seeker.db")
cur = con.cursor()
statement = "SELECT username, password FROM user"
cur.execute(statement)
print(cur.fetchall())