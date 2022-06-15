import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress


def draw_plot():
  # Read data from file
  df = pd.read_csv("epa-sea-level.csv", float_precision='legacy')
  
  # Create scatter plot
  fig, ax = plt.subplots()
  fig.set_figheight(8)
  fig.set_figwidth(15)

  # Create first line of best fit
  x = df['Year']
  y = df['CSIRO Adjusted Sea Level']
  slope, intercept, r_value, p_value, std_err = linregress(x,y)
 
  x1 = list(range(1880, 2051))
  y1 = []

  for year in x1:
    y1.append(intercept + slope * year)
      
  ax1 = plt.plot(x1, y1, 'r', label = 'Best Fit Line 1', color='red')
  plt.legend()

  # Create second line of best fit
  xx = df[ df['Year'] >= 2000 ]['Year']
  yy = df[ df['Year'] >= 2000 ]['CSIRO Adjusted Sea Level']
  
  predi = linregress(xx, yy)
  new_slope = predi.slope
  new_intercept = predi.intercept

  x2 = list(range(2000, 2051))
  y2 = []

  for year in x2:
    y2.append(new_intercept + new_slope * year)

  ax2 = plt.plot(x2, y2, 'r', label = 'Best Fit Line 2', color='green')
  plt.legend()
  
  # Add labels and title
  ax.set_title("Rise in Sea Level")  # Title
  ax.set_xlabel("Year") # Label on the x axis
  ax.set_ylabel("Sea Level (inches)") # Label on the y axis
  plt.scatter(x,y) # It plots one dot for each observation
  
  # Save plot and return data for testing (DO NOT MODIFY)
  plt.savefig('sea_level_plot.png')
  return plt.gca()
  