// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

const areThereDuplicates = (...arg) => {
  if (arg.length <= 1) return false;

  let freqCounter = {};
  for (let a of arg) {
    if (!freqCounter[a]) {
      freqCounter[a] = 1;
    } else {
      return true;
    }
  }
  return false;
  //   console.log(freqCounter);
};

console.log(areThereDuplicates(1, 2, 2));
