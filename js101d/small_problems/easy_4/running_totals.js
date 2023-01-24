/**
 * Directions:
 * Write a function that takes an array of numbers and returns an array with
 * the same number of elements, but with each element's value being the running
 * total from the original array.
 */

// Using reduce
function runningTotal(arrOfNums) {
  let newArr = arrOfNums.reduce((prev, cur, idx) => {
    if (idx > 0) prev.push(cur + prev[idx - 1]);
    else prev.push(cur);
    return prev;
  }, []);
  return newArr;
}

// Using a for loop
// function runningTotal(arrOfNums) {
//   let newArr = [];
//   for (let idx = 0; idx < arrOfNums.length; idx += 1) {
//     if (idx > 0) newArr.push(arrOfNums[idx] + newArr[idx - 1]);
//     else newArr.push(arrOfNums[idx]);
//   }
//   return newArr;
// }

// Using Map
// function runningTotal(arrOfNums) {
//   let newArr = arrOfNums.map((el, idx, arr) => {
//     // Generate the prev running ottal
//     let prevRunningTotal = (idx > 0) ? arr.slice(0, idx).reduce(
//       (prev, cur) => cur + prev, 0) : 0;
//     return el + prevRunningTotal;
//   });
//   return newArr;
// }

// Test Cases
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
