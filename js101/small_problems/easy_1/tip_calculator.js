
// You can ignore input validation and assume that the user will enter numbers.
// Create a readline-sync object to allow for prompting
const readlineSync = require('readline-sync');

// Prompt for a bill amount.
console.log('What\'s the total amount of the bill pre-tip?');
const billAmount = readlineSync.question();

// Prompt for a tip rate.
console.log('\nWhat percentage would you like to tip?');
const tipPercentage = +readlineSync.question() / 100;

// Compute the tip.
const tipAmount = billAmount * tipPercentage;

// Compute the post-bill tip.
const grandTotal = billAmount + tipAmount;

// Log both the tip and the total amount of the bill to the console.
console.log(`\nThe bill is ${grandTotal} and a ${tipPercentage * 100}% tip comes out to $${tipAmount.toFixed(2)}`);
