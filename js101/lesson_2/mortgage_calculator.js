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
const invalidInput = input => {
  return input <= 0 || Number.isNaN(input);
};

while (true) {
  console.log('Welcome to the Monthly Mortgage Payment Calculator.');

  console.log('\nInput the APR of your mortgage in decimal format (.02, .05, etc.):');

  /**
   * The APR entered by the user.
   * @type{number}
   */
  let apr = Number(rlSync.question().trim());

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (invalidInput(apr)) {
    console.log('\nInput a valid APR:');
    apr = Number(rlSync.question().trim());
  }
  /**
   * Transforms user-inputted APR to a monthly interest rate.
   * @type {number}
   */
  let monthlyInterest = apr / 12;

  console.log('\nInput the duration of your mortgage in months:');

  /**
   * The duration of the loan in months.
   * @type {number}
   */
  let loanDuration = parseInt(rlSync.question().trim(), 10);

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (invalidInput(loanDuration)) {
    console.log('\nInput a valid loan duration:');
    loanDuration = parseInt(rlSync.question().trim(), 10);
  }

  console.log('\nInput the total dollar amount (USD) of your mortgage:');

  /**
   * The amount of the loan in USD.
   * @type {number}
   */
  let loanAmount = Number(rlSync.question().trim());

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (invalidInput(loanAmount)) {
    console.log('\nInput a valid total loan amount:');
    loanAmount = Number(rlSync.question().trim());
  }

  /**
   * The monthly payment of the user's mortgage.
   * @type {number}
   */
  let monthlyPayment = loanAmount * (monthlyInterest
    / (1 - Math.pow((1 + monthlyInterest), (-loanDuration))));

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
    console.log('\nPlease input a valid answer (yes / no):');
    again = rlSync.question().trim().toLowerCase();
  }

  // If the user doesn't want to calculate another mortgage payment end the
  // program.
  if (again !== 'yes') break;
}
