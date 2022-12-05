import sqlite3
from flask import Flask, g, request
import json
from flask_cors import CORS, cross_origin
from datetime import datetime

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = "Content-Type"
DATABASE = "../database/job-seeker.db"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE, detect_types=sqlite3.PARSE_DECLTYPES |
                             sqlite3.PARSE_COLNAMES)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

'''def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = [dict((cur.description[i][0], value) \
        for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.close()
    return (rv[0] if rv else None) if one else rv'''


@app.route("/login", methods = ["POST"])
@cross_origin()
def login():
    user = request.get_json()
    print(user)
    cursor = query_db("SELECT * FROM user WHERE username = ? AND password = ?", 
        [user["username"], user["password"]], one=True)
    if cursor:
        cursorDict = {
            "username": cursor[0],
            "password": cursor[1],
            "name": cursor[2],
            "email": cursor[3],
            "zipcode": cursor[4]
        }
        jcur = json.dumps(cursorDict)
        #jcur = json.dumps(cursor)
        return jcur
    else:
        return {}

@app.route("/register", methods = ["POST"])
@cross_origin()
def register():
    user = request.get_json()
    print(user)

    conn = get_db()
    conn.cursor().execute("INSERT INTO user (username,password,name,email,zip_code) VALUES (?,?,?,?,?)",
        [user["username"], user["password"], user["name"], user["email"], user["zipcode"]])

    conn.commit()

    # query_db("INSERT INTO user (username,password,name,email,zip_code) VALUES (?,?,?,?,?)",
    #     [user["username"], user["password"], user["name"], user["email"], user["zipcode"]])

    cursor = query_db("SELECT * FROM user WHERE username = ? AND password = ?", 
        [user["username"], user["password"]], one=True)

    if cursor:
        cursorDict = {
            "username": cursor[0],
            "password": cursor[1],
            "name": cursor[2],
            "email": cursor[3],
            "zipcode": cursor[4]
        }
        jcur = json.dumps(cursorDict)
        return jcur
    else:
        return {}


@app.route("/<username>/active-jobs", methods = ["GET"])
def get_jobs(username):
    cursor = query_db("SELECT * FROM jobs WHERE username = ?", 
        [username], one=False)
    jobList = []
    if cursor:
        for row in cursor:
            cursorDict = {
                "id": row[0],
                "username": row[1],
                "company": row[2],
                "title": row[3],
                "salary": row[4],
                "street": row[5],
                "city": row[6],
                "state": row[7],
                "zipcode": row[8],
                "deadline": (row[9].strftime("%m/%d/%Y") if row[9] else None),
                "description": row[10],
                "qualifications": row[11],
                "url": row[12],
                "date_applied": (row[13].strftime("%m/%d/%Y") if row[13] else None),
                "status": row[14],
                "rating": row[15],
                "interview_time": (row[16].strftime("%m/%d/%Y, %H:%M:%S") if row[16] else None),
                "acceptance_deadline": (row[17].strftime("%m/%d/%Y") if row[17] else None),
                "resume": row[18],
                "cover_letter": row[19]
            }
            jobList.append(cursorDict)
        return jobList
    else:
        return {}


@app.route("/<username>/<id>", methods = ["POST"])
def add_job(username, id):
    job = request.get_json()

    conn = get_db()
    conn.cursor(). execute("INSERT INTO jobs VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
        [id, 
        username, 
        job["company"] if "company" in job else None,
        job["title"] if "title" in job else None,
        job["salary"] if "salary" in job else None,
        job["street"] if "street" in job else None,
        job["city"] if "city" in job else None,
        job["state"] if "state" in job else None,
        job["zipcode"] if "zipcode" in job else None,
        (job["deadline"] + ' 00:00:00') if "deadline" in job else None,
        job["description"] if "description" in job else None,
        job["qualifications"] if "qualifications" in job else None,
        job["url"] if "url" in job else None,
        (job["date_applied"] + ' 00:00:00') if "date_applied" in job else None,
        job["status"] if "status" in job else None,
        job["rating"] if "rating" in job else None,
        job["interview_time"] if "interview_time" in job else None,
        job["acceptance_deadline"] if "acceptance_deadline" in job else None,
        job["resume"] if "resume" in job else None,
        job["cover_letter"] if "cover_letter" in job else None])

    conn.commit()
    return {}