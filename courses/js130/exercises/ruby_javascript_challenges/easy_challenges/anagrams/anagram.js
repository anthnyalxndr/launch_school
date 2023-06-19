/*
Problem Description: Write a program that takes a word and a list of possible
anagrams and selects the correct sublist that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists",
"google", "inlets", and "banana", the program should return a list containing
"inlets". Please read the test suite for the exact rules of anagrams.

PEDAC:
 - Algorithm:
  - Make sure to account for invalid potential matches.
    - not the same length as our base word
    - same word as our base word
  - Make sure case isn't factored into comparison expressions

*/
'use strict';
class Anagram {
  constructor (baseWord) {
    this.baseWord = baseWord;
  }
  isAnagram(str) {
    let formattedBaseWord = this.baseWord.toLowerCase();
    let newWord = str.toLowerCase();
    if (formattedBaseWord.length !== newWord.length) return false;
    if (formattedBaseWord === newWord) return false;
    const sorted = (word) => word.split('').sort().join('');
    return sorted(formattedBaseWord) === sorted(newWord);
  }
  match(potentialAnagrams) {
    const matches = [];
    potentialAnagrams.forEach(str => {
      if (this.isAnagram(str)) matches.push(str);
    });
    return matches;
  }
}

module.exports = Anagram;
