/* eslint-disable no-unused-vars */
/**
 * Write a function that returns an Array that contains every other element of
 * an Array that is passed in as an argument. The values in the returned list
 * should be those values that are in the 1st, 3rd, 5th, and so on elements of
 * the argument Array.
 */

// Simper, but more verbose version.
// function oddities(arr) {
//   const oddElements = [];
//   for (let idx = 0; idx < arr.length; idx += 2) {
//     oddElements.push(arr[idx]);
//   }
//   return oddElements;
// }

// Succinct version. Likely less efficient as it has to loop over the
// whole array.
function oddities(arr) {
  return arr.filter((el, index) => index % 2 === 0);
}

// Examples / Test Cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
