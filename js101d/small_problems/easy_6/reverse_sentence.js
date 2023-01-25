/**
 * Write a function that takes a string argument and returns
 * a new string containing the words from the string argument
 * in reverse order.
 */

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

// Examples
console.log(reverseSentence("") === ""); // ""
console.log(reverseSentence("Hello World") === "World Hello"); // "World Hello"
console.log(reverseSentence("Reverse these words") === "words these Reverse"); // "words these Reverse"
