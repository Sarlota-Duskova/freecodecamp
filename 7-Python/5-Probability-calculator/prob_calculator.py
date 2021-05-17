import copy
import random
# Consider using the modules imported above.

#blue=4, red=2, green=6 and I draw 3 balls => blue=2, red=1

class Hat:
  def __init__(self, **kwargs):
    self.contents = []

    for key, value in kwargs.items():
      for i in range(value):
        self.contents.append(key)
    print(self.contents)

  #draw method
  def draw(self, balls): #ball = indicating the number of balls to draw

    """
    draw_balls = set(random.sample(range(len(self.contents)), ball))
    #range(len(self.contents)) => range(0,7)
    #len(self.contents) => 7
    print(draw_balls) #{4,6}
    return [x for i,x in enumerate(self.contents) if not i in draw_balls] #['red', 'red', 'red', 'red', 'blue']
    """

    draw_balls = []
    if balls < len(self.contents):
      #remove balls at random position from contents 
      for i in range(balls):
        picked_balls = random.choice(self.contents)
        draw_balls.append(picked_balls)
        new_list = self.contents.pop(self.contents.index(picked_balls))
      #return those balls as a list of strings 
      print("Removed balls: ", end = '')
      return draw_balls
    else:
      #return all balls if draw exceeds the available quantity
      return self.contents

#experiment function 
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):

  M = 0
  for i in range(num_experiments):
    hat_copy = copy.deepcopy(hat)
    expected_balls_copy = copy.deepcopy(expected_balls)
    ball_colors = hat_copy.draw(num_balls_drawn)
    
    for color in ball_colors:
      if(color in expected_balls_copy):
        expected_balls_copy[color] -= 1
    
    if(all(x <= 0 for x in expected_balls_copy.values())):
      M += 1 #M count how many times we get balls

  print("How many times we got expected balls: ", end = '')
  print(M)
  print("Number of experiments: ", end = '')
  print(num_experiments)
  print("Probability: ", end = '')
  return  M/ num_experiments #probability as M/N
  #N number of experiments 
  
  