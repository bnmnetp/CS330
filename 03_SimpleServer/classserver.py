import socket
import os

HOST, PORT = '', 8000

listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
listen_socket.bind((HOST, PORT))
listen_socket.listen(1)
print('Serving HTTP on port %s ...' % PORT)
while True:
    client_connection, client_address = listen_socket.accept()
    request = client_connection.recv(1024)
    # GET URI HTTP/1.1
    #  /hello.html   - DOCROOT
    print(request.decode('utf8'))
    requestlines = request.decode('utf8').split('\n')
    cmd, uri, ver = requestlines[0].split()
    uri = "." + uri

    # Sending the headers
    # then send the body of the response
    # if the URI starts with /cgi-bin  Then dynamic page
    http_response = ""
    fulltext = "Not Found"
    if os.path.exists(uri):
        http_response += "HTTP/1.1 200 OK\n"
        with open(uri,'r') as myfile:
            fulltext = myfile.read()
        if uri[-4:] == 'html':
            http_response += "Content-Type: text/html\n"
        elif uri[-2:] == 'js':
            http_response += "Content-Type: application/javascript"
    else:
        http_response += "HTTP/1.1 404 NOT FOUND\n"

    http_response += "\n"

    http_response += fulltext

    client_connection.sendall(http_response.encode('utf8'))
    client_connection.close()
