function rot13(str) {

// A B C D E F G H I J K L M
// N O P Q R S T U V W X Y Z

let newArr = [];
let splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i++)
  {
    switch (splitStr[i]) {
      case " ":
      newArr.push(" ");
      break;
      case "?":
      newArr.push("?");
      break;
      case "!":
      newArr.push("!");
      break;
      case ".":
      newArr.push(".");
      break;
      case ",":
      newArr.push(",");
      break;
      case "A":
      newArr.push("N");
      break;
      case "B":
      newArr.push("O");
      break;
      case "C":
      newArr.push("P");
      break;
      case "D":
      newArr.push("Q");
      break;
      case "E":
      newArr.push("R");
      break;
      case "F":
      newArr.push("S");
      break;
      case "G":
      newArr.push("T");
      break;
      case "H":
      newArr.push("U");
      break;
      case "I":
      newArr.push("V");
      break;
      case "J":
      newArr.push("W");
      break;
      case "K":
      newArr.push("X");
      break;
      case "L":
      newArr.push("Y");
      break;
      case "M":
      newArr.push("Z");
      break;
      case "N":
      newArr.push("A");
      break;
      case "O":
      newArr.push("B");
      break;
      case "P":
      newArr.push("C");
      break;
      case "Q":
      newArr.push("D");
      break;
      case "R":
      newArr.push("E");
      break;
      case "S":
      newArr.push("F");
      break;
      case "T":
      newArr.push("G");
      break;
      case "U":
      newArr.push("H");
      break;
      case "V":
      newArr.push("I");
      break;
      case "W":
      newArr.push("J");
      break;
      case "X":
      newArr.push("K");
      break;
      case "Y":
      newArr.push("L");
      break;
      case "Z":
      newArr.push("M");
      break;
    }
  }
return newArr.join("");
}

console.log("<----------------------------------------------------------->")
let result = rot13("SERR PBQR PNZC");
console.log("Ceasars Cipher: " + "SERR PBQR PNZC")
console.log("Decodec string: " + result);
console.log("<----------------------------------------------------------->")

result = rot13("SERR CVMMN!");
console.log("Ceasars Cipher: " + "SERR CVMMN!")
console.log("Decodec string: " + result);
console.log("<----------------------------------------------------------->")

result = rot13("SERR YBIR?");
console.log("Ceasars Cipher: " + "SERR YBIR?")
console.log("Decodec string: " + result);
console.log("<----------------------------------------------------------->")

result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log("Ceasars Cipher: " + "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
console.log("Decodec string: " + result);
console.log("<----------------------------------------------------------->")