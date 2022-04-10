// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = "";
  for (const a of str) {
    let counter = 0;
    !obj[a] ? (obj[a] = 1) : obj[a]++;
  }
  console.log(obj);

  for (const char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("apple 1231111"));
