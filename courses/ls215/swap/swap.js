/*
Write a function called `swap` that takes a string as an argument, and returns a
new string, where the alphabetic characters have taken the place of the numeric
characters, and vice versa.

P.I.str .type .rangeOfValues .null/undefined

P.I .wrongArgs .tooMany .wrongType

P.O.newStr .type .rangeOfValues .null/undefined

P.Rules
  - numbers matched to letters based on order of appearance
  - doesn't matter if numbers or letters come first.
  - unmatched numbers or letters left in their place

P.Definitions

P.Questions
  - What does taken the place of mean? E.g. "alphabetic characters have taken
    the place of the numeric characters"

DSA.A .description: return a new string, where the alphabetic characters have
  taken the place of the numeric characters, and vice versa.

  .Steps - initialize vars - letterArr: arr of str letters to make swapping
    easier. - seen: set for seen chars -> "char, postSwapIdx" - numCount:
    seen.size - letterCount - getType() { return /\d/.test(curChar) ? 'number' :
    'letter'; - inSeen: fn | seen.has("char, postSwapIdx") -
    sameType(1stCharType, 2ndChar) { return 1stCharType === 'number' ?
    /\d/.test(2ndChar) : /[a-z]/i.test(2ndChar);
      }
      - validSwapChar(1stCharType) { !seen.has(...) && sameType
        (1stCharType, 2ndChar)}
    - loop over str
      - identify if curChar isNum or isChar
        - increment curChar type count
        - findSwapChar
          - increment until validSwapChar found.
        - swap position with swapChar
        - add swapped chars and their new position to seen.

*/


function getSwapType(curChar) {
  if (type(curChar) === 'number') return 'letter';
  else return 'number';
}

function type(char) {
  switch (true) {
    case /\d/.test(char):
      return 'number';
    case /[a-z]/i.test(char):
      return 'letter';
    default:
      return 'other';
  }
}

function markSwapped(idx, swapIdx, swappedList) {
  [idx, swapIdx].forEach((idx) => (swappedList[idx] = true));
}

function swapChars(idx, swapIdx, letterArr) {
  [letterArr[idx], letterArr[swapIdx]] = [letterArr[swapIdx], letterArr[idx]];
}

function findSwap(idx, letterArr, swappedList) {
  let swapType = getSwapType(letterArr[idx]);
  let swapIdx = swappedList.findIndex((el, idx) => {
    return type(letterArr[idx]) === swapType && el === false;
  });
  let noSwapsExist = swapIdx === -1;

  if (noSwapsExist) return;

  markSwapped(idx, swapIdx, swappedList);

  swapChars(idx, swapIdx, letterArr);
}

function iterate(str, letterArr) {
  let swappedList = new Array(str.length).fill(false);

  for (let idx = 0; idx < letterArr.length; idx++) {
    let alreadySwapped = swappedList[idx];
    let charType = type(letterArr[idx]);
    let invalidType = charType === 'other';
    if ( invalidType || alreadySwapped) continue;

    findSwap(idx, letterArr, swappedList);
  }
}

function swap(str) {
  let letterArr = Array.from(str);

  iterate(str, letterArr);

  return letterArr.join('');
}

console.log(`swap("1a2b3c") === "a1b2c3"`);
console.log('answer:', swap('1a2b3c'));
console.log(swap('1a2b3c') === 'a1b2c3'); // true
console.log(`swap("abcd123") === "123dabc"`);
console.log('answer:', swap('abcd123'));
console.log(swap('abcd123') === '123dabc'); // true
console.log(`swap("123-4a#b$") === "ab3-41#2$"`);
console.log('answer:', swap("123-4a#b$"));
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
