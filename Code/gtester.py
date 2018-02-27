def app(environ, start_response):
    print("hello foo")
    print(environ)
    tstring = "Hello, World!\n"
    data = bytes(tstring, 'utf-8')
    start_response("200 OK", [
        ("Content-Type", "text/plain"),
        ("Content-Length", str(len(data)))])
    
    return [data]
