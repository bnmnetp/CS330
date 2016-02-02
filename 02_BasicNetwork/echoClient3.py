# Echo client program
import socket

HOST = ''    # The remote host
PORT = 50007              # The same port as used by the server

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))
estring = input("-> ")
while estring.lower() != "exit":
    sendData = bytearray(estring.encode('utf8'))
    print("sending",sendData)
    s.send(sendData)
    data = s.recv(1024)
    print("result = ", data.decode('utf8'))
    estring = input("-> ")
s.close()
