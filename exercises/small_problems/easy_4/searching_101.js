/**
 * Write a program that solicits six numbers from the user and logs a message
 * that describes whether the sixth number appears among the first five numbers.
 */

// Create a readlineSync object to get user input.
const readlineSync = require('readline-sync');

// Define an empty array to hold answers from the non-last question.
const answers = [];

// Define an array of proper endings for question numbers.
const endings = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

// Push answers from the 1st through last - 1 questions to the answers array.
for (let question = 1; question < 6; question += 1) {
  answers.push(Number(readlineSync.question(`Enter the ${String(question) + endings[question]} number: `)));
}

let last = Number(readlineSync.question('Enter the last number: '));

// Log whether or not the number is present in the answers from the previous
// questions.
if (answers.includes(last)) {
  console.log(`The number ${last} appears in ${answers.join()}.`);
} else {
  console.log(`The number ${last} does not appear in ${answers.join()}.`);
}


// Examples
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.
