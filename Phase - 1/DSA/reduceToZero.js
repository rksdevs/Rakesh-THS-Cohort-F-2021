/* 
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
Test Cases :
Sample Input 1 :
Input: num = 14
Output: 6 (No Of Steps) , Please Print the steps like below with values.
Sample Input 2 :
Input: num = 8
Output: 4 (No of Steps), Please Print the steps like below with values.
*/
let steps = 0;

function redZero(x) {
  if (x < 0) {
    console.log("Enter a non-negative integer");
  } else if (x == 0) {
    console.log(steps);
  } else if (x % 2 == 0) {
    steps++;
    x = x / 2;
    redZero(x);
  } else if (x % 2 != 0) {
    steps++;
    x = x - 1;
    redZero(x);
  }
}

redZero(8);
