/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-statements */
/* eslint-disable no-lonely-if */
/* eslint-disable max-depth */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/*
You are given a list of numbers in a "short-hand" range where only the
significant part of the next number is written because we know the numbers are
always increasing (ex. "1, 3, 7, 2, 4, 1" represents `[1, 3, 7, 12, 14, 21]`).
Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3,
1:2", "1..3, 1..2" represent the same numbers `[1, 2, 3, 11, 12]`). Range limits
are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: `["-", ":", ".."]`

P.I.numStr

P.O.completeList

P.Rules

P.Definitions

DSA.formatRange

DSA.calculateCompleteNum
- DSA.calculateCompleteDigit
- DSA.handleZeros

*/


class Num extends String {
  constructor (str, parent) {
    super(str);
    this.parent = parent;
  }

  // eslint-disable-next-line max-lines-per-function

  get idx() {
    return this.parent.indexOf(this);
  }

  get num() {
    return +this;
  }

  getDigitSum(num, idx) {
    let curDigit = +num[idx];
    let curLastDigit = +num[idx - 1];
    let sum = curDigit * 10 ** (num.length - idx - 1);
    let curDistanceFromEnd = this.length - 1 - idx;
    let prevLength = this.prev.complete.length;
    let prevEndIdx = prevLength - 1;
    let prevIdx = prevEndIdx - curDistanceFromEnd;
    let prevDigit = +this.prev.complete[prevIdx];
    if (curDigit <= prevDigit && curLastDigit !== 0) {
      sum += 10 ** (num.length - idx);
    }
    if (+this === 21) {
      console.log();
    }

    return sum;
  }

  allDigitsBigger(num) {
    let isBigger = true;
    for (let idx = 0; idx < num.length; idx++) {
      let cur = this[idx];
      let prev = this.prev[idx];
      if (+cur <= +prev) isBigger = false;
    }
    return isBigger;

  }

  loopOverMissingNums() {
    let sum = 0;
    let missingNums;
    let curLength = this.length;
    let prevLength = this.prev.complete.length;
    let difference = Math.abs(curLength - prevLength);

    if (prevLength > curLength) {
      missingNums = this.prev.complete.slice(0, difference);
    } else {
      missingNums = '1' + this.slice(0, difference);
    }
    if (this.toString() === '02') {
      console.log();
    }
    for (let idx = missingNums.length - 1; idx >= 0; idx--) {
      let curMissingNum = +missingNums[idx];

      let pow10 = prevLength > curLength
        ? prevLength - idx - 1
        : curLength - idx - 1;
      
      sum += curMissingNum * 10 ** pow10;
    }

    return sum;
  }

  lengthAdjustment() {
    let adjustment = 0;
    let prevLength = this.prev.complete.length;
    let curLength = this.length;
    let difference = Math.abs(curLength - prevLength);

    if (difference !== 0) {
      adjustment += this.loopOverMissingNums();
    // eslint-disable-next-line max-len
    } else if (difference === 0 && curLength > 1 && !this.allDigitsBigger(this)) {
      adjustment += 10 ** (this.length);
    }

    return adjustment;
  }

  getAllDigitsSum() {
    let sum = 0;
    if (this.prev) {
      let minLength = Math.min(this.length, this.prev.complete.length);
      let endIdx = this.length - 1;
      for (let idx = endIdx; idx >= this.length - minLength; idx--) {
        sum += this.getDigitSum(this, idx);
        if (this.toString() === '02') {
          console.log();
        }
      }
      if (+this.prev === 1 && +this === 11) {
        console.log();
      }
      sum += this.lengthAdjustment();
      if (this.toString() === '02') {
        console.log();
      }
    } else {
      sum += +this;
    }

    return sum;
  }

  _complete;
  get complete() {
    // Current implementation causing each calculation of complete to recurse to
    // the first element in the list. Consider changing this, so complete values
    // are hard coded.
    if (!this._complete) {

      this._complete =  `${this.getAllDigitsSum()}`;
    }

    return this._complete;
    
  }


  get prev() { return this.parent[this.idx - 1] }

  get next() { return this.parent[this.idx + 1] }


}

class Range extends Array {
  constructor (rangeStr) {
    super();
    let arr = rangeStr.match(/\d+/g);
    this.bounds = new Array(arr.length);
    for (let idx = 0; idx < arr.length; idx++) {
      this.bounds[idx] = new Num(arr[idx], this.bounds);
    }
    let startNum = +this.bounds[0].complete;
    let endNum = +this.bounds[arr.length - 1].complete;
    let rangeLength = endNum - startNum;
    let curNum = this.bounds[0];
    for (let idx = 0; idx <= rangeLength; idx++) {
      this[idx] = curNum;
      let nextNum = /* +curNum === 9 ? 0 : */ +curNum + 1;
      curNum = new Num(`${nextNum}`, this);
    }
  }

