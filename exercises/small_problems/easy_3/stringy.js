/**
 * Write a function that takes one argument, a positive integer, and returns a
 * string of alternating '1's and '0's, always starting with a '1'. The length
 * of the string should match the given integer.
 */

function stringy(int) {
  let lengthMultipleOf2 = Math.floor(int / 2);
  let lengthIsEven = int % 2 === 0;
  if (lengthIsEven) {
    return '10'.repeat(lengthMultipleOf2);
  } else {
    return lengthMultipleOf2 > 0 ? '10'.repeat(lengthMultipleOf2) + '1' : '1';
  }
}


// Examples
console.log(stringy(6) === "101010");    // "101010"
console.log(stringy(9) === "101010101");    // "101010101"
console.log(stringy(4) === "1010");    // "1010"
console.log(stringy(7) === "1010101");    // "1010101"
