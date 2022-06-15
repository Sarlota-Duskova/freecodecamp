import socket

def banner(ip, port):
    s = socket.socket() #initialize socket module
    s.connect((ip, int(port))) #connect, int(port) because we put string value from user
    s.settimeout(5) #5 second timeout
    print(s.recv(1024))
    #print(str(s.recv(1024)).strip('b')) #1024byte

def main():
    ip = input("Please enter the IP: ")
    port = str(input("Please enter the port: "))
    banner(ip, port)

main()