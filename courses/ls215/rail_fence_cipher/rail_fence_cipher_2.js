/*
P
  .I
    .argName
     .type
     .RangeOfValues
      .collectionAttributes
        .length
        .sorted
     .EdgeCases: null/undefined, wrong data types, empty collection, sparse array,etc.

    .numberOfArgs
      - Will the program always receive n args?
      - How should the program handle additional or missing args?

  .O
   .type
   .RangeOfValues
      .collectionAttributes
        .length
        .sorted
   .EdgeCases: null/undefined, wrong data types, empty collection, sparse array,etc.

  .Definitions

  .Rules

E
- Make sure test cases cover all rules (if not add test cases)

DSA
  .D
  .A

C
- Write code in small batches that you can test.
*/


class RailFenceCipher {
  static cycleLength(railCount) {
    return (railCount >= 2) ? railCount + railCount - 2 : 1;
  }

  static adjustedIdx(idx, cycleLength) {
    return cycleLength > 1 ? idx % cycleLength : idx;
  }

  static middleOfCycle(cycleLength) {
    return cycleLength > 1 ? cycleLength / 2 : 1;
  }

  static absDifMiddle(adjustedIdx, middleOfCycle) {
    return Math.abs(adjustedIdx - middleOfCycle);
  }

  static railNum(idx, railCount) {
    const cycleLength = this.cycleLength(railCount);
    const adjustedIdx = this.adjustedIdx(idx, cycleLength);
    const middleOfCycle = this.middleOfCycle(cycleLength);
    const absDifMiddle = this.absDifMiddle(adjustedIdx, middleOfCycle);
    return railCount >= 2 ? -absDifMiddle + middleOfCycle : 0;
  }

  static railArr(railCount) {
    let arr = new Array(railCount);
    for (let idx = 0; idx < railCount; idx++) {
      arr[idx] = new Array();
    }
    return arr;
  }

  static encodedIndices(str, railCount, callback = (idx, str) => idx) {
    const railArr = this.railArr(railCount);

    for (let idx = 0; idx < str.length; idx++) {
      const railNum = this.railNum(idx, railCount);
      const rail = railArr[railNum];
      rail.push(callback(idx, str));
    }

    return railArr.flat();
  }

  static encode(str, railCount) {
    const callback = (idx, str) => str[idx];
    let encodedIndices = this.encodedIndices(str, railCount, callback);
    
    return encodedIndices.join('');

  }
  
  static decode(str, railCount) {
    let decoded = [];
    let encodedIndices = this.encodedIndices(str, railCount);
    
    encodedIndices.forEach((eIdx, idx) => decoded[eIdx] = str[idx]);

    return decoded.join('');

  }
}

const testCases = [
  {
		name: "test_encode_with_empty_string",
		answer: '',
		input: `RailFenceCipher.encode('', 4)`,
		get output() {
			return RailFenceCipher.encode('', 4);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_encode_with_one_rail",
		answer: 'One rail, only one rail',
		input: `RailFenceCipher.encode('One rail, only one rail', 1)`,
		get output() {
			return RailFenceCipher.encode('One rail, only one rail', 1);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_encode_with_two_rails",
		answer:  'XXXXXXXXXOOOOOOOOO',
		input: `RailFenceCipher.encode('XOXOXOXOXOXOXOXOXO', 2)`,
		get output() {
			return RailFenceCipher.encode('XOXOXOXOXOXOXOXOXO', 2);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_encode_with_three_rails",
		answer:  'WECRLTEERDSOEEFEAOCAIVDEN',
		input: `RailFenceCipher.encode('WEAREDISCOVEREDFLEEATONCE', 3)`,
		get output() {
			return RailFenceCipher.encode('WEAREDISCOVEREDFLEEATONCE', 3);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_encode_with__ending_in_the_middle" ,
		get result() {
			return this.answer === this.output;
		},
		answer: 'ESXIEECSR',
		input: `RailFenceCipher.encode('EXERCISES', 4)`,
		get output() {
			return RailFenceCipher.encode('EXERCISES', 4);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_encode_with_less_letters_than_rails",
		answer:  'More rails than letters',
		input: `RailFenceCipher.encode('More rails than letters', 24)`,
		get output() {
			return RailFenceCipher.encode('More rails than letters', 24);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_decode_with_empty_string",
		answer: '',
		input: `RailFenceCipher.decode('', 4)`,
		get output() {
			return RailFenceCipher.decode('', 4);
		},
		get result() {
			return this.answer === this.output;
		},
	},

  {
		name: "test_decode_with_one_rail",
		answer:  'ABCDEFGHIJKLMNOP',
		input: `RailFenceCipher.decode('ABCDEFGHIJKLMNOP', 1)`,
		get output() {
			return RailFenceCipher.decode('ABCDEFGHIJKLMNOP', 1);
		},
		get result() {
			return this.answer === this.output;
		},
	},
  {
		name: "test_decode_with_two_rails",
		answer:  'XOXOXOXOXOXOXOXOXO',
		input: `RailFenceCipher.decode('XXXXXXXXXOOOOOOOOO', 2)`,
    get output() {
      return RailFenceCipher.decode('XXXXXXXXXOOOOOOOOO', 2);
    },
		get result() {
			return this.answer === this.output;
		},
	},
  {
    name: "test_decode_with_three_rails",
    answer: 'THEDEVILISINTHEDETAILS',
    input: `RailFenceCipher.decode('TEITELHDVLSNHDTISEIIEA', 3)`,
    get output() {
      return RailFenceCipher.decode('TEITELHDVLSNHDTISEIIEA', 3);
    },
    get result() {
      return this.answer === this.output;
    },
  },
];

testCases.forEach(tcase => {
  let propArray = ['name', 'answer', 'input', 'output', 'result'];
  propArray.forEach(prop => console.log(`${prop}: ${tcase[prop]}`));
});
