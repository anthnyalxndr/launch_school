/**
 * Creates a readline-sync object to get user input later on.
 * @type {Object}
 */
const rlSync = require('readline-sync');

/**
 * Defines a function that returns false if the user input is valid and true
 * otherwise.
 * @param {number} input User input that's been coerced to a number.
 * @returns {boolean}
 */
const isValidInput = input => {
  input = Number(input);
  return input <= 0 || Number.isNaN(input);
};

while (true) {
  console.log('\nWelcome to the Monthly Mortgage Payment Calculator.');

  console.log('\nInput the APR of your mortgage in decimal format (.02, .05, etc.):');

  /**
   * The APR entered by the user.
   * @type{number}
   */
  let apr = rlSync.question().trim();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (isValidInput(apr) || Number(apr) >= 1) {
    console.log(`\nError: ${apr} is an invalid APR.`);
    console.log('Please input a valid APR.');
    console.log('Example: For a 2 % APR input .02.');
    apr = rlSync.question().trim();
  }
  /**
   * Transforms user-inputted APR to a monthly interest rate.
   * @type {number}
   */
  let monthlyInterest = Number(apr) / 12;

  console.log('\nInput the duration of your mortgage in months:');

  /**
   * The duration of the loan in months.
   * @type {number}
   */
  let loanDuration = rlSync.question().trim();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (isValidInput(parseInt(loanDuration, 10))) {
    console.log(`\nError: ${loanDuration} is an invalid loan duration.`);
    console.log('\nPlease input a valid loan duration.');
    console.log('Example: For a 30 year mortgage input 360(30 x 12 = 360 months).');
    loanDuration = rlSync.question().trim();
  }

  console.log('\nInput the total dollar amount (USD) of your mortgage:');

  /**
   * The amount of the loan in USD.
   * @type {number}
   */
  let loanAmount = rlSync.question().trim();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (isValidInput(loanAmount)) {
    console.log(`\nError: ${loanAmount} is an invalid total loan amount.`);
    console.log('Please input a valid total loan amount.');
    console.log('Example: A for a $500, 000 mortgage enter 500000.');
    loanAmount = rlSync.question().trim();
  }

  /**
   * The monthly payment of the user's mortgage.
   * @type {number}
   */
  let monthlyPayment = Number(loanAmount) * (monthlyInterest
    / (1 - Math.pow((1 + monthlyInterest), (-parseInt(loanDuration, 10)))));

  console.log('\nYour monthly payment is: $' + monthlyPayment.toFixed(2));

  console.log('\nWould you like to calculate another monthly payment? (yes / no)');

  /**
   * Indicates whether the user would like to calculate another monthly payment.
   * @type {string}
   */
  let again = rlSync.question().trim().toLowerCase();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (again !== 'yes' && again !== 'no') {
    console.log(`\nError: ${again} is an invalid answer.\nPlease input a valid answer (yes / no).`);
    again = rlSync.question().trim().toLowerCase();
  }

  // If the user doesn't want to calculate another mortgage payment end the
  // program.
  if (again !== 'yes') break;
}
