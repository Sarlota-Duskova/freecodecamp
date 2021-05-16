function palindrome(str) {

  // Set string to lower case
  let strLowerCase = str.toLowerCase();
  // Given string without non-alphanumeric chars
  let removeNon = /[a-z0-9]/g;
  let givenStr = strLowerCase.match(removeNon).join("");
  console.log("Given string: " + givenStr);
  // Reverse string
  let reverseStr = strLowerCase.match(removeNon).reverse().join("");
  console.log("Reverse string: " + reverseStr)

  if (givenStr == reverseStr) {
    return true;
  } else {
    return false;
  }
}
//Tests
console.log("<------------------------------------->")
let test = palindrome("eye"); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("_eye"); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("race car"); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("not a palindrome"); //Should return false
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("A man, a plan, a canal. Panama"); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("never odd or even"); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("nope"); //Should return false
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("almostomla"); //Should return false
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("My age is 0, 0 si ega ym."); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("1 eye for of 1 eye."); //Should return false
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("0_0 (: /-\ :) 0-0"); //Should return true
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")

test = palindrome("five|\_/|four"); //Should return false
console.log("Palindrome: " + test); //Result
console.log("<------------------------------------->")