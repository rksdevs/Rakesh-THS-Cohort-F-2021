/* Write an algorithm to remove duplicate elements in a unsorted input array and print the total number of elements removed.
## Test Cases :
Sample Input : [1, 2, 2, 3, 4, 4, 4, 5, 5]
Sample Output : [1, 2, 3, 4, 5]
Number of Elements Removed : 4
*/

// let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

let removedElem = 0;

function removeDupElem(arr1) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr1.length; j++) {
      if (arr1[i] === arr1[j] && i !== j) {
        arr1.splice(arr1[j], 1);
        removedElem++;
      }
    }
  }
  console.log(arr1);
  console.log(removedElem);
}

removeDupElem([1, 2, 2, 3, 4, 4, 4, 5, 5]);
