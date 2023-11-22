from http.server import HTTPServer, BaseHTTPRequestHandler
IP = '192.168.1.3'
PORT = 3000
server = HTTPServer((IP, PORT), BaseHTTPRequestHandler)
server.serve_forever()
