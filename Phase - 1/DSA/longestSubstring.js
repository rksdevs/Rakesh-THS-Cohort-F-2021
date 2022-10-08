// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const longestSubstring = (s) => {
  //edge cases
  if (s.length === 0 || s === null) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }

  //brute force

  let i = 0;
  let j;
  let subArr = [];
  let maxLen = 0;

  while (i < s.length) {
    for (j = i; j < s.length; j++) {
      //if subArr doesn't have s[j] then push s[j] else break
      if (subArr.indexOf(s[j]) < 0) {
        subArr.push(s[j]);
      } else {
        if (maxLen < subArr.length) maxLen = subArr.length;
        subArr = [];
        break;
      }
    }
    // subArr = [];
    if (maxLen < subArr.length) maxLen = subArr.length;
    subArr = [];
    i++;
  }

  return maxLen;
};

console.log(longestSubstring("pwwkew"));

//pwwkewlghj
//abcabcbb
//dvdf

//maxLen = 2 // if maxLen < len, maxLen = len --> maxLen = 3
//arr = [p,w]
//[{arr: [p,w], len: 2}, {arr: [w,k,e], len: 3}, {arr: [w], len: 1}]
//filter

// console.log([1, 2, 3, 4].join(""));

// let unique = new Set();

// unique.add("a");
// unique.add("b");
// unique.add("c");
// unique.add("b");
// unique.add("a");

// unique.forEach((element) => {
//   console.log(element);
// });
