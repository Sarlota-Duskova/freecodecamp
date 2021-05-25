import hashlib

def crack_sha1_hash(hash, use_salts = None):
  f1 = open("top-10000-passwords.txt", "r") # Open file
  readfile1 = f1.read() # Read file
  f2 = open("known-salts.txt", "r") # Open file
  readfile2 = f2.read() # Read file
  read_passwords = readfile1.split("\n") # Split each word in file
  read_salts = readfile2.split("\n") # Split each word in file

  if(use_salts == True): # If the function has optional second argument named use_salts set to True then:
    for salts in read_salts:
      for password in read_passwords:
        appended = password + salts # Each salt append to each password 
        prepended = salts + password # Each salt prepended to each password 

        # Hashes work on bytes, not on characters
        b1 = bytes(appended, 'utf-8')
        b2 = bytes(prepended, 'utf-8')

        # Check if hash is equal to hash_format with appended salts
        hash_format1 = hashlib.sha1(b1).hexdigest()
        if(hash == hash_format1):
          return password # If it is one of the top 10000 passwords then return password

        # Check if hash is equal to hash_format with prepended salts
        hash_format2 = hashlib.sha1(b2).hexdigest()
        if(hash == hash_format2):
          return password # If it is one of the top 10000 passwords then return password
  else:
    for password in read_passwords:

      # Hashes work on bytes, not on characters
      b = bytes(password, 'utf-8')

      # Check if hash is equal to hash_format
      hash_format = hashlib.sha1(b).hexdigest()
      if(hash == hash_format):
        return password # If it is one of the top 10000 passwords then return password

  return "PASSWORD NOT IN DATABASE" # If the SHA-1 hash is NOT of a password in the database return ...

  f1.close() # Closing a file
  f2.close() # Closing a file