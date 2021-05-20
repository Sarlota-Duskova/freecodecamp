import socket
import common_ports # it is python file
import sys # access system-specific parameters and functions
import re # re module provides support for regular expressions
import socket_connect

def get_open_ports(target, port_range, verbose=False): #, verbose=False
  open_ports = []

  # Make a regular expression
  # for validating an IP-address
  ValidIpAddressRegex = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"

  ValidHostnameRegex = "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$"
  #any check if any of the items in a list are True

     #if(any(ch.isdigit() for ch in target)):
  if(re.search(ValidIpAddressRegex, target)):
    # pass the regular expression
    # and the string in search() method
    print("Info: Valid Ip address")
  elif(re.search(ValidHostnameRegex, target)):
    print("Info: Valid hostname")
    try: 
      print("Target hostname: ", target)
      target = socket.gethostbyname(target)
      print("Hostname IP: ", target)
    except socket.gaierror: 
      # this means could not resolve the host 
      print ("Error: Could not resolve hostname")
      sys.exit()
  else:
    print("Error: The target is not IP address nor hostname.")
    sys.exit()

  if(re.search(ValidIpAddressRegex, target) or re.search(ValidHostnameRegex, target)):
    for i in range(port_range[0], port_range[1]+1):
      print("\nTested port: ", i)

      try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        #AF_INET = type of connection IPv4
        #SOCK_STREAM = type of connection TCP 
        s.settimeout(5)
        print("Socket successfully created")
      except socket.error as err: 
        print("Socket creation failed with error %s" %(err))

      result = s.connect_ex((target, i))

      key_list_socket = list(socket_connect.codes.keys())
      val_list_socket = list(socket_connect.codes.values())
      position_key = key_list_socket.index(result)

      print("Socket connect result code: ", result)
      print("Description of code: ", val_list_socket[position_key])

      if result == 0:
        open_ports.append(i)
        print("Port is open")
        s.close()
      else:
        print("Port is closed")

    if(verbose == False):
      return open_ports
    else:
      header = f'Open ports for {socket.gethostbyaddr(target)[0]} ({socket.gethostbyname(target)})\nPORT     SERVICE\n'
      #header = socket.gethostbyaddr(target)
      #hey = header[0]
      print("\n", header)

      key_list = list(common_ports.ports_and_services.keys())
      val_list = list(common_ports.ports_and_services.values())
      for port in open_ports:
        position = key_list.index(port)
        result_ports = f'{port}     {val_list[position]}\n'
        return result_ports