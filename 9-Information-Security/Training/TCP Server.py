import socket

#Creating the socket object
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#AF_INET = type of connection IPv4
#SOCK_STREAM = type of connection TCP

host = socket.gethostbyname()
port = 444

#Binding to socket
serversocket.bind((host,port)) #Host will be replaced/ substitued with IP, if changed and not running on host

#Starting TCP listener
serversocket.liste(3) #amount of how many request listen

while True:
    #Starting the connection
    clientsocket, address = serversocket.accept() #serversocket object accept TCP connection

    print("received connection from " % str(address))

    message = 'Hello! Thank you for connecting to the server' + "\r\n"
    clientsocket.send(message)

    clientsocket.close()