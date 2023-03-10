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
function stringToInteger(str) {
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
    9: 9
  };
  let num = 0;

  // // This for loop converts each digit to it's base 10 equivalent
  // // right away.
  // for (let idx = 0; idx < str.length; idx += 1) {
  //   num += Math.pow(10, str.length - idx - 1) * DIGITS[str[idx]];
  // }

  // This for loop converts each digit to it's base 10 equivalent
  // gradually over the course of the loop.
  for (let idx = 0; idx < str.length; idx += 1) {
    num = (num * 10) + DIGITS[str[idx]];
  }

  // If we had to deal with negative numbers, we'd have to have an
  // if statement here to determine if a minus sign was present and
  // then substract num from 0 if one was.
  return num;
}

// Examples / Test Cases
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
