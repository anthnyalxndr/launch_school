/**
 * Examples / Test Cases
 * What is your name? Bob
 * Hello Bob.
 *
 * What is your name? Bob!
 * HELLO BOB. WHY ARE WE SCREAMING?
 */

// Create a readlineSync object to get user input.
const readlineSync = require('readline-sync');

// Define the user's name via input
let name = readlineSync.question('What is your name? ');

// If the last letter is an !, change the message. Otherwise, say hello.
if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.toUpperCase().replace('!', '')}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
