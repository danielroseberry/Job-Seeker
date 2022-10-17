from msilib.schema import Error
import sqlite3

try:
    # open connection to job-seeker database
    conn = sqlite3.connect("job-seeker.db")

    cur = conn.cursor()

    # create tables
    cur.execute("""CREATE TABLE IF NOT EXISTS user(
        username NOT NULL,
        password NOT NULL,
        name,
        email,
        zip_code,
        PRIMARY KEY(username)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS job(
        id NOT NULL,
        company_id,
        title,
        salary,
        street,
        city,
        state,
        zip_code,
        deadline,
        description,
        qualifiactions,
        PRIMARY KEY(id),
        FOREIGN KEY(company_id) REFERENCES company(id)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS interested_in(
        job_id NOT NULL,
        username NOT NULL,
        url,
        date_applied,
        status,
        rating,
        interview_time,
        acceptance_deadline,
        resume,
        cover_letter,
        PRIMARY KEY(job_id, username),
        FOREIGN KEY(job_id) REFERENCES job(id),
        FOREIGN KEY(username) REFERENCES user(username)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS company(
        id NOT NULL,
        name NOT NULL,
        description,
        PRIMARY KEY(id)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS company_interest(
        company_id NOT NULL,
        user NOT NULL,
        username,
        password,
        PRIMARY KEY(company_id, user),
        FOREIGN KEY(company_id) REFERENCES company(id),
        FOREIGN KEY(user) REFERENCES user(username)
        )""")

    cur.execute("""CREATE TABLE IF NOT EXISTS contacts(
        company_id NOT NULL,
        user NOT NULL,
        name,
        email,
        phone,
        PRIMARY KEY(company_id, user),
        FOREIGN KEY(company_id) REFERENCES company(id),
        FOREIGN KEY(user) REFERENCES user(username)
        )""")

    # commit the tables
    conn.commit()

except sqlite3.Error as err:
    print("There was a problem connecting to the database:", err)

finally:
    if conn:
        conn.close()