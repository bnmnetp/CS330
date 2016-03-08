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
    # maybe looks like:  isdone=2&isdone=3&isdone=4

    for item in datalist:
        k,v = item.split('=')
        if k in myValues:
            if type(myValues[k]) == list:
                myValues[k].append(v)
            else:
                myValues[k] = [myValues[k]]
                myValues[k].append(v)
        else:
            myValues[k] = v

    if 'description' in myValues:
        cur.execute("select max(id) from todo")
        res = cur.fetchone()
        myValues['id'] = res[0] + 1
        insStatement = "insert into todo values (%(id)d, '%(description)s', '%(priority)s', '%(duedate)s', 0) "
        print(insStatement % myValues)
        cur.execute(insStatement % myValues)
        conn.commit()
    elif 'isdone' in myValues:
        # marking some tasks as done
        if type(myValues['isdone']) == list:
            for todo_id in myValues['isdone']:
                cur.execute("delete from todo where id =%s" % todo_id )
        else:
            cur.execute("delete from todo where id = %s" % myValues['isdone'])
        conn.commit()


cur.execute("select * from todo")
res = cur.fetchall()

print("<form method=GET action=todo.py>")
print("<table>")

rowtext = "<tr><td><input type=checkbox name=isdone value=%d></td><td>%s</td><td>%s</td><td>%s</td></tr>"

for row in res:
    print(rowtext % row[:-1])

print("</table>")
print("<input type=submit value='Mark Done'>")
print("</form>")

print("<hr>")

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
