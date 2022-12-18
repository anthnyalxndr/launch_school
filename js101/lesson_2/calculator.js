/**
 * This script creates a calculator program that can add, subtract, multiply,
 * & divide 2 numbers provided by user input.
 */


let result;

let rlSync = require('readline-sync');

const prompt = (message) => {
  console.log('=> ' + message);
};

prompt('What\'s the first number?');
let num1 = rlSync.question();
while (num1.trim() === '' || Number.isNaN(Number(num1))) {
  prompt('Please input a valid number');
  num1 = rlSync.question();
}

prompt('What\'s the second number?');
let num2 = rlSync.question();
while (num2.trim() === '' || Number.isNaN(Number(num2))) {
  prompt('Please input a valid number');
  num2 = rlSync.question();
}

prompt('What\'s the operation?\nAdd = 1\nSubract = 2\nMultiply = 3\nDivide = 4');
let operation = Number(rlSync.question());
while (![1, 2, 3, 4].includes(operation)) {
  prompt('Please input a valid operation number');
  operation = Number(rlSync.question());
}

/**
 * Now that each number has been validated, coerce each one to a number to avoid
 * repetitive coercion below.
 */
num1 = Number(num1);
num2 = Number(num2);

/**
 * Perform the 1 of 4 operations depending on what the user chose.
 */
switch (operation) {
  case 1:
    result = num1 + num2;
    break;
  case 2:
    result = num1 - num2;
    break;
  case 3:
    result = num1 * num2;
    break;
  default:
    result = num1 / num2;
}

prompt('Result = ' + result);
