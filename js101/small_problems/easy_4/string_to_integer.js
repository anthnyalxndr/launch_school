/**
 * The parseInt() method converts a string of numeric characters
 * (including an optional plus or minus sign) to an integer.
 *
 * The method takes 2 arguments where the first argument is the
 * string we want to convert and the second argument should always
 * be 10 for our purposes.
 *
 * parseInt() and the Number() method behave
 * similarly. In this exercise, you will create a function that does
 * the same thing.
 *
 * Write a function that takes a string of digits and returns the
 * appropriate number as an integer. You may not use any of the
 * methods mentioned above.
 *
 * For now, do not worry about leading + or - signs, nor should you
 * worry about invalid characters; assume all characters will be numeric.
 *
 * You may not use any of the standard conversion methods available in
 * JavaScript, such as String() and Number().
 *
 * Your function should do this the old-fashioned way and calculate
 * the result by analyzing the characters in the string.
 *
 * PEDAC
 * Input: String
 * Output: Number (integer)
 * DSA
 * - split string into an array of characters
 * - loop over the array elements and evaluate if
 *   the elements are numeric.
 * - add each number to a result variable to be returned
 * - everytime we add a number multiply the existing number
 *   by 10 before adding the new number.
 * - once we hit a non-numberic character exit the loop
 *
 */

function stringToInteger(str) {
  if (str.length === 0) return NaN;
  let mapping = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  let number = str.split('').reduce((prev, cur) => {
    if (cur < '0' || cur > '9') return prev;
    return (prev * 10) + mapping[cur];
  }, 0);

  return number;
}

// Examples
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(Object.is(stringToInteger(""), NaN)); // logs true

// Further Exploration
function hexadecimalToInteger(str) {
  const BASE = 16;
  if (str.length === 0) return NaN;
  // eslint-disable-next-line max-len
  let mapping = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  let number = str.split('').reduce((prev, cur) => {
    // Capitalize any alphabetic characters so they match a key in mapping.
    if (cur >= 'A' && cur <= 'z') cur = cur.toUpperCase();
    if (!Object.keys(mapping).includes(cur)) return prev;
    prev = (prev * BASE) + mapping[cur];
    console.log({ cur }, { prev });
    return prev;
  }, 0);

  return number;
}

// Examples
console.log(hexadecimalToInteger('4D9f') === 19871);
