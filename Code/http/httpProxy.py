# Echo server program
import socket
from threading import Thread
import os, datetime, sys, re

class HttpServer(Thread):
    def __init__(self, conn):
        super(HttpServer, self).__init__()
        self.browser = conn.makefile()

    def getHeaders(self):
        """Construct dictionary of headers"""
        self.hd = {}
        line = self.browser.readline()
        while line != "\r\n":
            print ":"+line+":"+" len = ",len(line)
            key,value = line.split(':',1)
            self.hd[key] = value.rstrip()
            line = self.browser.readline()
        return self.hd
        
    def doGet(self,uri,version):
        """Simple proxy that does nothing but repeat a page"""
        port = 80
        host = self.hd['Host']
        if ':' in host:
            host,port = host.split(':')
        host = host.strip()
        if host == 'localhost':
            host = ''
        sys.stdout.write('redirecting to :'+host+':'+str(port)+'\n')
        web_serv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        web_serv.connect((host, port))  # host,port must be a tuple
        web_serv.send('GET %s HTTP/1.1\n' % uri)
        for key,value in self.hd.items():
            if key != 'Keep-Alive':
                web_serv.send(key+':'+value+'\r\n')
        web_serv.send('\r\n')  #Range: bytes=10-20\r\n

        web_serv = web_serv.makefile()
        dataLen = 0
        data = web_serv.readline()
        self.browser.write(data)
        sys.stdout.write(data)
        p = re.compile('([\w+-]+:)\s+?(.*$)')
        print 'starting headers'
        data = web_serv.readline()
        while (data != '\r\n' and data != '\n'):  # look for blank line

            sys.stdout.write(data)
            m = p.match(data)
            if (m.group(1) == 'Content-Length:'):
                dataLen = int(m.group(2))
            if (m.group(1) == 'Connection:'):
                self.browser.write('Connection: close\r\n')
            else:
                self.browser.write(data)
            data = web_serv.readline()
        self.browser.write('\r\n')
        sys.stdout.write('\r\n')
        print 'done with headers'
        sys.stdout.write('datalen = ' + str(dataLen))
        if (dataLen > 0):
            sys.stdout.write('reading...')
            data = web_serv.read(dataLen)
            sys.stdout.write('write to browser')
            self.browser.write(data)
            sys.stdout.write(data)
        self.browser.write('\r\n')
        sys.stdout.flush()
        web_serv.close()
        
    def doPost(self,uri,version):
        """docstring for doPost"""
        pass
        
    def getRequest(self):
        """Get the first line to determine the request type
        For example: GET /index.html HTTP/1.1 
        """
        req = self.browser.readline()
        return req.split()
        
    def run(self):
        """docstring for run"""
        req = self.getRequest()
        headers = self.getHeaders()
        print headers
        if req[0] == 'GET':
            self.doGet(req[1],req[2])
        elif req[0] == 'POST':
            self.doPost(req[1],req[2])
        else:
            print 'Error: unhandled Request'
        
        print 'cleaning up'
        self.browser.close()


HOST = ''                 # Symbolic name meaning the local host
PORT = 8081              # Arbitrary non-privileged port

try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((HOST, PORT))
    s.listen(2)
    while True:
        newSock, addr = s.accept()
        print 'Connected by', addr
        newConn = HttpServer(newSock)
        newConn.start()
except:
    print "caught error, exiting"
    s.close

