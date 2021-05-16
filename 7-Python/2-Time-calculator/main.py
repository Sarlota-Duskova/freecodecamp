# This entrypoint file to be used in development. Start by reading README.md
from time_calculator import add_time
from unittest import main

print("Time: 3:30 PM", "2:12")
print("Answer: " + add_time("3:30 PM", "2:12"))
print(" ")

print("Time: 11:55 AM", "3:12")
print("Answer: " + add_time("11:55 AM", "3:12"))
print(" ")

print("Time: 9:15 PM", "5:30")
print("Answer: " + add_time("9:15 PM", "5:30"))
print(" ")

print("Time: 11:40 AM", "0:25")
print("Answer: " + add_time("11:40 AM", "0:25"))
print(" ")

print("Time: 2:59 AM", "24:00")
print("Answer: " + add_time("2:59 AM", "24:00"))
print(" ")

print("Time: 11:59 PM", "24:05")
print("Answer: " + add_time("11:59 PM", "24:05"))
print(" ")

print("Time: 8:16 PM", "466:02")
print("Answer: " + add_time("8:16 PM", "466:02"))
print(" ")

print("Time: 5:01 AM", "0:00")
print("Answer: " + add_time("5:01 AM", "0:00"))
print(" ")

print("Time: 3:30 PM", "2:12")
print("Answer: " + add_time("3:30 PM", "2:12", "Monday"))
print(" ")

print("Time: 2:59 AM", "24:00")
print("Answer: " + add_time("2:59 AM", "24:00", "saturDay"))
print(" ")

print("Time: 11:59 PM", "24:05")
print("Answer: " + add_time("11:59 PM", "24:05", "Wednesday"))
print(" ")

print("Time: 8:16 PM", "466:02")
print("Answer: " + add_time("8:16 PM", "466:02", "tuesday"))
print(" ")

# Run unit tests automatically
main(module='test_module', exit=False)
