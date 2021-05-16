def add_time(start, duration, day=False):
  
  daysIndex = {"monday": 0, "tuesday": 1, "wednesday": 2, "thursday": 3, "friday": 4, "saturday": 5, "sunday": 6}
  daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
 
  strStart = start.split(' ') #Start string: ['11:59', 'PM']
  startHours = int(strStart[0].split(':')[0]) #Start hours: 11
  startMinutes = int(strStart[0].split(':')[1]) #Start minutes: 59
  ampmString = strStart[1] #AM or PM: PM
  ampm = {"AM": "PM", "PM": "AM"}

  durationHours = int(duration.split(':')[0]) #Duration hours: 24
  durationMinutes = int(duration.split(':')[1]) #Duration minutes: 5 

  days = int(durationHours / 24) #Days: 1

  additionMinutes = startMinutes + durationMinutes #Addition minutes: 64

  if(additionMinutes >= 60):
    startHours +=  1
    additionMinutes = additionMinutes % 60
  
  ampmFlips = int((startHours + durationHours) / 12) #ampmFlips 3

  additionHours = (startHours + durationHours) % 12 #Addition hours: 0

  additionMinutes = additionMinutes if additionMinutes > 9 else "0" + str(additionMinutes)

  additionHours = additionHours = 12 if additionHours == 0 else additionHours

  if(ampmString == "PM" and startHours + (durationHours % 12) >= 12):
    days += 1
  
  #ampmString = PM
  ampmString = ampm[ampmString] if ampmFlips % 2 == 1 else ampmString
  #ampm[ampmString] = PM
  #ampmFlips % 2 == 1 = True
  #ampmString = AM
  returnTime = str(additionHours) + ":" + str(additionMinutes) + " " + ampmString
  
  if(day):
    day = day.lower()
    index = int((daysIndex[day]) + days) % 7
    newDay = daysArray[index]
    returnTime += ", " + newDay
  
  if(days == 1):
    return returnTime + " (next day)"
  elif(int(days) > 1):
    return returnTime + " (" + str(int(days)) + " days later)"
  
  return returnTime
