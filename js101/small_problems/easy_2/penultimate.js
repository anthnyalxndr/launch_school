/**
 * Write a function that returns the next to last word in the String passed to
 * it as an argument.
 * Words are any sequence of non-blank characters.
 * You may assume that the input String will always contain at least two words.
 */

function penultimate(str) {
  // Example of dealing with argument of wrong type.
  if (str === null || str === undefined) {
    throw new TypeError('Error: Please supply a string');
  }
  let words = str.split(' ');
  // Example of dealing with string argument that doesn't contain multiple
  // words.
  if (words.length < 2) {
    throw new Error('Error: Supply a string with at least 2 words');
  }
  return words[words.length - 2];
}

// Examples / Test Cases

// Example of how to deal with custom errors.
try {
  console.log(penultimate(null));
} catch (exception) { console.log(exception.message) }
try {
  console.log(penultimate(undefined));
} catch (exception) { console.log(exception.message) }

try {
  console.log(penultimate(''));
} catch (exception) { console.log(exception.message) }

console.log(penultimate("last word") === "last"); // logs true

console.log(penultimate("Launch School is great!") === "is"); // logs true
