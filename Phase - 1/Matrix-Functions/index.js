import readline from "readline-sync";
import chalk from "chalk";

let sampleMatrix = [];
let matrix1 = [];
let matrix2 = [];
let dimension1;
let dimension2;

function welcome() {
  console.log(chalk.blue("Welcome choose from below options"));
  console.log(chalk.blue("Type 0 to exit"));
  console.log(chalk.blue("Type 1 for Matrix Addition"));
  console.log(chalk.blue("Type 2 for Matrix Subtraction"));
  console.log(chalk.blue("Type 3 for Matrix Transpose"));
  console.log(chalk.blue("Type 4 for Matrix Multiplication"));
}

/* taking input of dimensions for 2 arrays*/

// function newSampleMatrix(dimensions) {
//   let matrix = [];
//   for (i = 1; i <= dimensions[0]; i++) {
//     let row = [];
//     for (j = 1; j <= dimensions[1]; j++) {
//       let col = 0;
//       row.push(col);
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }

// matrix1 = newMatrix(dimension1);
// matrix2 = newMatrix(dimension2);

function matrixDim1() {
  let matrixDimension1 = readline.question(
    "Enter dimensions of Matrix 1 (First Row then Column separated by space): \n"
  );
  let matrixDimension2 = readline.question(
    "Enter dimensions of Matrix 2 (First Row then Column separated by space): \n"
  );

  dimension1 = matrixDimension1
    .trim()
    .split(" ")
    .map((ele) => Number(ele));
  dimension2 = matrixDimension2
    .trim()
    .split(" ")
    .map((ele) => Number(ele));
}

function matrixDim2() {
  let matrixDimension1 = readline.question(
    "Enter dimensions of Matrix 1 (First Row then Column separated by space): \n"
  );

  dimension1 = matrixDimension1
    .trim()
    .split(" ")
    .map((ele) => Number(ele));
  matrix1 = newMatrix(dimension1);
}

function matrixCreate() {
  matrix1 = newMatrix(dimension1);
  matrix2 = newMatrix(dimension2);
}

// console.log(dimension1);

function newMatrix(dimensions) {
  let matrix = [];
  for (let i = 0; i < dimensions[0]; i++) {
    let row = [];
    for (let j = 0; j < dimensions[1]; j++) {
      let col = Number(readline.question(`Enter Matrix[${i}][${j}]:`).trim());
      row.push(col);
    }
    matrix.push(row);
  }
  return matrix;
}

function matAdd(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let j = 0; j < a[i].length; j++) {
      let col = a[i][j] + b[i][j];
      row.push(col);
    }
    result.push(row);
  }
  return result;
}

function matSub(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let j = 0; j < a[i].length; j++) {
      let col = a[i][j] - b[i][j];
      row.push(col);
    }
    result.push(row);
  }
  return result;
}

function matTranspose(A) {
  let result = [];
  for (let i = 0; i < A[0].length; i++) {
    let col = [];
    for (let j = 0; j < A.length; j++) {
      col.push(A[j][i]);
    }
    result.push(col);
  }
  return result;
}

function matMultiply(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let j = 0; j < b[0].length; j++) {
      let ele = 0;
      for (let k = 0; k < a[0].length; k++) {
        ele = ele + a[i][k] * b[k][j];
      }
      row.push(ele);
    }
    result.push(row);
  }
  return result;
}

welcome();
matrixOperations();

function matrixOperations() {
  let option = readline.question("Please type your option & press enter: ");

  switch (option) {
    case "1":
      matrixDim1();
      if (dimension1[0] == dimension2[0] && dimension1[1] == dimension2[1]) {
        matrixCreate();
        console.log(matAdd(matrix1, matrix2));
      } else {
        console.log(
          "A matrix can only be added to (or subtracted from) another matrix if the two matrices have the same dimensions."
        );
      }
      break;
    case "2":
      matrixDim1();
      if (dimension1[0] == dimension2[0] && dimension1[1] == dimension2[1]) {
        matrixCreate();
        console.log(matSub(matrix1, matrix2));
      } else {
        console.log(
          "A matrix can only be added to (or subtracted from) another matrix if the two matrices have the same dimensions."
        );
      }
      break;
    case "3":
      matrixDim2();
      console.log(matTranspose(matrix1));
      break;
    case "4":
      matrixDim1();
      if (dimension1[0] == dimension2[1]) {
        matrixCreate();
        console.log(matMultiply(matrix1, matrix2));
      } else {
        console.log(
          "The number of columns in the first matrix must be equal to the number of rows in the second matrix"
        );
      }

      break;
    case "0":
      return;
    default:
      console.log("Enter valid option");
  }

  let wantToContinue = readline.question(
    chalk.green("Do you want to continue? (y/n)")
  );

  if (wantToContinue == "y") {
    // process.stdout.write("\u001b[H\u001b[2J\u001b[3J");
    console.clear();
    welcome();
    matrixOperations();
  } else {
    process.exit();
  }
}
