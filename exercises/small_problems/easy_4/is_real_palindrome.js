/**
 * Write another function that returns true if the string passed as an argument
 * is a palindrome, or false otherwise. This time, however, your function should
 * be case-insensitive, and should ignore all non-alphanumeric characters.
 * If you wish, you may simplify things by calling the isPalindrome function you
 * wrote in the previous exercise.
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

function isRealPalindrome(str) {
  // Clean the string
  let clean = str.toLowerCase().replace(/[^A-Za-z0-9]+/g, '');
  return isPalindrome(clean);
}


// Examples
console.log(isRealPalindrome('madam') === true);               // true
console.log(isRealPalindrome('Madam') === true);               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true);     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653') === true);              // true
console.log(isRealPalindrome('356a653') === true);             // true
console.log(isRealPalindrome('123ab321') === false);            // false
