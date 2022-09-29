// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abcdef', 'asgbcdef'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// isSubsequence('false', 'true');

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// hello  hello world
// ij

const isSubsequence = (strA, strB) => {
  let p1 = 0;
  let p2 = 0;

  //   while (p1 < strA.length) {
  //     //check if the first char of str1 matches first char of str2
  //     if (strA[p1] == strB[p2]) {
  //       //if the first char of both string matches check second char of both strings matches1
  //       if (strA[p1 + 1] == strB[p2 + 1]) {
  //         return true;
  //       } else {
  //         // increase p1 & set p2 same as p1
  //         p1++;
  //         p2 = p1;
  //       }
  //     } else {
  //       //increase p2 if its less than strB length
  //       p2 < strB.length ? p2++ : p1++;
  //     }
  //   }
  //   return false;

  while (p1 < strA.length) {
    //check p1 of strA matches with p2 of StrB
    if (strA[p1] === strB[p2]) {
      p1++;
      p2 = p1;
    } else {
      if (p2 < strB.length) {
        p2++;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(isSubsequence("abcdef", "asgbcdef"));
// isSubsequence('abc', 'abracadabra'); // true

// let dictionary = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let arr = ["x", "y", "z"];

// for (let a of dictionary) {
//   console.log(a);
// }

// class Student {
//   constructor(firstName, lastName, year) {
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.grade = year);
//   }
// }

// let student1 = new Student("Jhon", "Doe", 2022);

// console.log(student1);

//   //defining a method inside a class contructor

//   fullName = () => {
//     return `Your full name is ${this.firstName} ${this.lastName}`;
//   };

//   //class methods
//   static totalGrade(a, b) {
//     return a.grade + b.grade;
//   }
// }

// let stu1 = new Student("rakesh", "sahu", 8);
// let stu2 = new Student("ruchi", "sahoo", 0);
// let grades = Student.totalGrade(stu1, stu2);

// console.log(stu1, stu2);
// console.log(grades);
