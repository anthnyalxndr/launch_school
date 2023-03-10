/**
 * Build a program that randomly generates Teddy's age, and logs it to the
 * console.
 * Have the age be a random number between 20 and 120 (inclusive).
 */

function logAge(minAge, maxAge) {
  return Math.floor((Math.random() * (maxAge - minAge + 1)) + minAge);
}
const age = logAge(20, 120);

console.log(`Teddy is ${age} years old!`);
