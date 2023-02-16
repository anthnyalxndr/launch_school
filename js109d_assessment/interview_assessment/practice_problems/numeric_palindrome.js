function validInput(startingNum, countOfPalindromes) {
  let condition1 = startingNum > 0 && typeof startingNum === "number";
  let condition2 =
    countOfPalindromes > 0 && typeof countOfPalindromes === "number";
  return !condition1 && !condition2;
}

// Using built-in methods
// function isPalindrome(num) {
//   if (num < 11) return false;
//   let reverse = String(num).split("").reverse().join("");
//   return String(num) === reverse;
// }

// Using 2 pointer strategy
function isPalindrome(num) {
  // Guard clause. Palindromes don't start until 11.
  if (num < 11) return false;

  // Coerce our num arg to a string, so we can easily
  // loop over each digit in our number via indices.
  let numString = String(num);
  let front = 0;
  let back = String(num).length - 1;

  // Increment / Decrement two pointers at each end of the array
  // toward the middle of the array until we reach the middle.
  while (front < back) {
    if (numString[front] === numString[back]) {
      front += 1;
      back -= 1;
      continue;
      // If front doesn't equal back, we know our num isn't palindromic.
      // Ex: num = 1211 | [1] 2 1 [1] -> 1 [2] [1] 1 -> false
    } else return false;
  }
  return true;
}

function distanceToNext(curNum) {
  // Initialize end to current number so that if the
  // current number is palindromic we don't increment.
  let end = curNum;

  // If end isn't palindromic increment end until it is.
  while (!isPalindrome(end)) {
    end += 1;
  }
  // Return the distance between curNum and the next palindrome.
  return end - curNum;
}

function numericPalindrome(startingNum, countOfPalindromes) {
  // Guard clause
  if (validInput(startingNum, countOfPalindromes)) return "Not Valid";

  // Initialize result array to hold palindromes
  let result = [];

  // Initialize a current number variable to keep track of the
  // current number being evaluated.
  let curNum = startingNum;

  // Loop while our result array's length is less
  // than the countOfPalindrome's we want to find.
  while (result.length < countOfPalindromes) {
    curNum += distanceToNext(curNum);
    result.push(curNum);
    // Increment curNum so that distanceToNext doesn't
    // return 0 infinitely once we find our first palindrome.
    curNum += 1;
  }

  return result;
}

console.log(numericPalindrome(1, 4));
// console.log(validInput(-1));
