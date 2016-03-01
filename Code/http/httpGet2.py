#!/usr/bin/python
import socket
import string
import sys
import re

# read data one character at a time from the socket until newline
def readLine(s):
    msg = ''
    c = s.recv(1)
    while c != "\n" and len(c) > 0:
        msg = msg + c
        c = s.recv(1)
    return msg
m = re.match('http://(.*?)(/.*$)',sys.argv[1])
HOST = m.group(1)
page = m.group(2)
PORT = 80                    # The same port as used by the server
#TODO: parse port from URL
#TODO: allow for a file to be specified on command line to write output
# SOCK_STREAM indicates that the socket is to a TCP type socket. (not udp)
# AF_INET indicates an ipv4 internet socket (not unix domain, not v6)
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
myhost = socket.gethostname()

s.connect((HOST, PORT))  # host,port must be a tuple
s.send('GET ' + page + ' HTTP/1.1\r\n')
s.send('Host: '+myhost+'\r\n')
s.send('\r\n')  #Range: bytes=10-20\r\n

dataLen = 0
data = readLine(s)
if ( re.search('200 OK', data)):
    p = re.compile('(.*?):\s+?(.*$)')
    data = readLine(s)
    while (data != '\r'):  # look for blank line
        print data, len(data)
        m = p.match(data)
        if (m.group(1) == 'Content-Length'):
            dataLen = int(m.group(2))
            print 'length = ', dataLen
        data = readLine(s)

# if datalen = 0, then we need to just receive data until the end of the stream
if (dataLen > 0):
    data = s.recv(dataLen)
    print data


s.close()

