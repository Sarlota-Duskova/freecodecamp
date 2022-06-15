# The example function below keeps track of the opponent's history and plays whatever the opponent played two plays ago. It is not a very good player so you will need to change the code to pass the challenge.

def player(prev_play, opponent_history=[]):
  opponent_history.append(prev_play)

  abbey = ["R","R","S","S","P","P","R","P","S"]
  other = ["R","S","P"]
  quincy = "P"

  la = len(opponent_history)
  l = len(opponent_history) % 1000

  m = la // 1000 # Wait till end of number of games play in the match then play another player
  
  start = m * 1000
  finish = m * 1000 + 4

  key = opponent_history[start:finish] # It is from 0 because m = 0 means game, to 4 
  
  if l < 4:
    return other[l % 3] # Wait till 4th game then decide which strategy use
  else:
    if key == ["","P","R","S"]: # Kris
      return other[l % 3]
    elif key == ["","R","R","R"]: # Mrugesh
      return other[l % 3]
    elif key == ["","R","P","P"]: # Quincy
      return quincy
    else: # Abbey ['', 'P', 'P', 'P']
      return abbey[l % 9]