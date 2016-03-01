import urllib
import json

qs = "http://knuth.luther.edu/~bmiller/todo/todoweb.cgi?command=listprojects"

conn = urllib.urlopen(qs)

res = conn.read()

plist = json.loads(res)

print plist