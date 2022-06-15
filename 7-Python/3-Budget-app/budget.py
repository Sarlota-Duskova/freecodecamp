class Category:

  #Instance variable ledger = list
  def __init__(self, category):
    self.category = category
    self.ledger = list()

  def __str__(self):
    title = f"{self.category:*^30}\n"
    items = ""
    total = 0
    for i in range(len(self.ledger)):
      items += f"{self.ledger[i]['description'][0:23]:23}" + f"{self.ledger[i]['amount']:>7.2f}" + '\n'
      total += self.ledger[i]['amount']

    output = title + items + "Total: " + str(total)
    return output
  
  #deposit method that accepts an amount and description
  #If no description then set empty string
  def deposit(self, amount, description=""):
    self.ledger.append({"amount": amount, "description": description})

  #withdraw method it should store amount in ledger as a negative number
  #It should return True or False
  def withdraw(self, amount, description=""):
    #If the are not enough found, nothing should be added to the ledger
  
    if(self.check_funds(amount)):
      self.ledger.append({"amount": -amount, "description": description})
      return True
    return False

  #get_balance method should return current balance of the budget category 

  def get_balance(self):
    total_cash = 0
    for item in self.ledger:
      total_cash += item["amount"]
    return total_cash

  #transfer method accepts an amount and another budget category as arguments
  def transfer(self, amount, category_name):
  #add withdrawal with the amount and the description  "Transfer to [Destination Budget Category]" and "Transfer from [Source Budget Category]"

    if(self.check_funds(amount)):
      self.withdraw(amount, "Transfer to " + category_name.category)
      category_name.deposit(amount, "Transfer from " + self.category) 
      return True
    return False

  #check_funds method accepts an amount as an argument 
  def check_funds(self,amount):
  #Return False if the amount is greater then the balance of the budget category 

  #Should be used by withdraw method and transfer method
    if(self.get_balance() >= amount):
      return True
    return False
  
def round_to_nearest_ten(n):
  if n<10:
    return 0
  return round(n/10.0)*10
  
  
def create_spend_chart(categories):
  withdrawls=[]

  #used to find the category name with max length
  max_len_category=0
  s=0

  for i in categories:

    withdraw_amount=0

    for j in i.ledger:

      #adding withdrawls to string 
      if j["amount"]<0:
        withdraw_amount+=-j["amount"]
        s+=(-j["amount"])
        
    #finding max len category name
    if len(i.category)>max_len_category:
      max_len_category=len(i.category)
    withdrawls.append([i.category,withdraw_amount])
  
  #used to calculate the percentage of a certain category
  for i in withdrawls:
    i.append(round_to_nearest_ten((i[1]/s)*100))
  s=""
  s+="Percentage spent by category\n"
  t=100
  while t>=0:
    
    #prints number and | symbol
    s+=str(t).rjust(3)+"|"+" "

    #loop for printing 'o' if the percentage>=t

    for i in range(len(withdrawls)):
      if withdrawls[i][2]>=t:
        s+="o"+"  "
      else:
        s+="   "
    t-=10
    s+="\n"

  #adding '-' to the last lines
  s+="    "+("-"*10)+"\n"

  loop_var=0

  for i in range(max_len_category):
    s+="     "
    for j in range(len(withdrawls)):
      #checks whether a character exists at a length
      if len(withdrawls[j][0])-1<loop_var:
        #if no character exists adds empty string and 2 spaces
        s+="   "
      else:
        #adds character 
        s+=withdrawls[j][0][loop_var]+"  "
    loop_var+=1
    if i!=max_len_category-1:
      s+="\n"

  return s