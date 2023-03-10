/*
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at index position 0 should come first,
then all substrings that start at index position 1, and so on. Since multiple
substrings will occur at each position, return the substrings at a given index
from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the
previous exercise:
*/
// Helper func
function leadingSubstrings(str) {
  return str.split('').reduce((prev, _, idx, arr) => {
    prev.push(arr.slice(0, idx + 1).join(''));
    return prev;
  }, []);
}

// With helper func and manual for loop
// function substrings(str) {
//   let result = [];
//   for (let idx = 0; idx < str.length; idx++) {
//     result = result.concat(leadingSubstrings(str.slice(idx, str.length)));
//   }
//   return result;
// }

// With helper func and list processing
function substrings(str) {
  return str.split('').reduce((prev, _, idx) => {
    prev = prev.concat(leadingSubstrings(str.slice(idx, str.length)));
    return prev;
  }, []);
}


// Without helper func
// function substrings(str) {
//   return str.split('').reduce((prev, _, idx, arr) => {
//     for (let start = idx; start < arr.length; start++) {
//       prev.push(str.slice(idx, start + 1));
//     }
//     return prev;
//   }, []);
// }

// Examples
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
