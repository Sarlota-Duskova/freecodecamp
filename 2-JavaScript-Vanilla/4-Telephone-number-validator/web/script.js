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

function telephoneCheck(str) {
  // https://regex101.com for practise this
  let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
  // ^(1\s?)? it can be optional, this group is also optional
  // ^ => start; 1 => starting number; \s => any white space character

  // (\d{3}|\(\d{3}\)) second group
  // \d{3} => it can be 3 digits; | => or; \(\d{3}\) => 3 digits in brackets

  // [\s\-]? this group could be optional
  // \s => any white space character; \- => it could be dash

  // \d{3} => it can be 3 digits;

  // [\s\-]? => again it could be space, dash or nothing

  // \d{4}$ => it must be 4 digits at the end
  // $ => end sign

  return regex.test(str);
}

console.log("<----------------------------->");console.log("Telephone number: " + "555-555-5555")
console.log(telephoneCheck("555-555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "1 555-555-5555")
console.log(telephoneCheck("1 555-555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "1 (555) 555-5555")
console.log(telephoneCheck("1 (555) 555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "5555555555")
console.log(telephoneCheck("5555555555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "555-555-5555")
console.log(telephoneCheck("555-555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "(555)555-5555")
console.log(telephoneCheck("(555)555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "1(555)555-5555")
console.log(telephoneCheck("1(555)555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "555-5555")
console.log(telephoneCheck("555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "5555555")
console.log(telephoneCheck("5555555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "1 555)555-5555")
console.log(telephoneCheck("1 555)555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "1 555 555 5555")
console.log(telephoneCheck("1 555 555 5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "123**&!!asdf#")
console.log(telephoneCheck("123**&!!asdf#"));
console.log("<----------------------------->");

console.log("Telephone number: " + "55555555")
console.log(telephoneCheck("55555555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "(6054756961)")
console.log(telephoneCheck("(6054756961)"));
console.log("<----------------------------->");

console.log("Telephone number: " + "2 (757) 622-7382")
console.log(telephoneCheck("2 (757) 622-7382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "-1 (757) 622-7382")
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "2 757 622-7382")
console.log(telephoneCheck("2 757 622-7382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "10 (757) 622-7382")
console.log(telephoneCheck("10 (757) 622-7382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "27576227382")
console.log(telephoneCheck("27576227382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "(275)76227382")
console.log(telephoneCheck("(275)76227382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "2(757)6227382")
console.log(telephoneCheck("2(757)6227382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "2(757)622-7382")
console.log(telephoneCheck("2(757)622-7382"));
console.log("<----------------------------->");

console.log("Telephone number: " + "(555-555-5555")
console.log(telephoneCheck("(555-555-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "(555)5(55?)-5555")
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log("<----------------------------->");

console.log("Telephone number: " + "55 55-55-555-5")
console.log(telephoneCheck("55 55-55-555-5"));
console.log("<----------------------------->");