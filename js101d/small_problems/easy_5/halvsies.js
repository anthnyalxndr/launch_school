/**
 * Write a function that takes an array as an argument and
 * returns an array that contains two elements, each of which
 * is an array. Put the first half of the original array elements
 * in the first element of the return value, and put the second half
 * in the second element. If the original array contains an odd number of
 * elements, place the middle element in the first half array.
 */

function halvsies(arr) {
  // Declar a new arr to hold the two halves
  let result = [];
  // Identify the middle element
  let middleIdx = Math.ceil(arr.length / 2);

  // Put 1st half of array in new array
  result.push(arr.slice(0, middleIdx));

  // Put 2nd half of array in new array
  result.push(arr.slice(middleIdx));

  return result;
}

// Examples
console.log(...halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(...halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(...halvsies([5]));                // [[5], []]
console.log(...halvsies([]));                 // [[], []]
