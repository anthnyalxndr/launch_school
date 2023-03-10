/*
Write a function that takes one argument, a positive integer, and returns the
sum of its digits. Do this without using for, while, or
do...while loops - instead, use a series of method calls to perform the sum.
*/

function sum(int) {
  return String(int).split('').reduce((prev, cur) => {
    prev += Number(cur);
    return prev;
  }, 0);
}

// Examples
console.log(sum(23) === 5);           // 5
console.log(sum(496) === 19);          // 19
console.log(sum(123456789) === 45);    // 45
