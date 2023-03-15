/*
Write a function that displays an 8-pointed star in an NxN grid, where N is an
odd integer that is supplied as an argument to the function. The smallest such
star you need to handle is a 7x7 grid (i.e., when N is 7).
*/
function getRowString(idx, middleIdx, gridSize) {
  let offset = (gridSize % 2 === 0) && (idx > 0) ? ' ' : '';
  if (idx === middleIdx) return gridSize % 2 === 0
    ? offset + '*'.repeat(gridSize - 1)
    : '*'.repeat(gridSize);
  let spaceBetweenStars = idx < middleIdx
    ? ' '.repeat(middleIdx - idx - 1)
    : ' '.repeat(idx - middleIdx - 1);
  let stars = '*' + spaceBetweenStars + '*' + spaceBetweenStars + '*';
  let padding = ' '.repeat((gridSize - stars.length) / 2);
  return offset + padding + stars + padding;

}

function star(gridSize) {
  if (gridSize < 7) return undefined;
  let middleIdx = Math.floor(gridSize / 2);

  for (let idx = 0; idx < gridSize; idx++) {
    console.log(getRowString(idx, middleIdx, gridSize));
  }

  return undefined;
}

// Examples:
star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log('\n');

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

console.log('\n');

star(12);
// logs
// *     *     *
//  *    *    *
//   *   *   *
//    *  *  *
//     * * *
//      ***
// ************
//      ***
//     * * *
//    *  *  *
//   *   *   *
//  *    *    *


function pedac() {
  function understandTheProblem() {/*
    I: number: gridSize
    O: undefined / logging to console
    Concepts:
    Rules:
    - Min gridSize = 7
    - middle is row of stars gridSize long
    - rows above and below middle have 3 stars with increasing
      separation away from middle.
    Questions:
  */}

  function DSA() {/*
    Algorithm:
    - create a middle variable
    - loop gridSize times to create each row
      - create a padding variable to keep track of padding around stars and
        increment it
      - use a space between stars variable and decrement it
    - loop to create stars with spaces
    - concatenate padding + stars + padding
    Data Structures:
  */}

  function _(funcArr) {
    for (let func of funcArr) func();
  }
  _([understandTheProblem, DSA]);
}
pedac();
