// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

var pivotIndex = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b);
  // console.log(totalSum)
  let sumToLeft = 0;
  let sumToRight = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sumToLeft = 0;
    } else {
      sumToLeft += nums[i - 1];
    }

    if (i === nums.length - 1) {
      sumToRight = 0;
    } else {
      sumToRight = totalSum - nums[i] - sumToLeft;
    }

    if (sumToRight === sumToLeft) {
      return i;
    }
  }

  return -1;
};

// 1,7,3,6,5,6

// totalSum = 28
// sumToRight = 28 - num[i] - (sumToLeft)
// sumToLeft = sum(num[0] ... num[i-1])
// i left right
// 0 0    28
// 1 1     19
// 2 8     17
// 3 11    11 -> 3
