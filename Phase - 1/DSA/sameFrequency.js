// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (a, b) => {
  strA = String(a);
  strB = String(b);
  if (strA.length !== strB.length) return false;

  let fcounter = {};

  for (let i = 0; i < strA.length; i++) {
    let char = strA[i];
    // console.log(char);
    fcounter[char] = ++fcounter[char] || 1;
  }

  console.log(fcounter);

  for (let elem in strB) {
    let char = strB[elem];

    if (!fcounter[char]) {
      return false;
    } else {
      fcounter[char] -= 1;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281));
