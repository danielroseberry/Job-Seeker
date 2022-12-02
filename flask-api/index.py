import sqlite3
from flask import Flask, g, request
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = "Content-Type"
DATABASE = "../database/job-seeker.db"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
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

