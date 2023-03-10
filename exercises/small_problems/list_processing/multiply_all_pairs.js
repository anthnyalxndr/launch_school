/*
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations of
number pairs that exist between the two arrays. The returned array should be
sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

function multiplyAllPairs(arr1, arr2) {
  let productOfAllCombos = [];

  // Use a nested loop to loop over every element combo and push product of
  // all combos to

  for (let el1 of arr1) {
    for (let el2 of arr2) {
      productOfAllCombos.push(el1 * el2);
    }
  }

  // Sort product of all combos before returning
  productOfAllCombos.sort((a, b) => a - b);

  return productOfAllCombos;
}

// Examples
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
