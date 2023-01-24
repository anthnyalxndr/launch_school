/**
 * Build a program that logs when the user will retire and
 * how many more years the user has to work until retirement.
 */

// Create a readlineSync object to get user input.
const readlineSync = require('readline-sync');

let age = Number(readlineSync.question('What is your age? '));
let retirementYear = Number(readlineSync.question('At what age would you like to retire? '));
let yearsUntilRetirement = retirementYear - age;
const today = new Date();
const year = today.getFullYear();
console.log(`It's ${year}. You will retire in ${year + yearsUntilRetirement}.`);
console.log(`You have only ${yearsUntilRetirement} years of work to go!`);

/**
 * Examples:
 *
 * What is your age? 30
 * At what age would you like to retire? 70
 *
 * It's 2017. You will retire in 2057.
 * You have only 40 years of work to go!
 */
