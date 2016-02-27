#!/usr/bin/python
import socket
import string

# read data one character at a time from the socket until newline
def readLine(s):
    msg = ''
    c = s.recv(1)
    while c != "\n" and len(c) > 0:
        msg = msg + c
        c = s.recv(1)
    return msg
    
HOST = ''    # The remote host
PORT = 9782                    # The same port as used by the server
# SOCK_STREAM indicates that the socket is to a TCP type socket. (not udp)
# AF_INET indicates an ipv4 internet socket (not unix domain)
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))
s.send('GET /test.html HTTP/1.1\r\nHost: turing\r\n\r\n')  #Range: bytes=10-20\r\n
data = readLine(s)
while len(data) > 0:
    print data
    data = readLine(s)
# by transforming the socket to a file object we can use a nice for
# iterator on it and let the file handling code do all the work.
# good but not the best example for the networking clss
#sockfile = s.makefile()
#for line in sockfile:
#    print line.strip()
    
s.close()

