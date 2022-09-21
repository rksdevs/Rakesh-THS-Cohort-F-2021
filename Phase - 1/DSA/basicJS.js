//function statements or function declarations

// function a() {
//   console.log("a");
// }

// a();

//function expression

// const b = function () {
//   console.log("b");
// };

// b();

// anonymous functions

// function () {

// }

//named fucntion expression

// const c = function d() {
//   console.log("d");
// };

// function d is locally scoped inside the variable c, so it can be called inside c only, if called outside it will give an error

//value passed inside a function is known as arguements
//values passed inside the paranthesis while defining a function is parameter

// const arr = [1, 2, 3];

// function globalFunc() {
//   let a = "print A";

//   return function printA() {
//     console.log(a);
//   };
// }

// let gFunc = globalFunc();

// gFunc();

//Filter

// const arr = ["one", "two", "three", "four", "five"];

// const lengthGreaterThan4 = (str) => {
//   return str.length >= 4;
// };

// // let output = arr.filter(lengthGreaterThan4);

// let output = arr.filter((x) => x.length >= 3);

// console.log(output);

const users = [
  { firstName: "akshay", lastName: "saini", age: 30 },
  { firstName: "elon", lastName: "musk", age: 45 },
  { firstName: "Ratan", lastName: "Tata", age: 70 },
  { firstName: "Narendra", lastName: "Modi", age: 70 },
];

// const output = users.map((agreGrp) => {
//   let dictionary = {};
//   dictionary[agreGrp.age] = dictionary[agreGrp.age]++ || 1;

//   return dictionary;
// });

const output = users.filter((x) => x.age < 70).map((x) => x.firstName);

console.log(output);
