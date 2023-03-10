/**
 * Write a function that takes a string consisting of zero or more space
 * separated words and returns an object that shows the number of words of
 * different sizes.
 * Words consist of any sequence of non-space characters.
 */

function wordSizes(spaceDelimitedWords) {
  // Initialize an empty object to be returned later.
  let wordLengthCounts = {};

  // Letter Counters Part 2 problem: Replace all non-alphabetic
  // characters(excluding spaces) with a blanks string so that
  // only alphabetic characters are considered when counting word
  // length.
  spaceDelimitedWords = spaceDelimitedWords.replace(/[^a-z\s]/gi, '');
  console.log({spaceDelimitedWords});

  let words = spaceDelimitedWords.split(' ');

  for (let idx = 0; idx < words.length; idx += 1) {
    if (words[idx].length === 0) continue;
    wordLengthCounts[words[idx].length] =
      (wordLengthCounts[words[idx].length])
        ? wordLengthCounts[words[idx].length] + 1 : 1;
  }
  return wordLengthCounts;
}

// Test Cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


/**
 * Modify the wordSizes function from the previous exercise to exclude
 * non-letters when determining word size. For instance, the word size
 * of "it's" is 3, not 4.
 *
 * Algorithm:
 * - String.prototype.replace
 *    - regex: /![a-z\s]/gi
 * - Loop over each character in each string and use if logic to see
 *   which characters are non alphanumeric.
 */
