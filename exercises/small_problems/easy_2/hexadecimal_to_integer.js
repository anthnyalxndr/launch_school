/**
 * Write a function that takes a string of digits and returns the appropriate
 * number as an integer.
 * You may not use any of the methods mentioned above (ParseInt / Number)
 *
 * For now, do not worry about leading + or - signs, nor should you worry
 * about invalid characters; assume all characters will be numeric.
 *
 * You may not use any of the standard conversion methods available in
 * JavaScript, such as String() and Number().
 *
 * Your function should do this the old-fashioned way and calculate the
 * result by analyzing the characters in the string.
 */

// Note the difference in loop approaches below. Both are fine, but the gradual
// base 10 conversion approach is cleaner than the immediate base 10 conversion
// approach.
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function hexadecimalToInteger(str) {
  let num = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    num = (num * 16) + DIGITS[str[idx].toUpperCase()];
  }
  return num;
}

// Examples / Test Cases

// 4 * 16^3 = 16384
// 13 * 16^2 = 3328
// 9 * 16 = 144
// 15 * 1 = 15
// sum = 19871
console.log(hexadecimalToInteger('4D9f') === 19871);
