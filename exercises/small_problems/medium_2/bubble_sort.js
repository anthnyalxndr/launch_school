/*
Write a function that takes an array as an argument and sorts that array using
the bubble sort algorithm described above. The sorting should be done "in-place"
— that is, the function should mutate the array. You may assume that the array
contains at least two elements.

Questions
 - How can we determine that a full pass of the array has happend?
*/

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
function bubbleSort(arr) {
  let idx1 = 0;
  let idx2 = 1;
  let consecutiveIncrements = 0;
  // Keep looping until we have arr.length consecutive increments.
  // It doesn't matter what idx we start counting consecutive increments, it
  // just matters that we have arr.length of them, since that means no more
  // swapas will happen.
  while (consecutiveIncrements < arr.length) {
    if (arr[idx1] > arr[idx2]) {
      swap(idx1, idx2, arr);
      consecutiveIncrements = 0;
    }

    idx1 += 1;
    idx2 += 1;
    consecutiveIncrements += 1;

    // Reset indices to the beginning of the array if we reached the end of
    // the array.
    if (idx1 === arr.length - 1) [idx1, idx2] = [0, 1];
  }

  return arr;
}

// Examples
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
