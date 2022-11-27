import sqlite3
from flask import Flask, g
import json

app = Flask(__name__)

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

@app.route("/get-user")
def get_user():
    username = "admin"
    password = "password"
    cursor = query_db("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], one=True)
    if cursor:
        cursorDict = {
            "username": cursor[0],
            "password": cursor[1],
            "name": cursor[2],
            "email": cursor[3],
            "zipcode": cursor[4]
        }
        jcur = json.dumps(cursorDict)
        '''print("Username: ", cursor[0])
        print("Password: ", cursor[1])
        print("Name: ", cursor[2])
        print("Email: ", cursor[3])
        print("Zip: ", cursor[4])'''
        return jcur
    else:
        return 404