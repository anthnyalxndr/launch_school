/**
 * Write a function that takes one argument, a positive integer,
 * and returns a list of the digits in the number.
 */

function digitList(int) {
  // Map seems more logical to use vs reduce given that an element needs to be
  // retured for each element in the array being looped over.
  return String(int).split('').map((el) => Number(el));
}

// Examples
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
