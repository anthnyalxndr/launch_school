// Overview: This program creates a CLI monthly mortgage payment calculator
// that dynamically outputs a monthly mortgage payment based on user input.

/**
 * Creates a readline-sync object to get user input later on.
 * @type {Object}
 */
const rlSync = require('readline-sync');

/**
 * An object containing messages to be logged to the console
 * by the calculator. Messages are defined in a separate JSON file.
 * @type {Object}
 */
const calculatorMessages = require('./mortgage_calculator_messages.json');

/**
 * The limit for a user-inputted APR. If the APR is greater than 1 the loan
 * costs more than the asset.
 * @type {number}
 */
const APR_LIMIT = 1;

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

/**
 * Requests input from the user after receiving invalid input by dynamically
 * accessing calculatorMessages properties.
 * @param {*} varName The name of the variable that caused the error.
 * @param {string} varType The type of the variable that caused the error.
 * Used for interpolation.
 * @param {string} property The name of the property to access from
 * calculatorMessages
 * @returns {string}
 */
const requestInputAgain = (varName, varType, property) => {
  return `\nError: ${varName} is an invalid ${varType}. ${property}`;
};

// Start of interface
console.log(calculatorMessages.welcome);

while (true) {
  // Request APR from the user.
  console.log(calculatorMessages.requestAPR);

  /**
   * The APR entered by the user.
   * @type {number}
   */
  let APR = rlSync.question().trim();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (isValidInput(APR) || Number(APR) >= APR_LIMIT) {
    console.log(requestInputAgain(APR, 'APR', calculatorMessages.APRError));
    APR = rlSync.question().trim();
  }
  /**
   * Transforms user-inputted APR to a monthly interest rate.
   * @type {number}
   */
  let monthlyInterest = Number(APR) / 12;

  // Request loan duration from the user.
  console.log(calculatorMessages.requestLoanDuration);

  /**
   * The duration of the loan in months.
   * @type {number}
   */
  let loanDuration = rlSync.question().trim();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (isValidInput(parseInt(loanDuration, 10))) {
    console.log(requestInputAgain(loanDuration, 'loan duration',
      calculatorMessages.loanDurationError));
    loanDuration = rlSync.question().trim();
  }

  // Request the total loan amount from the user.
  console.log(calculatorMessages.requestLoanAmount);

  /**
   * The amount of the loan in USD.
   * @type {number}
   */
  let loanAmount = rlSync.question().trim();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (isValidInput(loanAmount)) {
    console.log(requestInputAgain(loanAmount, 'loan amount', calculatorMessages.loanAmountError,
      calculatorMessages.loanAmountError));
    loanAmount = rlSync.question().trim();
  }

  /**
   * The monthly payment of the user's mortgage.
   * @type {number}
   */
  let monthlyPayment = Number(loanAmount) * (monthlyInterest
    / (1 - Math.pow((1 + monthlyInterest), (-parseInt(loanDuration, 10)))));

  // Log the final calculation (monthly payment) to the console.
  console.log('\nYour monthly payment is: $' + monthlyPayment.toFixed(2));

  // Ask the user if they'd like to repeat.
  console.log(calculatorMessages.requestRepeat);

  /**
   * Indicates whether the user would like to calculate another monthly payment.
   * @type {string}
   */
  let again = rlSync.question().trim().toLowerCase();

  // If the user's input is invalid, keep asking the user for input
  // until they input something valid.
  while (again !== 'yes' && again !== 'no') {
    console.log(requestInputAgain(again, 'answer',
      calculatorMessages.repeatError));
    again = rlSync.question().trim().toLowerCase();
  }

  // If the user doesn't want to calculate another mortgage payment end the
  // program.
  if (again !== 'yes') break;
}
