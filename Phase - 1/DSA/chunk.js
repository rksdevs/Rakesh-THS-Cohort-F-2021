// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let pointer = 0;
  let chunkedArray = [];
  while (pointer < array.length) {
    chunkedArray.push(array.slice(pointer, pointer + size));
    pointer += size;
  }
  return chunkedArray;
}

// function chunk(array, size) {
//   let resultArray = [];
//   let subArray = [];

//   for (let j = 0; j < array.length; j += size) {
//     for (let i = 0; i < size; i++) {
//       if (!array[i + j]) {
//         break;
//       } else {
//         subArray.push(array[i + j]);
//       }
//     }
//     resultArray.push(subArray);
//     subArray = [];
//   }
//   return resultArray;
// }

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
