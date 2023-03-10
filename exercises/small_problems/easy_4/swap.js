/**
 * Given a string of words separated by spaces, write a function that swaps
 * the first and last letters of every word.
 * You may assume that every word contains at least one letter,
 * and that the string will always contain at least one word.
 *
 * You may also assume that each string contains nothing but words and spaces,
 * and that there are no leading, trailing, or repeated spaces.
 *
 * Algorithm:
 * Use slice + concatenation to swap the letters
 *   - leverage negative indices
 */

function swap(words) {
  let arr = words.split(' ').map((el) => {
    if (el.length === 1) return el;
    return el.slice(-1) + el.slice(1, -1) + el[0];
  });
  return arr.join(' ');
}

// Examples
console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde') === "ebcdA");                          // "ebcdA"
console.log(swap('a') === "a");                              // "a"
