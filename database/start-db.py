from msilib.schema import Error
import sqlite3

try:
    # open connection to job-seeker database
    conn = sqlite3.connect("job-seeker.db")

    cur = conn.cursor()

    # create tables
    cur.execute("""CREATE TABLE IF NOT EXISTS user(
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        name TEXT,
        email TEXT,
        zip_code INTEGER,
        PRIMARY KEY(username)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS job(
        id INTEGER NOT NULL,
        username TEXT NOT NULL,
        company TEXT,
        title TEXT,
        salary INTEGER,
        street TEXT,
        city TEXT,
        state TEXT,
        zipcode INTEGER,
        deadline NUMERIC,
        description BLOB,
        qualifiactions BLOB, 
        url TEXT,
        date_applied NUMERIC,
        status INTEGER,
        rating INTEGER,
        interview_time NUMERIC,
        acceptance_deadline NUMERIC,
        resume BLOB,
        cover_letter BLOB,
        PRIMARY KEY(id, username),
        FOREIGN KEY(username) REFERENCES user(username),
        FOREIGN KEY(company) REFERENCES company(name)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS company(
        name TEXT NOT NULL,
        username TEXT NOT NULL,
        user_login TEXT,
        password TEXT,
        notes BLOB,
        PRIMARY KEY(name, username),
        FOREIGN KEY(username) REFERENCES user(username)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS contacts(
        company_name TEXT NOT NULL,
        username TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT,
        phone INTEGER,
        PRIMARY KEY(company_name, username, name),
        FOREIGN KEY(company_name) REFERENCES company(name),
        FOREIGN KEY(username) REFERENCES user(username)
        )""")

    # commit the tables
    conn.commit()

except sqlite3.Error as err:
    print("There was a problem connecting to the database:", err)

finally:
    if conn:
        conn.close()