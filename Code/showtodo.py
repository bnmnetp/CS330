from flask import Flask, render_template
app  = Flask(__name__)
import sqlite3

@app.route('/todo')
def showtodo():
    conn=sqlite3.connect('example.db')
    c = conn.cursor()
    res = c.execute('select * from todo')
    rlist = []
    for row in res:
        rlist.append(row)

    return render_template('todo.html',reslist=rlist)
