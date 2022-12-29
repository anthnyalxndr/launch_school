/* eslint-disable id-length */
// Logs the consecutive sum to the console.
function logSum(num) {
  for (let i = num - 1; i > 0; i -= 1) {
    num += i;
  }
  console.log(`\nThe consecutive sum is ${num}.`);
}

// Logs the consecutive product to the console.
function logProduct(num) {
  for (let i = num - 1; i > 0; i -= 1) {
    num *= i;
  }
  console.log(`\nThe consecutive product is ${num}.`);
}

// Create a readlineSync object to get user input.
const readlineSync = require('readline-sync');

// Ask the user to enter an integer greater than 0.
console.log('Input an integer greater than 0.');
let num = +readlineSync.question();

// Validate user input.
while (!Number.isInteger(num) || num === 0) {
  console.log('\nPlease enter a valid integer.');
  num = +readlineSync.question();
}

// Ask whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.
console.log('\nWould you like to determine the sum or product?');
console.log('All numbers between 1 and the previously entered integer are included.');
let operation = readlineSync.question();

// Validate user input
while (!['sum', 'product'].includes(operation)) {
  console.log('\nPlease enter a valid input (sum or product)');
  operation = readlineSync.question();
}

// Compute the result and log it to the console.
if (operation === 'sum') logSum(num);
else logProduct(num);
