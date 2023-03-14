// Stats:
// Solved in 10 minutes but had to go back and account for rules that I forgot
// about. Good lesson to go back and check your PEDAC frequently throughout
// the problem.

/*
A collection of spelling blocks has two letters per block, as shown in this
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that
do not use both letters from any given block. You can also only use each block
once.

Write a function that takes a word string as an argument and returns true if
the word can be spelled using the set of blocks, false otherwise. You can
consider the letters to be case-insensitive when you apply the rules.
*/
const BLOCKS = {
  B: "O",
  X: "K",
  D: "Q",
  C: "P",
  N: "A",
  G: "T",
  R: "E",
  F: "S",
  J: "W",
  H: "U",
  V: "I",
  L: "Y",
  Z: "M",
};
function isBlockWord(word) {
  let capsWord = word.toUpperCase();
  for (let blockLetter1 in BLOCKS) {
    let blockLetter2 = BLOCKS[blockLetter1];
    if (word.includes(blockLetter1) && word.includes(blockLetter2)) {
      return false;
    }
    let regexBlockLetter1 = new RegExp(`${blockLetter1}`, 'gi');
    let regexBlockLetter2 = new RegExp(`${blockLetter2}`, 'gi');
    let countBlockLetter1 = capsWord.match(regexBlockLetter1) ?? [];
    let countBlockLetter2 = capsWord.match(regexBlockLetter2) ?? [];
    if (countBlockLetter1.length > 1 ||
      countBlockLetter2.length > 1) {
      return false;
    }
  }
  return true;
}
// Examples:
console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true

function pedac() {
  function understandTheProblem() {
    /*
    I:
    O:
    Concepts:
    Rules:
    - spelling blocks have two letters per block
    - words you can spell with the blocks limited to only those words that do
    not use both letters from any given block
    - You can also only use each block once.
    Questions:
  */
  }

  function DSA() {
    /*
    Algorithm:
    - Loop over blocks and test if word contains either
      letter in the block.
      - If word contains a block letter, test if the word
        contains the other block letter.
        - If it does, return false.
      - If after looping through all blocks no illegal letters are contained
        in word, return true
    Data Structures:
  */
  }

  function _(funcArr) {
    for (let func of funcArr) func();
  }
  _([understandTheProblem, DSA]);
}
pedac();
