/*
Write a function that takes an array of strings and returns an array of the
same string values, but with all vowels (a, e, i, o, u) removed.

*/

function removeVowels(strArr) {
  // Manual Approach
  // const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  // return strArr.reduce((prev, cur) => {
  //   cur = cur.split('').reduce((prev, cur) => {
  //     if (!vowels.includes(cur)) prev += cur;
  //     return prev;
  //   }, '');
  //   prev.push(cur);
  //   return prev;
  // }, []);
  // Cleaner approach using regex.
  return strArr.map(el => el.replace(/[aeiou]/gi, ''));
}

// Examples
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
