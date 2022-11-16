const READLINE_SYNC = require('readline-sync');

const getNumber = (prompt) => Number(READLINE_SYNC.question(prompt));

const multiply = () => {
  let num1 = getNumber('Input the first number: ');
  let num2 = getNumber('Input the second number: ');;
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}
multiply();
