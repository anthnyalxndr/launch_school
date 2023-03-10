/*
Write a function that takes a string argument and returns a list of
substrings of that string. Each substring should begin with the first letter of
the word, and the list should be ordered from shortest to longest.
*/
// function leadingSubstrings(str) {
// Manual approach with for loop
// let result = [];

// // Loop over str and push substrings
// for (let idx = 0; idx < str.length; idx++) {
//   result.push(str.slice(0, idx + 1));
// }

// return result;
// }

// Alternate approach using reduce.
function leadingSubstrings(str) {
  return str.split('').reduce((prev, _, idx, arr) => {
    prev.push(arr.slice(0, idx + 1).join(''));
    return prev;
  }, []);
}

// Examples
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
