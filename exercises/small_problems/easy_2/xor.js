/**
 * Write a function named xor that takes two arguments, and returns true if
 * exactly one of its arguments is truthy, false otherwise.
 * Note that we are looking for a boolean result instead of a truthy/falsy
 * value as returned by || and &&.
 */

function xor(var1, var2) {
  if ((!var1 && var2) || (var1 && !var2)) return true;
  else return false;
}


// Examples / Test Cases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
