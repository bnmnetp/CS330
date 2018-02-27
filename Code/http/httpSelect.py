# Echo server program
import socket
import select
import os
import datetime

class HttpServer:
    def __init__(self, conn):
        if conn:
            self.conn = conn.makefile()

    def set_conn(self,conn):
        self.conn = conn.makefile()

    def getHeaders(self):
        """Construct dictionary of headers"""
        self.hd = {}
        line = self.conn.readline()
        while line != "\r\n":
            print ":"+line+":"+" len = ",len(line)
            try:
                key,value = line.split(':',1)
                self.hd[key] = value.rstrip()
            except:
                print 'could not split line'
                return self.hd
            line = self.conn.readline()
        return self.hd
        
    def doGet(self,uri,version):
        """docstring for doGet"""
        fname = os.path.join(os.getcwd(),uri[1:])
        try:
            reqFile = open(fname)
            page = reqFile.read()
            self.conn.write("HTTP/1.1 200 OK\r\n")
            self.conn.write(str(datetime.datetime.now())+"\r\n")
            self.conn.write("Content-Type: text/html\r\n")
            self.conn.write("Content-Length: %d\r\n"%len(page))
            self.conn.write("\r\n")
            self.conn.write(page)
        except:
            self.conn.write("HTTP/1.1 404 Not Found\r\n")
            self.conn.write("\r\n")

    def doPost(self,uri,version):
        """docstring for doPost"""
        pass
        
    def getRequest(self):
        """Get the first line to determine the request type
        For example: GET /index.html HTTP/1.1 
        """
        req = self.conn.readline()
        print 'request = ', req
        return req.split()
        
    def run(self):
        """docstring for run"""
        req = self.getRequest()
        headers = self.getHeaders()
        print headers
        if req and req[0] == 'GET':
            self.doGet(req[1],req[2])
        elif req and req[0] == 'POST':
            self.doPost(req[1],req[2])
        else:
            print 'Error: unhandled Request'
        
        print 'cleaning up'
        self.conn.close()



HOST = ''                 # Symbolic name meaning the local host
PORT = 8082              # Arbitrary non-privileged port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((HOST, PORT))
s.listen(5)
preader = [s]
pwriter = []
perr = []
timeout=60
srv = HttpServer(None)
while 1:
    rtr, rtw, ie = select.select(preader,pwriter,perr,timeout)
    print 'after select', rtr, rtw, ie
    if s in rtr:
        conn, addr = s.accept()
        print 'Connected by', addr
        rtr.remove(s)
        conn.setblocking(0)
        preader.append(conn)
    for conn in rtr:
        srv.set_conn(conn)
        srv.run()
        preader.remove(conn)  # since run closes the socket remove it.lock

conn.close()

