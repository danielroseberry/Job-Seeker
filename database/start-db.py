# from msilib.schema import Error
import sqlite3

try:
    # open connection to job-seeker database
    conn = sqlite3.connect("job-seeker.db", detect_types=sqlite3.PARSE_DECLTYPES |
                             sqlite3.PARSE_COLNAMES)

    cur = conn.cursor()

    # create tables
    # cur.execute("""CREATE TABLE IF NOT EXISTS user(
    #     username TEXT NOT NULL,
    #     password TEXT NOT NULL,
    #     name TEXT,
    #     email TEXT,
    #     zip_code INTEGER,
    #     PRIMARY KEY(username)
    #     )""")

    '''cur.execute("""CREATE TABLE IF NOT EXISTS jobs(
         id INTEGER NOT NULL,
         username TEXT NOT NULL,
         company TEXT,
         title TEXT,
         salary INTEGER,
         street TEXT,
         city TEXT,
         state TEXT,
         zipcode INTEGER,
         deadline TIMESTAMP,
         description TEXT,
         qualifiactions TEXT, 
         url TEXT,
         date_applied TIMESTAMP,
         status INTEGER,
         rating INTEGER,
         interview_time TIMESTAMP,
         acceptance_deadline TIMESTAMP,
         resume BLOB,
         cover_letter BLOB,
         PRIMARY KEY(id, username),
         FOREIGN KEY(username) REFERENCES user(username),
         FOREIGN KEY(company) REFERENCES company(name)
         )""")'''

    # cur.execute("""CREATE TABLE IF NOT EXISTS company(
    #     name TEXT NOT NULL,
    #     username TEXT NOT NULL,
    #     user_login TEXT,
    #     password TEXT,
    #     notes BLOB,
    #     PRIMARY KEY(name, username),
    #     FOREIGN KEY(username) REFERENCES user(username)
    #     )""")

    # cur.execute("""CREATE TABLE IF NOT EXISTS contacts(
    #     company_name TEXT NOT NULL,
    #     username TEXT NOT NULL,
    #     name TEXT NOT NULL,
    #     email TEXT,
    #     phone INTEGER,
    #     PRIMARY KEY(company_name, username, name),
    #     FOREIGN KEY(company_name) REFERENCES company(name),
    #     FOREIGN KEY(username) REFERENCES user(username)
    #     )""")

    # cur.execute("""INSERT INTO user VALUES ('admin', 'password', 'Admin', 'admin@jobseeker.com', 21045)""")
    # cur.execute("""update jobs set interview_time = '2022-10-15 10:00:00' where id = 1""")
    #cur.execute("delete from jobs where company = 'Perfect Company'")
    cur.execute("update jobs set status = null where id = 1")
    # # commit the tables
    conn.commit()

    '''cursor = conn.execute("SELECT * FROM user")
    for row in cursor:
        print("Username: ", row[0])
        print("Password: ", row[1])
        print("Name: ", row[2])
        print("Email: ", row[3])
        print("Zip: ", row[4])'''
    '''cursor = conn.execute("SELECT * FROM jobs WHERE username = 'admin' AND deadline >= datetime() AND status IS NOT NULL")
    for row in cursor:
        print(row[0], " ", row[2], ", ", row[3])'''

except sqlite3.Error as err:
    print("There was a problem connecting to the database:", err)

finally:
    if conn:
        conn.close()