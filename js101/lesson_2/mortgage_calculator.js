const rlSync = require('readline-sync');

// Defines a function that returns false if the user input is valid and true
// otherwise.
const invalidInput = input => {
  return input <= 0 || Number.isNaN(input);
};
while (true) {
  console.log('Welcome to the Monthly Mortgage Payment Calculator.');

  console.log('\nInput the APR of your mortgage in decimal format (.02, .05, etc.):');
  let apr = Number(rlSync.question().trim());

  while (invalidInput(apr)) {
    console.log('\nInput a valid APR:');
    apr = Number(rlSync.question().trim());
  }

  let monthlyInterest = apr / 12;

  console.log('\nInput the duration of your mortgage in months:');
  let loanDuration = parseInt(rlSync.question().trim(), 10);

  while (invalidInput(loanDuration)) {
    console.log('\nInput a valid loan duration:');
    loanDuration = parseInt(rlSync.question().trim(), 10);
  }

  console.log('\nInput the total dollar amount of your mortgage:');
  let loanAmount = Number(rlSync.question().trim());

  while (invalidInput(loanAmount)) {
    console.log('\nInput a valid total loan amount:');
    loanAmount = Number(rlSync.question().trim());
  }

  let monthlyPayment = loanAmount * (monthlyInterest
    / (1 - Math.pow((1 + monthlyInterest), (-loanDuration))));

  console.log('\nYour monthly payment is: $' + monthlyPayment.toFixed(2));

  console.log('\nWould you like to calculate another monthly payment? (yes / no)');
  let again = rlSync.question().trim().toLowerCase();
  while (again !== 'yes' && again !== 'no') {
    console.log('\nPlease input a valid answer (yes / no):');
    again = rlSync.question().trim().toLowerCase();
  }

  if (again !== 'yes') break;
}
