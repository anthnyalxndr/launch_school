/**
 * Write a function that returns true if the string passed as an argument
 * is a palindrome, or false otherwise. A palindrome reads the same forwards
 * and backwards. For this problem, the case matters and all characters matter.
 */
function isPalindrome(str) {
  // Two-pointer strategy. One for the front of the string and one for the back.
  let front = 0;
  let back = str.length - 1;

  // Loop over the string until front is less than back.
  while (front <= back) {
    if (str[front] !== str[back]) return false;
    front += 1;
    back -= 1;
  }
  return true;
}

// // Simpler version
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// Examples. Timer's placed below to compare time complexity.
// Longer version wins by a landslide because the methods in
// the simpler version are expensive.
console.time('timer');
for (let reps = 0; reps < 1000000; reps += 1) {
  isPalindrome('madam'); // === true);               // true
  isPalindrome('Madam'); // === false);               // false (case matters)
  isPalindrome("madam i'm adam"); // === false);      // false (all characters matter)
  isPalindrome('356653'); // === true);
}
console.timeEnd('timer');
