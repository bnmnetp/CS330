#!/usr/bin/python3
import os

print("Content-Type: text/html")
print("")
print("<html><body>")
query_string = os.environ['QUERY_STRING']

print("""
<form action="/cgi-bin/hello.py" method="get">
How many rows? <input type="text" name="numrows" value="10" >
Your Name <input type="text" name="firstname" value="cs330" >
<input type="submit" value="submit">
</form>
""")



if query_string:
    querylist = query_string.split('&')
    querydict = {}
    for pair in querylist:
        k,v = pair.split('=')
        querydict[k] = v

    print("hello %s" % querydict['firstname'])
    print("<table>")
    for i in range(int(querydict['numrows'])):
        print("<tr><td>%d</td><td>%d</td></tr>" % (i, 2**i))
    print("</table>")


print("</body></html>")
