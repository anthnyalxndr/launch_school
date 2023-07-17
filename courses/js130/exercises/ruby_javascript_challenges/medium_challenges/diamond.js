/* eslint-disable no-loop-func */
/* eslint-disable max-lines-per-function */
class Diamond {
  static makeDiamond(endLetter) {
    endLetter = endLetter.toUpperCase();
    const startLetter = "A";
    if (endLetter === startLetter) return "A\n";
    const startCharCode = startLetter.charCodeAt(0);
    const endCharCode = endLetter.charCodeAt(0);
    const numColumns = ((endCharCode - startCharCode) * 2) + 1;
    const numRows = Math.floor(numColumns / 2);
    let firstHalfDiamond = Array.from({ length: numRows + 1 }, () =>
      Array(numColumns).fill(" ")
    );
    const letterIndicies = [numRows, numRows];
    for (
      let charCode = startCharCode, rowIdx = 0;
      charCode <= endCharCode;
      charCode += 1, rowIdx += 1, letterIndicies[0] -= 1, letterIndicies[1] += 1
    ) {
      let curLetter = String.fromCharCode(charCode);

      letterIndicies.forEach((idx) => {
        firstHalfDiamond[rowIdx][idx] = curLetter;
      });
    }
    firstHalfDiamond = firstHalfDiamond.map((subArr) => subArr.join(""));
    let secondHalfDiamond = firstHalfDiamond.slice(0, -1).reverse();

    let diamond = [...firstHalfDiamond, ...secondHalfDiamond].join("\n");
    return diamond + "\n";
  }
}

console.log(Diamond.makeDiamond("c"));

/*
PEDAC:
Understand the Problem:
- function that

DSA:
- Algo:
  - Loop until destination letter
    - add padding to each line.
      - left padding: starts at distance to destination letter - 1 and
        decrements to 0;
      - padding between letters: starts at 0 and increments to
        distanceBetweenLetters

*/

module.exports = Diamond;
