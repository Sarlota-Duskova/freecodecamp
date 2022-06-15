import socket

clientsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#host = '88.101.198.124'
host = socket.gethostname()

port = 444

clientsocket.connect(('88.101.198.124', port))

message = clientsocket.recv(1024) #max amount of data that we allowed to be transmition TCP

clientsocket.close()

print(message.decode('ascii'))

