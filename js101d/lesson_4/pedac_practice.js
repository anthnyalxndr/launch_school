/**
 * This file shows a solution to a problem, test cases, and the PEDAC
 * process behind the problem below the problem and test cases.
 */

function sortStringsByConsonants(arr) {
  let max = 0;
  let curCount = 0;
  let counts = {};
  // Loop over the elements
  arr.forEach(el => {
    let cleanedString = el.replace(/[\s]/g, '');
    for (let idx = 0; idx < cleanedString.length; idx += 1) {
      if (/[^aeiou]/i.test(cleanedString[idx])) {
        curCount += 1;
        if (curCount > 1 && curCount > max) {
          max = curCount;
        }
      } else curCount = 0;
    }
    counts[el] = max;
    max = 0;
    curCount = 0;
  });
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}


console.log(sortStringsByConsonants(
  ['aa', 'baa', 'ccaa', 'dddaa'])); // => ['dddaa', 'ccaa', 'aa', 'baa']

console.log(sortStringsByConsonants(
  ['can can', 'toucan', 'batman', 'salt pan'])); // => ['salt pan', 'can can', 'batman', 'toucan']

console.log(sortStringsByConsonants(
  ['bar', 'car', 'far', 'jar'])); // => ['bar', 'car', 'far', 'jar']

console.log(sortStringsByConsonants(
  ['day', 'week', 'month', 'year'])); // => ['month', 'day', 'week', 'year']
// Given an array of strings, return a new array where the
// strings are sorted to the highest number of adjacent
// consonants a particular string contains.
// If two strings contain the same highest number of adjacent
// consonants they should retain their original order in relation
// to each other.
// Consonants are considered adjacent if they are next to
// each other in the same word or if there is a space between
// two consonants in adjacent words.

// P: Understand the Problem
// ---------------------------------------------------------------
// 1) Define all Terms and Eliminate Ambiguity
//     - consonants: non-vowel alphabetic char.
//     - adjacent: next to each other in the same word or if there
//       is a space between two consonants in adjacent words.
//         - means we need to eliminate spaces when counting adjacent
//           consonants.
//
// 2) Identify Explicit & Implicit Rules and Requirements
//     - Input:
//         - data structure(s) / data type(s):
//            - Range of values for the data type(s):] alphabetic chars
//              and spaces
//
//         - Passing by reference
//
//         - Default parameter value(s): None
//
//         Edge Cases:
//           - empty / null / undefined vals allowed?: Assuming yes, and
//             this will return an array with a blank string.
//           - other data types: n/a or return an array w/ a blank string.
//
//         Common Use Cases:
//           - Array with any number of string elements, each of which
//             could be any length. It's likely neither be extremely long.
//
//
//     - Input => Output transformation:
//         - Side Effects vs Returning a Value? new value
//
//         - Other Requirements:
//             - Sort strings by number of adjacent consonants contained
//               in each string descending.
//
//     - Output:
//         - data structure(s) / data type(s): array[string]
//            - Range of values for the data type(s): Array containing
//              blank string or any number of string elements.
//
//            - Other Requirements:
//                - Sorted copy of array passed as an arg.
//
//         - Passing by reference (but new array)
//
//    3) Come up with a mental model of the problem
//        - This will be what you write out in pseduocode
//        1) Create a new array that is a copy of the input array
//           with spaces replaced by blank strings.
//        2) Create a function that returns the number of adjacent
//           consonants for each element in the array
//        3) Return the array in order of the adjacent consonants
//           descending.
//
//    4) Come up with questions
//        - Can adjacent consonants be a different case?
//        - What happens if we encounter a number or special character?
//
//
// E: Examples / Test Cases
// ---------------------------------------------------------------
// - Validate your understanding of the problem by ensuring the
//   the output of your test cases matches what you'd expect
// console.log(sortStringsByConsonants(
//   ['aa', 'baa', 'ccaa', 'dddaa'])); // => ['dddaa', 'ccaa', 'aa', 'baa']

// console.log(sortStringsByConsonants(
//   ['can can', 'toucan', 'batman', 'salt pan']));
//      // => ['salt pan', 'can can', 'batman', 'toucan']

// console.log(sortStringsByConsonants(
//   ['bar', 'car', 'far', 'jar'])); // => ['bar', 'car', 'far', 'jar']

// console.log(sortStringsByConsonants(
//   ['day', 'week', 'month', 'year'])); // => ['month', 'day', 'week', 'year']
//
//
// D + A: Data Structures & Algorithms
// ---------------------------------------------------------------
// - Data Structure
//     - List the data structures that could be used to transform
//       input to output.
//          - 2 loops: 1 over the array and one over each char in
//            each array el
//          - a max variable to keep track of the max num of adjacent
//            consonants. Don't update this until there are at least
//            2 adjacent consants - 1 doesn't count.
//          - a count variable to keep track of the current count of
//            adjacent consonants. Useful for cases when there are
//            multiple cases of adjacent consanants.
//          - An object to keep track of adj consant count and word
//            key value pairs.
//     - Consider whether or not a data structure is need or if a
//        problem can be solved formulaically / mathematically
//
// - Algorithm (Step by step process of input => output)
//     - Write high level pseudocode explaining the algorithm
//     - If one part of the algorithm is particularly complicated,
//       go through this process for that specific part of the
//       algorithm as if it were its own algorithm
//         - You could also make that part of the algorithm into
//           its own function
//     - Step by step algorithm
//        1) Write a function that calculates the count of adjacent
//           consonants in a string
//           - Get rid of the spaces in the string when doing this
//             calculation. array.map(el => el.replace(/[\s]/, ''))
//             could be a good option.
//          - Initialize a max variable to keep track of the max num
//            of adjacent consonants in a given string.
//          - Initialize a count variable to keep track of the current
//            num of adjacent consonants in the string. If the current
//            num is greater than the max, then set the max to the current.
//          - Loop through each char in each element and...
//              1) test whether the current count of adjacent consanants
//                 is greater than the max number of adjacent consonants
//                 for the given word.
//              2) If it is, set the max variable to the current count.
//              3) From here there are a few options...
//                   1) When done looping over a word, push the max count of
//                 adjacent consonants to an object as the key, and push the
//                 string itself as the value. From there you can sort the
//                 keys and then return an array of the associated values for
//                 each key.
//                   - ** Problem ** I don't know if in the case of a tie, the
//                     original order of the two elements will be maintained.
//        2) Use method chaining to do the following
//           - Make a copy of the input array (splice())
//           - Plug the above function into the array.sort method
//              - Account for the special syntax used by the sort
//                method's compare function.
//        3) Return the sorted array
//
//
// C: Code with Intent
// ---------------------------------------------------------------
// 1) Think about the algorithm in the context of your programming
//    language
//      - Syntax / coding patterns
//      - Built-in functions / methods
//      - Language features / constraints
//      - Characterisitcs of data structures
//
// 2) Start by writing pseudocode
//      - Don't get stuck trying to write the whole program in
//        pseudocode first since that's hard to do and can't be
//        validated.
//
// 3) Test Frequently
//      - Ensure you're checking your code step-by-step as you go
//        instead of writing a bunch of code and checking it all at
//        once.
//
//      - Breaking your code into functions can make this easier
//
//      - Explicitly mark points in your code where you can test
//        values.
//          - Use breakpoints or log things to the console to ensure
//            that your variables and function outputs are what you
//            expect them to be.
