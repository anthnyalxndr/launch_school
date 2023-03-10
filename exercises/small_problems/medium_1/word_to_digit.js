/*
Write a function that takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character.
*/

// eslint-disable-next-line max-lines-per-function
function wordToDigit(str) {
  let numWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numWords.forEach((el, idx) => {
    let regex = new RegExp(`\\b${el}\\b`, 'g');
    str = str.replace(regex, idx);
  });
  return str;
  // Solution using a map to replace number words
  // let map = numWords.reduce((prev, cur, idx) => {
  //   prev[cur] = idx;
  //   return prev;
  // }, {});
  // return str
  //   .split(" ")
  //   .map(el => {
  //     let punctuation = el.match(/[^A-z0-9]/g);
  //     let cleaned = el.replace(/[^A-z0-9]/g, '');
  //     el = (map[cleaned]) ? map[cleaned] : cleaned;
  //     el = (punctuation) ? el + punctuation.join('') : el;
  //     return el;
  //   })
  //   .join(" ");
}

// Examples
console.log(
  wordToDigit(
    "Please call me at five five five one two three four. Thanks."
  ));// === "Please call me at 5 5 5 1 2 3 4. Thanks."
// );
// "Please call me at 5 5 5 1 2 3 4. Thanks."
