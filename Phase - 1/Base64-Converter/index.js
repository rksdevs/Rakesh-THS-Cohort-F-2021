import readline from "readline-sync";

// import { yellow, blue, green } from "chalk";
import chalk from "chalk";

let arrOfAscii = [];
let tempArr = [];
let tempArr5 = [];
let arrB64 = [];
let decdStrF;

//Welcome interface
welcome();
function welcome() {
  console.log(
    chalk.yellow("Welcome to Base 64 encoder, choose from the below options:")
  );
  console.log(chalk.blue("0. To exit the program"));
  console.log(chalk.blue("1. UTF-8 string to Base 64 encoded string"));
  console.log(chalk.blue("2. Base 64 encoded string to UTF-8 string"));
}

//base 64 table
const base64 = {};
const base64Elem = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "/",
];
for (let i = 0; i <= 63; i++) {
  base64[i] = base64Elem[i];
}
base64["Padding"] = "=";

//get ascii value in an array - while encoding
function getAsciiValue(str) {
  arrOfAscii = [];
  for (let i = 0; i < str.length; i++) {
    arrOfAscii.push(str.charCodeAt(i));
  }
  return arrOfAscii;
}

//get ascii value in an array - while decoding

function decdgetAsciiValue(n) {
  decdStrF = "";
  let decdTempArr3 = [];

  for (let i = 0; i < n.length; i++) {
    decdTempArr3.push(String.fromCharCode(n[i]));
  }
  decdStrF = decdTempArr3.join("");
  return decdStrF;
}

//get keys of an object from respective values

function getKeysByValue(value) {
  return Object.keys(base64).find((key) => base64[key] == value);
}

// Binary convertion function

function convBin(n) {
  tempArr = [];
  if (n <= 1) {
    tempArr.push(n);
  } else {
    convBin(Math.floor(n / 2));
    tempArr.push(n % 2);
  }
}

// convert binary to decimal

function binToDec(n) {
  let tempSum = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    tempSum += n[i] * 2 ** (n.length - (i + 1));
  }
  return tempSum;
}

// returns the final array of Base 64 elements
function arrOfB64Keys(arr) {
  let tempStr2;
  arrB64 = [];
  for (let j = 0; j < arr.length; j++) {
    tempStr2 = binToDec(arr[j]);
    arrB64.push(tempStr2);
  }
  return arrB64;
}

//check the keys and return the value from base64 obj

function getBase64(arr) {
  let encodedB64 = [];
  let encodedB64Str = "";
  if (arr.length % 4 !== 0) {
    while (arr.length % 4 !== 0) {
      arr.push("Padding");
    }
    arr.forEach((element) => {
      encodedB64.push(base64[element]);
    });
    encodedB64Str = encodedB64.join("");
  } else {
    arr.forEach((element) => {
      encodedB64.push(base64[element]);
    });
    encodedB64Str = encodedB64.join("");
  }

  return encodedB64Str;
}

// Decoding Base64 to UTF8 and getting them in an array

function decGetBase64(n) {
  let decdBase64 = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== "=") {
      decdBase64.push(getKeysByValue(n[i]));
    } else {
      break;
    }
  }
  return decdBase64;
}

//For Encoding Starts

function fromUtfToB64(inp) {
  // get the input's ASCII value and put them in an array

  getAsciiValue(inp);

  // Loop through the array and convert every element into binary

  let binaryArr = [];
  let bin8Arr = [];
  for (let i = 0; i < arrOfAscii.length; i++) {
    tempArr = [];
    convBin(arrOfAscii[i]);
    binaryArr.push(tempArr);
  }

  // refractoring the binary to 8 bit and saves in an array called bin8Arr

  for (let j = 0; j < binaryArr.length; j++) {
    while (binaryArr[j].length < 8) {
      binaryArr[j].unshift(0);
    }
  }
  bin8Arr = binaryArr;

  //join all the elements of the 8bit array and save it in mainStr

  let tempStr1;
  let tempJoinArr = [];
  let mainStr;
  for (let a = 0; a < bin8Arr.length; a++) {
    tempStr1 = bin8Arr[a].join("");
    tempJoinArr.push(tempStr1);
  }
  mainStr = tempJoinArr.join("");

  // if the unencoded mainstr is not a multiple of 3

  let tempArr6 = [];
  tempArr6 = mainStr.split("");
  if (tempArr6.length % 6 !== 0) {
    while (tempArr6.length % 6 !== 0) {
      tempArr6.push(0);
    }
  }

  // convert the tempArr6 into 6 bit binary
  tempArr5 = []; // reset temp5 array
  for (let b = 0; b < tempArr6.length; b += 6) {
    let tempArr4 = [];
    for (let c = b; c <= b + 5; c++) {
      tempArr4.push(tempArr6[c]);
    }
    tempArr5.push(tempArr4);
  }
}

//For Encoding Ends

//For Decoding

function decdConvBinary(n) {
  // Converts the decoded string to binary
  let decdArrOfBinAscii = [];
  for (let i = 0; i < n.length; i++) {
    tempArr = [];
    convBin(n[i]);
    decdArrOfBinAscii.push(tempArr);
  }

  // Adds 0 into the binary if the length is less than 6

  for (let i = 0; i < decdArrOfBinAscii.length; i++) {
    if (decdArrOfBinAscii[i].length < 6) {
      while (decdArrOfBinAscii[i].length < 6) {
        decdArrOfBinAscii[i].unshift(0);
      }
    }
  }

  // joins the entire sub arr and arr together
  let decdStr1 = decdArrOfBinAscii.join(",");
  let decdArr1 = decdStr1.split(",");

  // splits the array into 8 bits parts
  let decdTempArr1 = [];
  for (let i = 0; i < decdArr1.length; i += 8) {
    let decdTempArr2 = [];
    for (let j = i; j < i + 8; j++) {
      decdTempArr2.push(decdArr1[j]);
    }
    decdTempArr1.push(decdTempArr2);
  }

  // converts each 8 bit into Decimal
  let checkArr = [];
  for (let i = 0; i < decdTempArr1.length; i++) {
    checkArr.push(binToDec(decdTempArr1[i]));
  }

  arrOfB64Keys(decdTempArr1);
  console.log(decdgetAsciiValue(arrB64));
}

//Decoding ends

converter();

function converter() {
  let input = readline.question(chalk.green("Enter the option:"));

  if (input == 1) {
    let strUTF8 = readline.question(chalk.yellow("Enter the UTF-8 String:"));
    fromUtfToB64(strUTF8);
    arrOfB64Keys(tempArr5); //Array of base 64 Keys
    getBase64(arrB64); //check the keys and return the value from base64 obj
    console.log(getBase64(arrB64));
  } else if (input == 2) {
    let strBase64 = readline.question(chalk.yellow("Enter the UTF-8 String:"));
    decGetBase64(strBase64);
    decdConvBinary(decGetBase64(strBase64));
  } else if (input == 0) {
    return;
  } else {
    console.log("Invalid Option. Enter a value from the provide options.");
  }

  let wantToContinue = readline.question(
    chalk.green("Do you want to continue? (y/n)")
  );

  if (wantToContinue == "y") {
    process.stdout.write("\u001b[H\u001b[2J\u001b[3J");
    // process.exit();
    welcome();
    converter();
  } else {
    process.exit();
  }
}
