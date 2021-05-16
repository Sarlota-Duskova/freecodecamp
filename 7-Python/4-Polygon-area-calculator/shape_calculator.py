class Rectangle:
#initialized with width and height attributes
  def __init__(self, width, height):
    self.width = width
    self.height = height
  
  def __str__(self):
    return f'Rectangle(width={self.width}, height={self.height})'

  #set_width method
  def set_width(self, width):
    self.width = width

  #set_height method
  def set_height(self, height):
    self.height = height

  #get_area method
  def get_area(self):
    print("Area: ", end = '')
    return self.width * self.height #returns area (width*height)

  #get_perimeter method
  def get_perimeter(self):
    print("Perimeter: ", end = '')
    return 2*self.width + 2*self.height #returns perimeter (2*width + 2*height)

  #get_diagonal method
  def get_diagonal(self):
    print("Diagonal: ", end = '')
    return (self.width**2 + self.height**2) ** .5 #returns diagonal ((width**2 + height**2) ** .5)

  #get_picture method 
  def get_picture(self):
    if(self.width > 50 or self.height > 50):
      return "Too big for picture."
    s = ""
    print("Picture: ")
    for i in range(self.height):
      s += "*" * self.width + "\n"
    return s

  #get_amount_inside method
  def get_amount_inside(self, shape):
    return int(self.get_area() / shape.get_area())

class Square(Rectangle): #subclass of Rectangle
  def __init__(self, side):
    self.width = side
    self.height = side
  #inherit methods and attributes

  #set_side method
  def set_side(self, side):
    self.width = side
    self.height = side

  def __str__(self):
    return f'Square(side={self.width})'
