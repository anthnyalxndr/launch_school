/* eslint-disable no-loop-func */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
"use strict";

class RomanNumeral {
  constructor(integer) {
    this.integer = integer;
  }
  static map = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  getNumeral(num) {
    if (RomanNumeral.map[num]) return RomanNumeral.map[num];
    let curNum = num;
    let mapNums = Object.keys(RomanNumeral.map).map(
      (key) => +key).sort((a, b) => a - b);
    let result = "";
    while (curNum > 0) {
      let [nearestNum, nearestNumeral] = mapNums.reduce(
        (acc, num, idx, arr) => {
          if (num > curNum && acc[0] === 1000) {
            let lastNum = arr[idx - 1];
            acc = [lastNum, RomanNumeral.map[lastNum]];
          }
          return acc;
        },
        [1000, "M"]
      );
      result += nearestNumeral;
      curNum -= nearestNum;
    }
    return result;
  }
  toRoman() {
    /*
    Algorithm
    - Initialize a roman, numString, & variables to keep track of current 10
      exponent.
    - Loop over input number from back to front
      - See if the current tens place number has an exact match
        - If yes, add the match to the roman.
        - If no,
          - map to a numeral by looping over num
            - continuously subtract the nearest number in the map from the
              current number while simultaneously adding the current numeral.
        - Update current numstring to have 0s where numbers were already
          accounted for.
    */
    let roman = "";
    let intStr = String(this.integer);
    for (
      let idx = intStr.length - 1, currentExponent = 0;
      idx >= 0;
      idx -= 1, currentExponent += 1
    ) {
      let curDigit = +intStr[idx];
      if (curDigit === 0) continue;
      let curNum = curDigit * (10 ** currentExponent);
      let curNumeral = this.getNumeral(curNum);
      roman = curNumeral + roman;
    }

    return roman;
  }
}

module.exports = RomanNumeral;
