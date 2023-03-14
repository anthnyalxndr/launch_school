// Stats:
// Took roughly 25 minutes.

/*
Write a function that displays a four-pointed diamond in an nxn grid, where n
is an odd integer supplied as an argument to the function. You may assume that
the argument will always be an odd integer.
*/
function createMatrix(rows) {
  let arr = Array(rows);
  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = new Array(rows).fill(' ');
  }
  return arr;
}

function fillCorrespondingRows(matrix, middle) {
  for (let idx = 0; idx <= middle; idx++) {
    let start = middle - idx;
    let end = middle + idx;
    matrix[idx].fill('*', start, end + 1);
    if (idx !== middle) {
      matrix[matrix.length - idx - 1] = matrix[idx];
    }
  }
}

function matrixToString(matrix) {
  return matrix.map(subArr => subArr.join('')).join('\n');
}

function diamond(rows) {
  let middle = Math.floor(rows / 2);
  let matrix = createMatrix(rows);
  fillCorrespondingRows(matrix, middle);
  let diamondString = matrixToString(matrix);
  return diamondString;
}

// Examples:
console.log(diamond(1));
/*logs
*
*/

console.log(diamond(3));
/*logs
 *
***
 *
*/

console.log(diamond(9));
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

function pedac() {
  function understandTheProblem() {/*
    I: height or width of diamond
    O: rows / columns of whitespace and *
    Concepts:
    -
    Rules:
    - arg is both the height and width of the resulting diamond
    Questions:
    - Edge cases?
      - no args?
    - will an array with '\n' as an element preserve the line break when
      coerced to a string
  */}

  function DSA() {/*
    Algorithm:
    - Only need to create arrays for half the structure
      since the second half is a repeat of the first
    - find Middle element of n length array
    - initialize middle element to '*'
    - gradually
    Data Structures:
    - Gradually fill an array or nested array.
  */}

  function _(funcArr) {
    for (let func of funcArr) func();
  }
  _([understandTheProblem, DSA]);
}
pedac();
