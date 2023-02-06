#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

# if is a char
if [[ $1 =~ ^[a-zA-Z]{1,2}$ ]]
then
	ELEMENT_SYMBOL=$1
  DTBS_ELEMENT=$($PSQL "SELECT symbol FROM elements WHERE symbol = '$ELEMENT_SYMBOL'")
  if [[ -z $DTBS_ELEMENT ]]
    then
      echo "I could not find that element in the database."
    else
      ELEMENT_NAME=$($PSQL "SELECT name FROM elements WHERE symbol = '$ELEMENT_SYMBOL'")
      ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol = '$ELEMENT_SYMBOL'")
      TYPE=$($PSQL "SELECT type FROM properties FULL JOIN types USING(type_id) WHERE atomic_number = $ATOMIC_NUMBER")
      ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      echo "The element with atomic number $ATOMIC_NUMBER is $ELEMENT_NAME ($ELEMENT_SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $ELEMENT_NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
  fi
# if is a element
elif [[ $1 =~ ^[a-zA-Z]{3,}$ ]]
then
  ELEMENT_NAME=$1
  DTBS_NAME=$($PSQL "SELECT name FROM elements WHERE name = '$ELEMENT_NAME'")
  if [[ -z $DTBS_NAME ]]
    then
      echo "I could not find that element in the database."
    else
      ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE name = '$ELEMENT_NAME'")
      ELEMENT_SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE name = '$ELEMENT_NAME'")
      TYPE=$($PSQL "SELECT type FROM properties FULL JOIN types USING(type_id) WHERE atomic_number = $ATOMIC_NUMBER")
      ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      echo "The element with atomic number $ATOMIC_NUMBER is $ELEMENT_NAME ($ELEMENT_SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $ELEMENT_NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
  fi
# if is a number
elif [[ $1 =~ ^[0-9]+$ ]]
then
	ATOMIC_NUMBER=$1
    DTBS_ATOMIC=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number = $ATOMIC_NUMBER")
    if [[ -z $DTBS_ATOMIC ]]
    then
      echo "I could not find that element in the database."
    else
      ELEMENT_NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number = $ATOMIC_NUMBER")
      ELEMENT_SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number = $ATOMIC_NUMBER")
      TYPE=$($PSQL "SELECT type FROM properties FULL JOIN types USING(type_id) WHERE atomic_number = $ATOMIC_NUMBER")
      ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number = $ATOMIC_NUMBER")
      echo "The element with atomic number $ATOMIC_NUMBER is $ELEMENT_NAME ($ELEMENT_SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $ELEMENT_NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
    fi
else
  echo "Please provide an element as an argument."
fi