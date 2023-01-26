/*
Write a function that returns a list of all palindromic substrings of a string.
That is, each substring must consist of a sequence of characters that reads the
same forward and backward. The substrings in the returned list should be sorted
by their order of appearance in the input string. Duplicate substrings should
be included multiple times.

You may (and should) use the substrings function you wrote in the previous
exercise.

For the purpose of this exercise, you should consider all characters and pay
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
are not. In addition, assume that single characters are not palindromes.
*/

function leadingSubstrings(str) {
  return str.split('').reduce((prev, _, idx, arr) => {
    prev.push(arr.slice(0, idx + 1).join(''));
    return prev;
  }, []);
}

function substrings(str) {
  return str.split('').reduce((prev, _, idx) => {
    prev = prev.concat(leadingSubstrings(str.slice(idx, str.length)));
    return prev;
  }, []);
}

// Non manual solution using functions from previous exercises.
function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

// Helper func to reverse a string
function isPalindrome(str) {
  if (str.length === 1) return false;
  return str === str.split('').reverse().join('');
}

// Returns the starting index of a palindrome or false.
// function palindromeStart(str, idx) {
//   let option1 = str[idx] + str[idx + 1];
//   let option2 = str[idx - 1] + str[idx] + str[idx + 1];
//   if (isPalindrome(option2)) return idx - 1;
//   if (isPalindrome(option1)) return idx;
//   else return false;
// }

// Expands the current palindrome outward and pushes each subsequent palindrome
// // to the result array until expanding means we no longer have a palindrome.
// // E.g. ada => madam => -madam-
// function expandCurrentPalindrome(str, idx, result) {
//   let front = palindromeStart(str, idx);
//   let back = idx + 1;
//   while (str[front] === str[back]) {
//     let curPalindrome = str.slice(front, back + 1);
//     result.push(curPalindrome);
//     // Break if expanding our front or back index
//     // results in a falsy (i.e. out of bounds)
//     if (!str[front - 1] || !str[back + 1]) break;
//     front = (str[front - 1]) ? front - 1 : front;
//     back = (str[back + 1]) ? back + 1 : back;
//   }
// }

// // Manual solution
// function palindromes(str) {
//   // Initialize an array to hold all palindromes.
//   let result = [];
//   // Loop over every char in the string
//   for (let idx = 0; idx < str.length; idx++) {
//     // If we don't have the start of a palindrome at idx, continue to the
//     // next idx.
//     if (!palindromeStart(str, idx)) {
//       continue;
//     }
//     // Pushes the current palindrome (and any more we can create by expanding
//     // outward in the string) to our result array.
//     // E.g.ada => madam => -madam -
//     expandCurrentPalindrome(str, idx, result);
//   }
//   return result;
// }

// Examples
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
