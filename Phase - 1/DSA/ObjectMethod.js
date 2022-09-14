// const obj = {
//   name: "rakesh",
//   age: 31,
//   work: "awesome",
// };

// const arr = [];

// const objToConvert = {
//   "6/30/22": [],
//   "6/29/22": [
//     {
//       a: " ",
//       b: " ",
//     },
//   ],
// };

// [
//   ["6/30/22", []],
//   [
//     "6/29/22",
//     [
//       ["a", " "],
//       ["b", " "],
//     ],
//   ],
// ];

let obj1 = {
  a: "val1",
  b: "val2",
  c: "val3",
};

// obj1.b = 2;

// console.log(obj1);

let arr = [1, 1, 2, 3, 4, 8, 7, 3, 2, 1, 4, 9, 4, 5, 4];
let str = "hello";

let computeResult = (arr) => {
  let resultObj = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (resultObj.hasOwnProperty(arr[i])) {
      resultObj[arr[i]]++;
    } else {
      resultObj[arr[i].toString()] = count;
    }
  }
  return resultObj;
  //   return Object.entries(resultObj).sort();
};

// console.log(computeResult(str));

for (const a in obj1) {
  console.log(obj1[a]);
}

// let arr1 = Object.entries(newObj);
// console.log(arr1);

// arr1.forEach((element) => {});

// console.log(Object.entries(newObj));

// let result = [];
// // newObj.forEach((element) => {
// //   result.push(Object.entries(element));
// // });
// for (const key of newObj) {
//   // if (Object.hasOwnProperty.call(object, key)) {
//   //     const element = object[key];

//   // }
//   result.push(Object.entries(key));
// }

// console.log(Array.isArray(newObj["6/29/22"][0]));

// function callback(arg) {
//   return Object.entries(arg);
// }

// function test(func, obj) {
//   console.log(func(obj));
// }

// test(callback, { a: [1, 2], b: "just b", c: 3 });
