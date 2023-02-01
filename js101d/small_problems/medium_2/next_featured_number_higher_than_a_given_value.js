/*
A featured number (something unique to this exercise) is an odd number that is
a multiple of 7, with all of its digits occurring exactly once each. For
example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
(it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

NOTE: The largest possible featured number is 9876543201.
*/

function noRepeatedDigits(num) {
  let numArr = Array.from(String(num), Number);
  let deduped = [...new Set(numArr)];
  return numArr.length === deduped.length;
}

function isFeatured(num) {
  return num % 7 === 0
    && num % 2 === 1
    && noRepeatedDigits(num);
}

function featured(num) {
  // Increment num by one since we need to find the next featured num.
  let curNum = num + 1;

  const MAX = 9876543201;

  // Guard clause if num > largest possible featured num
  if (curNum > MAX) return "There is no possible number that fulfills those requirements.";

  // Get curNum to a number divisible by 7. Once there, we can increase effiency
  // by incrementing curNum by 7 instead of 1.
  while (curNum % 7 !== 0) {
    curNum += 1;
  }
  // If curNum is even, add 7 so that we get to an odd multiple of 7.
  if (curNum % 2 !== 1) curNum += 7;

  // Increment num by 14 until we find the next featured number. We use 14
  // because odd multiples of 7 occur every 14 numbers.
  while (!isFeatured(curNum)) {
    curNum += 14;
  }

  return curNum;

}

// Examples
console.log(featured(12) === 21); // 21
console.log(featured(20) === 21); // 21
console.log(featured(21) === 35); // 35
console.log(featured(997) === 1029); // 1029
console.log(featured(1029) === 1043); // 1043
console.log(featured(999999) === 1023547); // 1023547
console.log(featured(999999987) === 1023456987); // 1023456987
console.log(featured(9876543186) === 9876543201); // 9876543201
console.log(featured(9876543200) === 9876543201); // 9876543201
console.log(
  featured(9876543201) ===
    "There is no possible number that fulfills those requirements."
); // "There is no possible number that fulfills those requirements."
