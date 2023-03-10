/**
 * Write a function that returns true if its integer argument is palindromic,
 * or false otherwise. A palindromic number reads the same forwards and
 * backwards.
 */

// Purposely making this hard and trying to take a similar approach to what
// you'd do with a string.
// It'd still be easier to just convert the num to a string right away and
// take the string approach.
function isPalindromicNumber(num) {
  let totalDigits = Math.floor(Math.log10(num)) + 1;
  let reps = Math.ceil(totalDigits / 2);
  let reverse = [];

  for (let rep = 0; rep < reps; rep += 1) {
    reverse.push(num % 10);
    if (Math.floor(Math.log10(num)) + 1 > reps) {
      num = Math.floor(num / 10);
    }
  }
  if (Number(reverse.join('')) === num) return true;
  else return false;

}

// Examples
console.log(isPalindromicNumber(34543) === true);        // true
console.log(isPalindromicNumber(123210) === false);       // true
console.log(isPalindromicNumber(22) === true);           // true
console.log(isPalindromicNumber(5) === true);            // true
