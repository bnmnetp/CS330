# Echo server program
import socket
from threading import Thread

class SocketEcho(Thread):
    def __init__(self, conn):
        super(SocketEcho, self).__init__()
        self.conn = conn

    def run(self):
        """docstring for run"""
        while 1:
            data = self.conn.recv(1024)
            print(data.decode('utf8'))
            if not data: break
            self.conn.send(data)
        self.conn.close()

HOST = ''                 # Symbolic name meaning the local host
PORT = 50007              # Arbitrary non-privileged port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((HOST, PORT))
s.listen(2)

while True:
    newSock, addr = s.accept()
    print('Connected by', addr)
    newConn = SocketEcho(newSock)
    newConn.start()