  toString() {
    return this.join(', ');
  }

  static isRange(str) {
    return /\D/.test(str);
  }
}

class NumString extends Array {
  constructor (numStr) {
    super();
    let elements = numStr.split(', ');


    for (let idx = 0; idx < elements.length; idx++) {
      let element = elements[idx];

      if (Range.isRange(element)) {
        let range = new Range(element);
        for (let rangeIdx = 0; rangeIdx < range.length; rangeIdx++) {
          const rangeElement = range[rangeIdx];
          this[idx] = range[new Num(+rangeElement, this)];
          idx++;
        }
      } else {
        this[idx] = new Num(element, this);
      }
    }

  }
  toString() {
    return this.split(', ');
  }
}


let numTestCases = [
  {
    name: 'range issue',
    input: "104, 2",
    get output() { return getCompleteStr(this.input) },
    answer: '104, 112',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail'}
  },
  {
    name: 'Cur longer than prev',
    input: "1, 11",
    get output() { return getCompleteStr(this.input) },
    answer: '1, 121',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail'}
  },
  {
    name: 'prev longer than cur',
    input: "11, 1",
    get output() { return getCompleteStr(this.input) },
    answer: '11, 21',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail'}
  },
  {
    name: 'Single Digit Num Str',
    input: "1, 3, 7, 2, 4, 1",
    get output() { return getCompleteStr(this.input) },
    answer: '1, 3, 7, 12, 14, 21',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail'}
  },
  {
    name: 'Single Digit Num Str w/ Single 0',
    input: "1, 0, 7, 2, 4, 1",
    get output() { return getCompleteStr(this.input) },
    answer: '1, 10, 17, 22, 24, 31',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail'}
  },
  {
    name: '2nd number is Same number with 2 digits',
    input: "1, 21, 2",
    get output() { return getCompleteStr(this.input) },
    answer: '1, 131, 132',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' },
  },
  {
    name: '1st number is Same number with 2 digits',
    input: "11, 0, 2",
    get output() { return getCompleteStr(this.input) },
    answer: '11, 20, 22',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail'}
  }


];

function getCompleteStr(digitStr) {
  let completeList = digitStr.split(', ');

  for (let idx = 0; idx < completeList.length; idx++) {
    completeList[idx] = new Num(completeList[idx], completeList);
  }

  let completeStr = completeList.map(({ complete }) => +complete).join(', ');
  
  return completeStr;
}

function testNum(testCases) {
  testCases.forEach(testCase => {
    const { name, input, output, answer, result } = testCase;

    console.log(`${name}:`);
    console.log(`- Input: ${input}`);
    console.log(`- Output: ${output}`);
    console.log(`- Answer: ${answer}`);
    console.log(`- Result: ${result}`);
    if (testCase.nextSteps) {
      console.log(`- Next Steps: ${testCase.nextSteps}`);
    }
    console.log('');
  });

}

function testRange() {
  let testCases = [
    {
      input: "104, 2",
      get output() { return (new Range(this.input)).toString() },
      answer: '104, 105, 106, 107, 108, 109, 110, 111, 112',
      get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
    },
    {
      input: "104, 02",
      get output() { return (new Range(this.input)).toString() },
      answer: '104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202',
      get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
    },
    {
      input: "1:5:2",
      get output() { return (new Range(this.input)).toString() },
      answer: "1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12",
      get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
    },
    {
      input: "64:11",
      get output() { return (new Range(this.input)).toString() },
      answer: "1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12",
      get result() { return this.output === this.answer ? 'Pass' : 'Fail' }

    }
  ];

  testCases.slice(-1).forEach(testCase => {
    const { input, output, answer, result } = testCase;

    console.log(`- Input: ${input}`);
    console.log(`- Output: ${output}`);
    console.log(`- Answer: ${answer}`);
    console.log(`- Result: ${result}`);
    console.log('');
  });

}
function listCompleteNums(str) {
  return (new NumString(str)).toString();
}
// testNum(numTestCases);
testRange();
// console.log(listCompleteNums("1, 3, 7, 2, 4, 1")); //--> 1, 3, 7, 12, 14, 21
// console.log(listCompleteNums("1-3, 1-2")); //--> 1, 2, 3, 11, 12
// console.log(listCompleteNums("1:5:2")); //--> 1, 2, 3, 4, 5, 6, ... 12
// console.log(listCompleteNums("104-2")); //--> 104, 105, ... 112
// console.log(listCompleteNums("104-02")); //--> 104, 105, ... 202
// console.log(listCompleteNums("545, 64:11")); //--> 545, 564, 565, .. 611
