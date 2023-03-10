/* eslint-disable max-len */
/*
Write a program that prints the longest sentence in a string based on the
number of words. Sentences may end with periods (.), exclamation points (!),
or question marks (?). You should treat any sequence of characters that are not
spaces or sentence-ending characters as a word. Thus, -- should count as a word.
Log the longest sentence and its word count to the console. Pay attention to the
expected output, and be sure you preserve the punctuation from the end of the
sentence. Note that this problem is about manipulating and processing strings.
As such, every detail about the string matters (e.g., case, punctuation, tabs,
spaces, etc.).
*/

// eslint-disable-next-line max-lines-per-function
// function longestSentence(str) {
//   // Determine longest sentence
//   // Replace sentence-ending chars with a single char and split str into
//   // an array.
//   let sentenceEndingChars = [];
//   for (let idx = 0; idx < str.length; idx++) {
//     let char = str[idx];
//     if (/[.!?]/.test(char)) sentenceEndingChars.push(char);
//   }
//   let sentences = str.split(/[.!?]/g);
//   let wordCounts = sentences.map((el) => {
//     let matches = el.trim().split(" ").length;
//     return matches;
//   });
//   let maxWordCount = Math.max(...wordCounts);
//   let sentenceIdx = wordCounts.indexOf(maxWordCount);
//   // Add back the sentence ending char to the sentence by selecting the value
//   // in sentenceEndingChars at sentenceIdx (they can use the same idx since we
//   // split our string based on sentence ending chars.)
//   let finalSentence = sentences[sentenceIdx].trim() + sentenceEndingChars[sentenceIdx];

//   // Log sentence and it's word count to console
//   console.log(finalSentence,"\n");
//   console.log(`The longest sentence has ${maxWordCount} words.`);
// }

function longestSentence(str) {
  let sentences = str.match(/\w.*?[.?!]/g);
  let longest = sentences.reduce((prev, cur) => {
    let words = cur.split(' ');
    if (words.length > prev.length) {
      prev.sentence = cur;
      prev.length = words.length;
    }
    return prev;
  }, { sentence: '', length: 0 });
  console.log(longest.sentence);
  console.log(`The longest sentence has ${longest.length} words.`);
}

// Examples
let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this.";

// eslint-disable-next-line no-unused-vars
let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

// console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

// console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

// console.log(
//   longestSentence("Where do you think you're going? What's up, Doc?")
// );
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.
