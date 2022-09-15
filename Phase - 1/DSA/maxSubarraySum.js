/* 
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

eg:
maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17
maxSubarraySum([4,2,1,6], 1) //6
maxSubarraySum([4,2,1,6,2], 4)  //13
maxSubarraySum([], 4) //null
*/

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    //need to get the sum of n numbers of from the array
    // let slider = i + n;
    maxSum += arr[i];
  }

  //if maxSum is less than the current sum update maxSum

  for (let i = n; i < arr.length; i++) {
    tempSum = maxSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

/* 
 i
[1,2,5,2,8,1,5]
 s s

 */

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
