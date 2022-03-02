function diamond(n) {
  let starString = "";
  // Upside pyramid
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      starString += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      starString += "*";
    }
    starString += "\n";
  }
  // downside pyramid
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      starString += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      starString += "*";
    }
    starString += "\n";
  }
  console.log(starString);
}

diamond(5);

// function diamond(n) {
//   let starString = "";

//   for (let i = 1; i <= 2*n -1; i++) {

//     if (i < n) {
//       //print upside pyramid

//     } else {
//       //print downside pyramid
//     }

//     //print space
//     for (let j = 1; j <= n - i; j++) {
//       starString += " ";
//     }

//     //print star
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       starString += "*";
//     }
//     starString += "\n";
//   }

//   //upside down triangle

//   for (let i = n - 1; i <= 1; i--) {
//     //print spaces

//     for (let j = n - i; j < n; j++) {
//       starString += " ";
//     }

//     //print star

//     for (let k = i * 2 - 1; k <= 1; k--) {
//       starString += "*";
//     }
//     starString += "\n";
//   }

//   console.log(starString);
// }

// diamond(4);

// function diamond(n) {
//   let starString = "";

//   for (let i = 1; i <= 2 * n - 1; i++) {
//     if (i <= n) {
//       //print upside pyramid
//       //print space
//       for (let j = 1; j <= n - i; j++) {
//         starString += " ";
//       }

//       //print star
//       for (let k = 1; k <= 2 * i - 1; k++) {
//         starString += "*";
//       }
//       starString += "\n";
//     } else {
//       //print downside pyramid
//       for (let j = i - n; j < n; j++) {
//         starString += " ";
//       }

//       //print star

//       for (let k = i * 2 - 1; k <= 1; k--) {
//         starString += "*";
//       }
//       starString += "\n";
//     }
//   }

//   console.log(starString);
// }

// diamond(4);
