/*
Merge sort is a recursive sorting algorithm that works by breaking down an
array's elements into nested subarrays, then combining those nested subarrays
back together in sorted order. It is best explained with an example.

Given the array [9, 5, 7, 1], let's walk through the process of sorting it with
merge sort. We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
We then work our way back to a flat array by merging each pair of nested
subarrays back together in the proper order:

Copy Code
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]
Write a function that takes an array argument and returns a new array that
contains the values from the input array in sorted order. The function should
sort the array using the merge sort algorithm as described above. You may
assume that every element of the array will be of the same data type—either
all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.
*/

function getSortedArray(leftSorted, rightSorted) {
  let newArray = [];
  while (leftSorted.length > 0 || rightSorted.length > 0) {
    if (leftSorted.length > 0 && rightSorted.length > 0) {
      let min = leftSorted[0] <= rightSorted[0]
        ? leftSorted.shift()
        : rightSorted.shift();
      newArray.push(min);
    } else if (leftSorted.length > 0 && rightSorted.length === 0) {
      newArray.push(leftSorted.shift());
    } else newArray.push(rightSorted.shift());
  }
  return newArray;
}
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let halfwayIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, halfwayIdx);
  let right = arr.slice(halfwayIdx);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  let newArray = getSortedArray(leftSorted, rightSorted, []);
  return newArray;
}

// Examples:
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


function pedac() {
  function understandTheProblem() {
    // I: Array[num] || Array[string]
    // O: New Array[num] || Array[string] sorted in numeric ascending order
    // Rules:
    // - Don't mutate the array arg.
    // - Recursive
    //    - Recurse until each element is an array
    //    - Return sorted array while recursing
    // Questions:
    // - For odd length arrays should halfway just be
    //   Math.floor(arr.length / 2) ?
  }
  understandTheProblem();
  function DSA() {
    // (Maybe) Identify what data types elements are
    // Choose sorting function based on elements data type
    // Recursively split arrays into subArrays
    // If arr is a single-element arr return it
    // Sort returned arrays in return expression
    // Loop over 1 of the subarrays and splice its elements into the other
    // where they fit
  }
  DSA();
}

pedac();
