#!/usr/bin/env python3

import sqlite3
import os

# Finish up our headers
print("Content-Type: text/html")
print("")

# Now lets generate some content

print("<h1>My Todo List</h1>")

conn = sqlite3.connect("test.db")
cur = conn.cursor()

myValues = {}
if os.environ["QUERY_STRING"]:
    datalist = os.environ["QUERY_STRING"].split("&")
    for item in datalist:
        k,v = item.split('=')
        myValues[k] = v

    cur.execute("select max(id) from todo")
    res = cur.fetchone()
    myValues['id'] = res[0] + 1
    insStatement = "insert into todo values (%(id)d, '%(description)s', '%(priority)s', '%(duedate)s', 0) "
    print(insStatement % myValues)
    cur.execute(insStatement % myValues)
    
conn.commit()

cur.execute("select * from todo")
res = cur.fetchall()

print("<table>")

rowtext = "<tr><td><input type=checkbox name=isdone value=%d></td><td>%s</td><td>%s</td><td>%s</td></tr>"

for row in res:
    print(rowtext % row[:-1])

print("</table>")


print("""
<form method=GET action=todo.py>
Task: <input type=text name=description>
<select name=priority>
   <option value=high>High</option>
   <option value=medium>Medium</option>
   <option value=low>Low</option>
</select>
Due: <input type=text name=duedate>
<input type=submit value=submit>
</form>
""")



