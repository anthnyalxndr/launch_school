/**
 * Write a function that takes a string, doubles every
 * character in the string, and returns the result as a new string.
 */

function repeater(str, reps) {
  return str.split('').reduce((prev, cur) => {
    prev += cur.repeat(reps);
    return prev;
  }, '');
}

// Examples
console.log(repeater('Hello', 2) === "HHeelllloo");        // "HHeelllloo"
console.log(repeater('Good job!', 2) === "GGoooodd  jjoobb!!");    // "GGoooodd  jjoobb!!"
console.log(repeater('', 2) === "");             // ""
