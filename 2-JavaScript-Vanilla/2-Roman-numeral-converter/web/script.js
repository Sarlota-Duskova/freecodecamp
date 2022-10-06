(function () {
  if (!console) {
      console = {};
  }
  var old = console.log;
  var logger = document.getElementById('log');
  console.log = function (message) {
      if (typeof message == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
      } else {
          logger.innerHTML += message + '<br />';
      }
  }
})();

function convertToRoman(num) {
 let newArr = [];
 while ((num/1000) >= 1) {
    num = num-1000;
    newArr.push("M");
  }
 while ((num/900) >= 1) {
    num = num-900;
    newArr.push("CM");
  }
  while ((num/500) >= 1) {
    num = num-500;
    newArr.push("D");
  }
  while ((num/400) >= 1) {
    num = num-400;
    newArr.push("CD");
  }
  while ((num/100) >= 1) {
    num = num-100;
    newArr.push("C");
  }
  while ((num/90) >= 1) {
    num = num-90;
    newArr.push("XC");
  }
  while ((num/50) >= 1) {
    num = num-50;
    newArr.push("L");
  }
  while ((num/40) >= 1) {
    num = num-40;
    newArr.push("XL");
  }
  while ((num/10) >= 1) {
    num = num-10;
    newArr.push("X");
  }
  while ((num/9) >= 1) {
    num = num-9;
    newArr.push("IX");
  }
  while ((num/5) >= 1) {
    num = num-5;
    newArr.push("V");
  }
  while ((num/4) >= 1) {
    num = num-4;
    newArr.push("IV");
  }
  while ((num/1) >= 1) {
    num = num-1;
    newArr.push("I");
  }
  return newArr.join("");
}

console.log("<--------------------------->")
let result = convertToRoman(2);
console.log("Given number: " + 2)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(3);
console.log("Given number: " + 3)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(4);
console.log("Given number: " + 4)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(5);
console.log("Given number: " + 5)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(9);
console.log("Given number: " + 9)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(12);
console.log("Given number: " + 12)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(16);
console.log("Given number: " + 16)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(29);
console.log("Given number: " + 29)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(44);
console.log("Given number: " + 44)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(45);
console.log("Given number: " + 45)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(68);
console.log("Given number: " + 68)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(83);
console.log("Given number: " + 83)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(97);
console.log("Given number: " + 97)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(99);
console.log("Given number: " + 99)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(400);
console.log("Given number: " + 400)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(500);
console.log("Given number: " + 500)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(501);
console.log("Given number: " + 501)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(649);
console.log("Given number: " + 649)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(798);
console.log("Given number: " + 798)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(891);
console.log("Given number: " + 891)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(1000);
console.log("Given number: " + 1000)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(1004);
console.log("Given number: " + 1004)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(1006);
console.log("Given number: " + 1006)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(1023);
console.log("Given number: " + 1023)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(2014);
console.log("Given number: " + 2014)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")

result = convertToRoman(3999);
console.log("Given number: " + 3999)
console.log("Roman numeral: " + result)
console.log("<--------------------------->")