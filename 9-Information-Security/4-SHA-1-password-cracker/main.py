# This entrypoint file to be used in development. Start by reading README.md
import password_cracker
from unittest import main

cracked_password_test1 = password_cracker.crack_sha1_hash(
    "b305921a3723cd5d70a375cd21a61e60aabb84ec")
print(cracked_password_test1) # Return sammy123

cracked_password_test2 = password_cracker.crack_sha1_hash(
    "c7ab388a5ebefbf4d550652f1eb4d833e5316e3e")
print(cracked_password_test2) # Return abacab

cracked_password_test3 = password_cracker.crack_sha1_hash(
    "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8")
print(cracked_password_test3) # Return password

# Test if use_salts is set to True
cracked_password_test4 = password_cracker.crack_sha1_hash(
    "53d8b3dc9d39f0184144674e310185e41a87ffd5", use_salts=True)
print(cracked_password_test4) # Return superman

cracked_password_test5 = password_cracker.crack_sha1_hash(
    "da5a4e8cf89539e66097acd2f8af128acae2f8ae", use_salts=True)
print(cracked_password_test5) # Return q1w2e3r4t5

cracked_password_test6 = password_cracker.crack_sha1_hash(
    "ea3f62d498e3b98557f9f9cd0d905028b3b019e1", use_salts=True)
print(cracked_password_test6) # Return bubbles1

cracked_password1 = password_cracker.crack_sha1_hash(
    "fbbe7e952d1050bfb09dfdb71d4c2ff2b3d845d2")
print(cracked_password1)

cracked_password2 = password_cracker.crack_sha1_hash(
    "dcc466796201f7232b22a03781110a8871fd038c", use_salts=True)
print(cracked_password2)

cracked_password3 = password_cracker.crack_sha1_hash(
    "18c28604dd31094a8d69dae60f1bcd347f1afc5a")
print(cracked_password3)

cracked_password4 = password_cracker.crack_sha1_hash(
    "5d70c3d101efd9cc0a69f4df2ddf33b21e641f6a")
print(cracked_password4)

cracked_password5 = password_cracker.crack_sha1_hash(
    "b80abc2feeb1e37c66477b0824ac046f9e2e84a0")
print(cracked_password5)

cracked_password6 = password_cracker.crack_sha1_hash(
    "80540a46a2c1a0eae58d9868f01c32bdcec9a010")
print(cracked_password6)

cracked_password7 = password_cracker.crack_sha1_hash(
    "53d8b3dc9d39f0184144674e310185e41a87ffd5", use_salts=True)
print(cracked_password7)

cracked_password8 = password_cracker.crack_sha1_hash(
    "da5a4e8cf89539e66097acd2f8af128acae2f8ae", use_salts=True)
print(cracked_password8)

cracked_password9 = password_cracker.crack_sha1_hash(
    "ea3f62d498e3b98557f9f9cd0d905028b3b019e1", use_salts=True)
print(cracked_password9)

cracked_password10 = password_cracker.crack_sha1_hash(
    "05bbf26a28148f531cf57872df546961d1ed0861", use_salts=True)
print(cracked_password10)

cracked_password11 = password_cracker.crack_sha1_hash(
    "03810a46a2c1a0eae58d9332f01c32bdcec9a01a")
print(cracked_password11)

# Run unit tests automatically
main(module='test_module', exit=False)
