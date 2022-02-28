import { question } from "readline-sync";

// import { yellow, blue, green } from "chalk";
import chalk from "chalk";
// console.log(chalk.blue('Hello world!'));

//Welcome interface
welcome();
function welcome() {
  console.log(
    chalk.yellow(
      "Welcome to Ascii to binary, octal or hexadecimal converter, choose from the below options:"
    )
  );
  console.log(chalk.blue("0. To exit the program"));
  console.log(chalk.blue("1. String to Binary ion 08 Bit pattern"));
  console.log(chalk.blue("2. String to Binary in 16 Bit pattern"));
  console.log(chalk.blue("3. String to Octal in 08 Bit pattern"));
  console.log(chalk.blue("4. String to Octal in 16 Bit pattern"));
  console.log(chalk.blue("5. String to Hexa-decimal in 08 Bit pattern"));
  console.log(chalk.blue("6. String to Hexa-decimal in 16 Bit pattern"));
}

//creating the lookup table
const lookupTable = {};

for (let i = 33; i <= 126; i++) {
  let Asiic = String.fromCharCode(i);
  lookupTable[Asiic] = i;
}

converter();
function converter() {
  //creating the logic for various options
  let option = question(chalk.green("Enter the option:"));
  if (
    option == 1 ||
    option == 2 ||
    option == 3 ||
    option == 4 ||
    option == 5 ||
    option == 6
  ) {
    //for option 1 & 2
    let input = question(
      chalk.green("Please enter the string you want to convert:")
    ); //takes the input and stores it in the variable input
    let aValue = []; //the array of Asiic value of input

    let res2 = [];
    let res1 = [];
    let elem;

    function joinElem8(n) {
      convBin(n);
      elem = res1.join("");
      while (elem.length < 8) {
        elem = "0" + elem;
      }
      return elem;
    }

    function joinElem16(n) {
      convBin(n);
      elem = res1.join("");
      while (elem.length < 16) {
        elem = "0" + elem;
      }
      return elem;
    }

    function joinOct8(n) {
      convOct(n);
      elem = res1.join("");
      while (elem.length < 8) {
        elem = "0" + elem;
      }
      return elem;
    }

    function joinOct16(n) {
      convOct(n);
      elem = res1.join("");
      while (elem.length < 16) {
        elem = "0" + elem;
      }
      return elem;
    }

    function joinHex8(n) {
      convHex(n);
      elem = res1.join("");
      while (elem.length < 8) {
        elem = "0" + elem;
      }
      return elem;
    }

    function joinHex16(n) {
      convHex(n);
      elem = res1.join("");
      while (elem.length < 16) {
        elem = "0" + elem;
      }
      return elem;
    }

    let convBin = function (n) {
      if (n <= 1) {
        res1.push(n);
      } else {
        convBin(Math.floor(n / 2));
        res1.push(n % 2);
      }
    };

    let convOct = function (n) {
      if (n <= 1) {
        res1.push(n);
      } else {
        convOct(Math.floor(n / 8));
        res1.push(n % 8);
      }
    };

    let convHex = function (n) {
      if (n <= 1) {
        res1.push(n);
      } else {
        convHex(Math.floor(n / 16));
        switch (n % 16) {
          case 10:
            res1.push("a");
            break;
          case 11:
            res1.push("b");
            break;
          case 12:
            res1.push("c");
            break;
          case 13:
            res1.push("d");
            break;
          case 14:
            res1.push("e");
            break;
          case 15:
            res1.push("f");
            break;
          default:
            res1.push(n % 8);
        }
      }
    };

    for (const a in input) {
      aValue.push(lookupTable[input.charAt(a)]); //the input's every character is stored in the aVlaue array as Asiic
    }

    if (option == 1) {
      //iterate through every element of aValue and change it to binary and store in result array

      for (let i = 0; i <= aValue.length - 1; i++) {
        elem = "";
        res1 = [];
        res2[i] = joinElem8(aValue[i]);
      }
      console.log(res2);
    } else if (option == 2) {
      for (let i = 0; i <= aValue.length - 1; i++) {
        elem = "";
        res1 = [];
        res2[i] = joinElem16(aValue[i]);
      }
      console.log(res2);
    } else if (option == 3) {
      for (let i = 0; i <= aValue.length - 1; i++) {
        elem = "";
        res1 = [];
        res2[i] = joinOct8(aValue[i]);
      }
      console.log(res2);
    } else if (option == 4) {
      for (let i = 0; i <= aValue.length - 1; i++) {
        elem = "";
        res1 = [];
        res2[i] = joinOct16(aValue[i]);
      }
      console.log(res2);
    } else if (option == 5) {
      for (let i = 0; i <= aValue.length - 1; i++) {
        elem = "";
        res1 = [];
        res2[i] = joinHex8(aValue[i]);
      }
      console.log(res2);
    } else if (option == 6) {
      for (let i = 0; i <= aValue.length - 1; i++) {
        elem = "";
        res1 = [];
        res2[i] = joinHex16(aValue[i]);
      }
      console.log(res2);
    }
  } else if (option == 0) {
    return;
  } else {
    console.log("Invalid Option. Enter a value from the provide options.");
  }

  let wantToContinue = question(chalk.green("Do you want to continue? (y/n)"));

  if (wantToContinue == "y") {
    process.stdout.write("\u001b[H\u001b[2J\u001b[3J");
    welcome();
    converter();
  } else {
    process.exit();
  }
}
