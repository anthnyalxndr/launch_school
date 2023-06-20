/* eslint-disable no-tabs */
/*
Description:
Write a program that, given a word, computes the Scrabble score for that word.

Letter Values

You'll need the following tile scores:

Letter	                        Value
A, E, I, O, U, L, N, R, S, T	  1
D, G	                          2
B, C, M, P	                    3
F, H, V, W, Y	                  4
K	                              5
J, X	                          8
Q, Z	                          10


How to Score

Sum the values of all the tiles used in each word. For instance, lets consider
the word CABBAGE which has the following letters and point values:

3 points for C
1 point for each A (there are two)
3 points for B (there are two)
2 points for G
1 point for E

PEDAC:
- Algorithm
  - Loop over each letter in word and add to running score during loop
*/

"use strict";

class Scrabble {
  constructor(word) {
    this.word = word ?? '';
  }
  score() {
    let totalWordScore = 0;
    for (let idx = 0; idx < this.word.length; idx++) {
      let currentLetter = this.word[idx].toUpperCase();
      let currentLetterScore = Scrabble.LETTER_SCORES[currentLetter] ?? 0;
      totalWordScore += currentLetterScore;
    }
    return totalWordScore;
  }
  static score(word) {
    let totalWordScore = 0;
    for (let idx = 0; idx < word.length; idx++) {
      let currentLetter = word[idx].toUpperCase();
      let currentLetterScore = Scrabble.LETTER_SCORES[currentLetter] ?? 0;
      totalWordScore += currentLetterScore;
    }
    return totalWordScore;

  }
  static LETTER_SCORES = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
}

module.exports = Scrabble;
