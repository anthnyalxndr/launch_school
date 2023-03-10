/**
 * Write a function that takes two arrays as arguments
 * and returns an array containing the union of the values
 * from the two.
 * There should be no duplication of values in
 * the returned array, even if there are duplicates in the
 * original arrays. You may assume that both arguments will always be arrays.
 */

// function union(arr1, arr2) {
//   let newArr = [];
//   let longerArray = (arr1.length > arr2.length) ? arr1 : arr2;
//   let shorterArray = (longerArray === arr1) ? arr2 : arr1;
//   for (let idx = 0; idx < longerArray.length; idx += 1) {
//     if (idx < shorterArray.length && !newArr.includes(shorterArray[idx])) {
//       newArr.push(arr1[idx]);
//     }
//     if (!newArr.includes(longerArray[idx])) {
//       newArr.push(longerArray[idx]);
//     }
//   }
//   return newArr;
// }

// Alternate solution
function union(...args) {
  let flatArray = args.flat();
  let set = new Set(flatArray);
  return Array(...set);
}

// Examples
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
