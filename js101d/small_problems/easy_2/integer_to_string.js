/**
 * Write a function that converts a non-negative integer value
 * (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.
 * You may not use any of the standard conversion functions available in
 * JavaScript, such as String(), Number.prototype.toString, or an expression
 * such as '' + number. Your function should do this the old-fashioned way and
 * construct the string by analyzing and manipulating the number.
 */

// Initialize a hash map to convert numbers to their character equivalents
// const CHARS = {
//   0: '0',
//   1: '1',
//   2: '2',
//   3: '3',
//   4: '4',
//   5: '5',
//   6: '6',
//   7: '7',
//   8: '8',
//   9: '9',
// };

// // Solution 1: Solve mathematically by reducing the number by a multiple of
// // the largest power of 10 in the current number until the number is gone.

// function integerToString(num) {

//   // Initialize a string to return at the end of the function
//   let result = '';

//   let length = num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;

//   // Loop over the number 1 digit at a time
//   while (length > 0) {
//     let front = Math.floor(num / Math.pow(10, length - 1));
//     result += CHARS[front];
//     num -= front * Math.pow(10, length - 1);
//     length -= 1;
//   }

//   return result;
// }

// Solution 2: Reduce the number by the lowest power of 10 multiple of the
// number until the number is gone. I.e. always reduce by 10 ^ 0.

function integerToString(num) {
  let CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let back = num % 10;
    result = CHARS[back] + result;
    num = Math.floor(num / 10);
  } while (num > 0);

  return result;
}

// Test Cases
console.log(integerToString(4321) === "4321");        // "4321"
console.log(integerToString(0) === "0");           // "0"
console.log(integerToString(5000) === "5000");        // "5000"
console.log(integerToString(1234567890) === "1234567890");  // "1234567890"
