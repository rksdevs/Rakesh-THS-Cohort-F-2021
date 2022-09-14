/* 
Javascript Program to Count Unique Elements in an array.

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unqique values in the array. THere can be negative numbers in the array but it will always be sorted.

Ex;
countUnqiueValues([1,1,1,1,2]) // 2
countUnqiueValues([]) // 0
countUnqiueValues([1,1,1,1,2,3,3,4,5,5,5,6,23,23,23,24]) // 8

*/

const countUnqiueValues = (sortedArr) => {
  //if an empty array return 0
  if (sortedArr === []) {
    return 0;
  }
  if (sortedArr.length === 1) {
    return 1;
  }
  let fPointer = 0;
  let countOfUnique = 0;
  let resultArr = [];

  //check if 2 elements are different add the elem to new arr

  for (fPointer; fPointer < sortedArr.length - 1; fPointer++) {
    let sPointer = fPointer + 1;

    if (sortedArr[fPointer] !== sortedArr[sPointer]) {
      resultArr.push(sortedArr[fPointer]);

      if (fPointer === sortedArr.length - 2) {
        resultArr.push(sortedArr[sPointer]);
      }
    } else {
      if (fPointer === sortedArr.length - 2) {
        resultArr.push(sortedArr[sPointer]);
      }
    }
    console.log(resultArr);
  }

  return resultArr.length;
};

console.log(countUnqiueValues([2, 1, 1, 1, 1]));
