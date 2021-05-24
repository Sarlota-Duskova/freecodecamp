import socket# Import socket module
import common_ports # Import Python file with dictionary containing common ports with names
import sys # Access system-specific parameters and functions
import re # Import re module provides support for regular expressions
import socket_connect # Import Python file with dictionary containing all codes with description

def get_open_ports(target, port_range, verbose=False): # verbose is optional
  open_ports = []

  # Make a regular expression for validating an IP-address
  ValidIpAddressRegex = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
  # Make a regular expression for validating a hostname
  # ValidHostnameRegex is valid as per RFC 1123. Originally, RFC 952 specified that hostname segments could not start with a digit.
  ValidHostnameRegex = "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$"

  ip_hostname_condition = True
  
  # Use regular expression to search for particular strings of characters
  if(re.search(ValidIpAddressRegex, target)): # If RegEx pass then IP address is valid
    ip_hostname_condition = True
    print("Info: Valid IP address")
  elif(re.search(ValidHostnameRegex, target)):  # If RegEx pass then hostname is valid
    print("Info: Valid hostname")
    try: 
      print("Target hostname: ", target) # Print target hostname
      target = socket.gethostbyname(target) # Returns the IP address of the host
      ip_hostname_condition = True
      print("Hostname IP: ", target) # Print IP address of the host
    except socket.gaierror: 
      print ("Error: Could not resolve hostname") # Raise exception if it isn't valid hostname
      ip_hostname_condition = False
      sys.exit()
  else:
    print("Error: The target is not IP address nor hostname.") # It isn't valid IP address nor hostname
    ip_hostname_condition = False
    sys.exit()
  
  if(ip_hostname_condition != False):
    for i in range(port_range[0], port_range[1]+1): # For loop for given range of ports
      print("\nTested port: ", i)
      
      try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # AF_INET = type of connection IPv4
        # SOCK_STREAM = type of connection TCP 
        s.settimeout(5) # Call timeout before connect
        print("Socket successfully created")
      except socket.error as err: # Catch any errors
        print("Socket creation failed with error %s" %(err))

      result = s.connect_ex((target, i)) # Connect to a remote socket at address

      key_list_socket = list(socket_connect.codes.keys()) # List of all socket connect result codes
      val_list_socket = list(socket_connect.codes.values()) # List of description socket connect result codes
      position_code = key_list_socket.index(result) # Find position of code in list

      if result == 0: # If result code is 0, port is open
        open_ports.append(i)
        print("Port is open")
        s.close()
      else:
        print("Socket connect result code: ", result)
        print("Error: ", val_list_socket[position_code]) # Find description of code by position_key

    if(verbose == False):
      return open_ports # Return list of open ports
    else:
      header = f'Open ports for {socket.gethostbyaddr(target)[0]} ({socket.gethostbyname(target)})\nPORT     SERVICE\n'
      print("\n", header)

      key_list = list(common_ports.ports_and_services.keys()) # List of common ports
      val_list = list(common_ports.ports_and_services.values()) # List of common ports name
      
      for port in open_ports:
        position = key_list.index(port) # Find position of port in list
        result_ports = f'{port}     {val_list[position]}\n' # String containing port and name that port
        return result_ports # Return all open ports with description
