/**
 * Create a function that takes two arguments, multiplies them together,
 * and returns the result.
 */

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}


// Examples / Test Cases
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
