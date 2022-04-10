// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

// function reverseInt(n) {
//   if (n < 0) {
//     let str = String(n).split("").reverse();
//     str.pop();
//     return -str.join("");
//   } else {
//     return Number(String(n).split("").reverse().join(""));
//   }
// }

console.log(reverseInt(-50));
