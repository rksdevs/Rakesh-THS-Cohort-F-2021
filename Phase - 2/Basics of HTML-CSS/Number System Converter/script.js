const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
let result = document.getElementById("result");
let binaryNum = [];
let arrOfBin = [];
let decNum;
let invalidBin = "Invalid Input! Please enter a valid binary number";

// utility functions

let convBin = function (n) {
  binaryNum = [];
  if (n <= 1) {
    binaryNum.push(n);
  } else {
    convBin(Math.floor(n / 2));
    binaryNum.push(n % 2);
  }
};

function convBinP(m) {
  if (m < 0) {
    let x = Math.abs(m);
    convBin(x);
    return "-" + binaryNum.join("");
  } else {
    convBin(m);
    return binaryNum.join("");
  }
}

let convDec = function (n) {
  arrOfBin = n.split("");
  decNum = 0;
  for (let i = 0; i < arrOfBin.length; i++) {
    if (arrOfBin[i] == 1 || arrOfBin[i] == 0) {
      decNum += arrOfBin[i] * 2 ** (arrOfBin.length - 1 - i);
    } else {
      decNum = invalidBin;
    }
  }
  return decNum;
};

// function convDecP(m) {
//   if (m < 0) {
//     let x = Math.abs(m);
//     convDec(x);
//     return "-" + decNum;
//   } else {
//     convDec(m);
//     return decNum;
//   }
// }

//Utility function ends

//button eventlisteners

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);

//dom functions

function reset() {
  location.reload();
}

function convert() {
  result.innerText = "Result";
  let numToConvert = document.getElementsByClassName("form-control")[0].value;

  let from = document.getElementsByClassName("form-select")[0].value;
  let to = document.getElementsByClassName("form-select")[1].value;

  if (from == 1 && to == 2) {
    //   Binary to Decimal
    if (numToConvert < 0) {
      result.innerText = "-" + convDec(String(Math.abs(numToConvert)));
    } else {
      result.innerText = convDec(numToConvert);
    }
  } else if (from == 2 && to == 1) {
    // Decimal to Binary
    result.innerText = convBinP(numToConvert);
  } else {
    result.innerText = numToConvert;
  }
}
