/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,11,15,7], target = 9
Output: [0,3]
Output: Because nums[0] + nums[3] == 9, we return [0, 3].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

let target = 6;
let output = [];

function fun(nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[j] + nums[i] == target && i != j) {
        output.push(i, j);
        console.log(output);
        return;
      }
    }
  }
}

fun([2, 11, 15, 7], 9);
