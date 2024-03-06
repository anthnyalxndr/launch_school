/*
Write a function called `swap` that takes a string as an argument, and returns a new string, where the alphabetic characters have taken the place of the numeric characters, and vice versa.

P.I.str
  .type
  .rangeOfValues
  .null/undefined

P.I
  .wrongArgs
  .tooMany
  .wrongType

P.O.newStr
  .type
  .rangeOfValues
  .null/undefined

P.Rules
  - numbers matched to letters based on order of appearance
  - doesn't matter if numbers or letters come first.
  - unmatched numbers or letters left in their place

P.Definitions

P.Questions
  - What does taken the place of mean? E.g. "alphabetic characters have taken the place of the numeric characters"

DSA.A
  .description: return a new string, where the alphabetic characters have taken the place of the numeric characters, and vice versa.

  .Steps
    - initialize vars
      - letterArr: arr of str letters to make swapping easier.
      - seen: set for seen chars -> "char, postSwapIdx"
      - numCount: seen.size
      - letterCount
      - getType() { return /\d/.test(curChar) ? 'number' : 'letter';
      - inSeen: fn | seen.has("char, postSwapIdx")
      - sameType(1stCharType, 2ndChar) {
        return 1stCharType === 'number' ? /\d/.test(2ndChar) : /[a-z]/i.test(2ndChar);
      }
      - validSwapChar(1stCharType) { !seen.has(...) && sameType(1stCharType, 2ndChar)}
    - loop over str
      - identify if curChar isNum or isChar
        - increment curChar type count
        - findSwapChar
          - increment until validSwapChar found.
        - swap position with swapChar
        - add swapped chars and their new position to seen.



        
*/

function sameType(char1, char2) {
  return type(char1) === type(char2);
}
function validSwapChar(curChar, curIdx, swapChar, swapCharIdx) {
  let eitherSeen = inSeen(curIdx) || inSeen(swapCharIdx);
  return !eitherSeen && !sameType(curChar, swapChar);
}

function type(char) { return /\d/.test(char) ? 'number' : 'letter' };

function inSeen(postSwapIdx) { return swappedStatus[postSwapIdx] === true }

function loop(letterArr) {
  for (let idx = 0; idx < letterArr.length; idx++) {
    let swapIdx = swappedStatus.indexOf(false);
    let noSwapsExist = swapIdx === -1 ? true : false;
    let alreadySwapped = swappedStatus[idx];
    let curChar = letterArr[idx];
    let swapped = false;

    if (noSwapsExist || alreadySwapped) continue;
    
    while (!swapped) {
      let swapChar = letterArr[swapIdx];

      if (swapIdx >= letterArr.length) break;

      if (!validSwapChar(curChar, idx, swapChar, swapIdx)) {
        swapIdx += 1;
        continue;
      }

      [idx, swapIdx].forEach(idx => swappedStatus[idx] = true);

      [letterArr[idx], letterArr[swapIdx]] = [letterArr[swapIdx], letterArr[idx]];

      swapped = true;
      break;
    }
  }

}
function swap(str) {
  let letterArr = Array.from(str);
  let swappedStatus = (new Array(str.length)).fill(false);

  loop(letterArr);

  return letterArr.join('');
}

console.log(`swap("1a2b3c") === "a1b2c3"`); // true
console.log("answer:" , swap("1a2b3c")); // true
console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(`swap("abcd123") === "123dabc"`); // true
console.log("answer:" , swap("abcd123")); // true
console.log(swap("abcd123") === "123dabc"); // true

