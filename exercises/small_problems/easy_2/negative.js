/**
 * Write a function that takes a number as an argument. If the argument is a
 * positive number, return the negative of that number. If the argument is a
 * negative number, return it as-is.
 */

// Solution w Math.abs
function negative(number) {
  return Math.abs(number) * -1;
}

// // Solution w ternary operator
// function negative(num) {
//   if (1 / num < 0) return num;
//   else return -num;
// }

// Examples
console.log(negative(5) === -5);     // -5
console.log(negative(-3) === -3);    // -3
console.log(1 / negative(0) === -Infinity);     // -0
