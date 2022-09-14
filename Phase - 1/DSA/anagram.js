/* 
Given two strings ‘a’ and string ‘b’, we have to check if they are anagrams of each other or not and return True/False. For example,

Input-1 −

String a= “india”
String b= “nidia”
Output −

True
Explanation − Since the given string ‘b’ contains all the characters in the string ‘a’ thus we will return True.

Input-2 −

String a= “hackathon”
String b= “achcthoon”
Output −

False
Explanation − Since the given string ‘b’ doesn’t have all the characters as string ‘a’ have thus we will return False.
*/

const anagram = (str1, str2) => {
  //break the str into object
  //check if their length is equal

  if (str1.length !== str2.length) {
    return false;
  }
  let fCounter1 = {};
  let fCounter2 = {};

  for (let a in str1) {
    char = str1[a].toLowerCase();
    fCounter1[char] = ++fCounter1[char] || 1;
  }
  //   return fCounter1;
  console.log(fCounter1);
  for (let b in str2) {
    // if (Object.keys(fCounter1) !== b) {
    //   return false;
    // }
    char = str2[b].toLowerCase();
    fCounter2[char] = ++fCounter2[char] || 1;
  }
  console.log(fCounter2);

  //check if the 2nd object has the same keys as the 1st object

  for (let x in fCounter1) {
    if (str2.indexOf(x) === -1) {
      return false;
    }
    //check the value of the keys are the same for both of the objects
    if (fCounter2[x] !== fCounter1[x]) {
      return false;
    }
  }
  return true;
};

console.log(anagram("India", "india"));

//O(n)
