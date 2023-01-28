/*
Write a function that takes a string argument and returns true if all of the
alphabetic characters inside the string are uppercase; false otherwise.
Ignore characters that are not alphabetic.
*/

function isUppercase(str) {
  return str === str.toUpperCase();
  // Less efficient but alternative approach.
  //   .split("")
  //   .filter((el) => /[a-z]/gi.test(el))
  //   .every((el) => /[A-Z]/g.test(el));
}

// Examples
console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
