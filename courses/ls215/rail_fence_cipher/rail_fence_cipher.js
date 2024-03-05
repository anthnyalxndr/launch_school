/*
P.I.encode.str
  .type: str
  .rangeOfValues: any char
  .wrongDataType
  .null/Undefined

P.O.encode.str
  .type: str
  .rangeOfValues: any char

P.Rules.encode
- str encoded across a sets of "rails"
- str chars are placed across each set of rails 1 at a time, incrementing the
rail the char is placed on by 1 with each char.
- The set number which the char is placed on increments from the first set to the
last and then back to the first one set at a time.
- The encoded str is created by concatenating the chars of each set starting
with set 1 until the last set
  - Ex: 'abcde', 3 -> a   e -> aebdc
                       b d
                        c


P.Definitions

DSA.D

DSA.A.encode
- create map with separate str for each set of rails. key str's by index (0 - countOfSets - 1)
- Loop over input str, keep track of the current rail and idx while looping
  - concat curChar with set key'd by index.
  - keep track of whether setNum should decrement or increment based on curSet#
    - setIncrement = 1
    - if (set# === setCount -1 || set# === 0)  setIncrement = - (setIncrement)
    - set# = set# + setIncrement
    - set#[idx] = char
- return a concatenation of each set# in order of their keys
  - for (let set# = 0; set# < countOfSets; set#++) {
    encoded += setMap[set#]
  }

DSA.A.Decode
- Initialize the following
  - journeyLength: railCount + railCount - 2;
  - journeyCount: Math.floor(str.length / journeyLength);
  - remainingSteps: str.length % journeyLength;
  - setMap: new Map();
- Init set map
  - iterate 0 - railCount - 1;
  - initialize to {
    str: '', 
    startIdx: journeyCount * setNum === 0 || setNum === railCount - 1 ? 2 : 1
  };
- Adjust start idx
  - iterate over remainingSteps | curSet = set0
    - add 1 to startIdx for current set
    - curSet = setNum + 1;

- iterate and reconstruct decoded str | while idx < set2.startIdx
  - decoded += set1[startIdx + idx] + set2[startIdx + idx] ...


*/



class RailFenceCipher {

  static encode(str, railCount) {
    let cycleLength = this.getCycleLength(railCount);
    const middleOfCycle = cycleLength / 2;
    const rails = (new Array(railCount)).fill('');

    for (let idx = 0; idx < str.length; idx++) {
      let railNum = this.getRailNum(railCount, idx);
      rails[railNum] += str[idx];
    }

    return rails.join('');
  }

  static getCycleLength(railCount) {
    return railCount + railCount - 2;

  }

  static getRailNum(railCount, idx) {
    let cycleLength = this.getCycleLength(railCount);
    if (railCount < 2) return 0;
    const adjustedIdx = idx % cycleLength;
    const middleOfCycle = Math.floor(cycleLength / 2);
    return -Math.abs(middleOfCycle - adjustedIdx) + middleOfCycle;
  }

  static getEncodedIdx(str, railCount) {
    let cycleLength = this.getCycleLength(railCount);
    const rails = Array.from(new Array(railCount),() => new Array(railCount));

    for (let idx = 0; idx < str.length; idx++) {
      let railNum = this.getRailNum(railCount, idx)
      rails[railNum].push(idx);
    }

    return rails.flat();

  }

  static decode(str, railCount) {
    let decoded = new Array(str.length);

    let encodedIndices = this.getEncodedIdx(str, railCount);

    for (let idx = 0; idx < encodedIndices.length; idx++) {
      let eIdx = encodedIndices[idx];
      decoded[eIdx] = str[idx];
    }

    return decoded.join('');
    
  }
}

const testCases = [
  {
    input: 'str: One rail, only one rail | railCount: 1',
    get output() { return RailFenceCipher.encode('One rail, only one rail', 1) },
    answer: 'One rail, only one rail',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }

  },
  {
    input: `RailFenceCipher.encode('', 4)`,
    get output() { return RailFenceCipher.encode('', 4) },
    answer: '',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  {
    input: `RailFenceCipher.encode('XOXOXOXOXOXOXOXOXO', 2)`,
    get output() { return RailFenceCipher.encode('XOXOXOXOXOXOXOXOXO', 2) },
    answer: 'XXXXXXXXXOOOOOOOOO',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  {
    input: `RailFenceCipher.encode('WEAREDISCOVEREDFLEEATONCE', 3)`,
    get output() { return RailFenceCipher.encode('WEAREDISCOVEREDFLEEATONCE', 3) },
    answer: 'WECRLTEERDSOEEFEAOCAIVDEN',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }

  },
  {
    input: `RailFenceCipher.encode('EXERCISES', 4)`,
    get output() { return RailFenceCipher.encode('EXERCISES', 4) },
    answer: 'ESXIEECSR',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  {
    input: `RailFenceCipher.encode('More rails than letters', 24)`,
    get output() { return RailFenceCipher.encode('More rails than letters', 24) },
    answer: 'More rails than letters',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  {
    input: `RailFenceCipher.decode('', 4)`,
    get output() { return RailFenceCipher.decode('', 4) },
    answer: '',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  {
    input: `RailFenceCipher.decode('ABCDEFGHIJKLMNOP', 1)`,
    get output() { return RailFenceCipher.decode('ABCDEFGHIJKLMNOP', 1) },
    answer: 'ABCDEFGHIJKLMNOP',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  {
    input: `RailFenceCipher.decode('XXXXXXXXXOOOOOOOOO', 2)`,
    get output() { return RailFenceCipher.decode('XXXXXXXXXOOOOOOOOO', 2) },
    answer: 'XOXOXOXOXOXOXOXOXO',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
  { // len: 22 | 6[0], 11[6], 5[17]  | 22 ceil 3 -> 8
    input: `RailFenceCipher.decode('TEITELHDVLSNHDTISEIIEA', 3)`,
    get output() { return RailFenceCipher.decode('TEITELHDVLSNHDTISEIIEA', 3) },
    answer: 'THEDEVILISINTHEDETAILS',
    get result() { return this.output === this.answer ? 'Pass' : 'Fail' }
  },
];

testCases.slice(0).forEach(testCase => {
  const { input, output, answer, result } = testCase;
  console.log(`- Input: ${input}`);
  console.log(`- Output: ${output}`);
  console.log(`- Answer: ${answer}`);
  console.log(`- Result: ${result}`);
  console.log('');
});
