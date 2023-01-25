/**
 * Write a function that takes an integer argument and returns
 * an array containing all integers between 1 and the argument
 * (inclusive), in ascending order.
 * You may assume that the argument will always be a positive integer.
 */

function sequence(int) {
  let result = [];
  // Loop from 1 until int and push the numbers to result
  for (let idx = 1; idx < int + 1; idx += 1) {
    result.push(idx);
  }
  return result;
}

// Examples
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
