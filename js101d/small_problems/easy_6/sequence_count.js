/**
 * Create a function that takes two integers as arguments.
 * The first argument is a count, and the second is the starting
 * number of a sequence that your function will create.
 * The function should return an array containing the same number
 * of elements as the count argument. The value of each element should
 * be a multiple of the starting number.
 *
 * You may assume that the count argument will always be an integer
 * greater than or equal to 0. The starting number can be any integer.
 * If the count is 0, the function should return an empty array.
 */

function sequence(countOfInts, startingInt) {
  let result = [];

  // loop countOfInts # of times and push multiples to result
  // as we loop
  for (let idx = 0; idx < countOfInts; idx += 1) {
    result.push(startingInt * (idx + 1));
  }
  return result;
}

// Alternate approach using reduce. Note that you have to actually
// fill the array in order to get reduce to work (i.e. it won't work
// on an empty array).
// function sequence(countOfInts, startingInt) {
//   return Array(countOfInts).fill(undefined).reduce((prev, _, idx) => {
//     prev.push(startingInt * (idx + 1));
//     // console.log({ ...prev });
//     return prev;
//   }, []);
// }

// Examples
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
