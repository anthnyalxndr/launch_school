/**
 * Write a function that takes a non-empty string argument and returns the
 * middle character(s) of the string. If the string has an odd length, you
 * should return exactly one character. If the string has an even length,
 * you should return exactly two characters.
 */

function centerOf(str) {
  let halfway = Math.ceil(str.length / 2) - 1;
  if (str.length % 2 === 0) {
    return str.substring(halfway, halfway + 2);
  } else {
    return str.substring(halfway, halfway + 1);
  }
}


// Examples
console.log(centerOf('I Love JavaScript') === "a"); // "a"
console.log(centerOf('Launch School') === " ");     // ===  ") " "
console.log(centerOf('Launch') === "un");            // "un"
console.log(centerOf('Launchschool') === "hs");      // "hs"
console.log(centerOf('x') === "x");                 // "x"
