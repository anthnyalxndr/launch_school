/**
 * Write a function that takes two strings as arguments
 * Determine the length of the two strings
 * Return the result of concatenating the shorter string, the longer string,
 * and the shorter string once again.
 * You may assume that the strings are of different lengths.
 */

function shortLongShort(str1, str2) {
  let shorter = (str1.length < str2.length) ? str1 : str2;
  let longer = (shorter === str1) ? str2 : str1;
  return shorter + longer + shorter;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));
