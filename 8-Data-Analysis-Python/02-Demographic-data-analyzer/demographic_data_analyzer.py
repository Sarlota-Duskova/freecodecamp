import pandas as pd


def calculate_demographic_data(print_data=True):
  # Read data from file
  df = pd.read_csv('adult.data.csv')

  # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
  races = df['race'].unique()
  race_count = None
  racenum = list() 
  for race in races: 
  
    numofrace = df.loc[df['race'] == race].shape[0]    
    racenum.append(numofrace)
    
  race_count = pd.Series(racenum)

  # What is the average age of men?
  average_age_men = round(df[df['sex'] == 'Male']['age'].mean(), 1)

  # What is the percentage of people who have a Bachelor's degree?
  bachelor = df.loc[df['education'] == 'Bachelors']
  percentage_bachelors =  round(bachelor.shape[0] / df.shape[0] * 100, 1)

  # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
  # What percentage of people without advanced education make more than 50K?

  # with and without `Bachelors`, `Masters`, or `Doctorate`
  higher_education = df.loc[(df['education'] == 'Bachelors') | (df['education']=='Masters') | (df['education'] == 'Doctorate')]
  lower_education = df.loc[(df['education'] != 'Bachelors') & (df['education'] != 'Masters') & (df['education'] != 'Doctorate')] 

  # percentage with salary >50K
  highrich = higher_education[higher_education['salary'] == '>50K']
  lowrich = lower_education[lower_education['salary']=='>50K']
  higher_education_rich = round(highrich.shape[0] / higher_education.shape[0],3) * 100
  lower_education_rich = round(lowrich.shape[0] / lower_education.shape[0], 3) * 100

  # What is the minimum number of hours a person works per week (hours-per-week feature)?
  min_work_hours = df['hours-per-week'].min()

  # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
  num_min_workers = df.loc[df['hours-per-week'] == min_work_hours]

  rich_percentage = round(num_min_workers[num_min_workers['salary'] =='>50K'].shape[0] / num_min_workers.shape[0] * 100)

  # What country has the highest percentage of people that earn >50K?
  rich = df.loc[df['salary'] == '>50K']
  countries = df['native-country'].unique()
  highest = None
  highestcountry = None
  percentage = None
  for country in countries:
    num = df.loc[df['native-country'] == country].shape[0]
    richnum = rich.loc[rich['native-country'] == country].shape[0]
    percentage = round(richnum / num * 100, 1)
    if highest == None or highest < percentage:
      highest = percentage
      highestcountry = country

  highest_earning_country = highestcountry
  highest_earning_country_percentage = highest

  # Identify the most popular occupation for those who earn >50K in India.
  top_IN_occupation = df[(df['salary'] == ">50K") & (df['native-country'] == "India")]["occupation"].value_counts().index[0]
  
  # DO NOT MODIFY BELOW THIS LINE

  if print_data:
      print("Number of each race:\n", race_count) 
      print("Average age of men:", average_age_men)
      print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
      print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
      print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
      print(f"Min work time: {min_work_hours} hours/week")
      print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
      print("Country with highest percentage of rich:", highest_earning_country)
      print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
      print("Top occupations in India:", top_IN_occupation)

  return {
      'race_count': race_count,
      'average_age_men': average_age_men,
      'percentage_bachelors': percentage_bachelors,
      'higher_education_rich': higher_education_rich,
      'lower_education_rich': lower_education_rich,
      'min_work_hours': min_work_hours,
      'rich_percentage': rich_percentage,
      'highest_earning_country': highest_earning_country,
      'highest_earning_country_percentage':
      highest_earning_country_percentage,
      'top_IN_occupation': top_IN_occupation
    }