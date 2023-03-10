// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix.You should implement the function on
//your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.

function transpose(matrix) {
  // Create an empty version of the matrix arg
  let newArr = matrix.slice().map(el => {
    el = el.slice();
    el.length = 0;
    return el;
  });
  // Loop over the sub arrays
  // In each loop of the subarray, push the element of cur at arrIdx to the
  // subArr in prev at arrIdx.
  return matrix.reduce((prev, cur) => {
    for (let arrIdx = 0; arrIdx < prev.length; arrIdx++) {
      prev[arrIdx].push(cur[arrIdx]);
    }
    return prev;
  }, newArr);
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(...newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(...matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
