/**
 * Create a simple madlib program that prompts for a noun, a verb,
 * an adverb, and an adjective, and injects them into a story that you create.
 */

// Create a readlineSync object to get user input.
const readlineSync = require('readline-sync');

let adjective = readlineSync.question('Enter an adjective: ');
let noun = readlineSync.question('Enter a noun: ');
let adverb = readlineSync.question('Enter an adverb: ');
let verb = readlineSync.question('Enter a verb: ');

console.log(`The ${adjective} ${noun} ${adverb} ${verb} at midnight`);

// Examples
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.
