/*
Write a function that rotates the last count digits of a number. To perform the
rotation, move the first of the digits that you want to rotate to the end and
shift the remaining digits to the left.
*/

function rotateRightmostDigits(num, digit) {
  num = String(num);
  let endCharIdx = num.length - digit;
  let endChar = num[num.length - digit];
  let charsToRotate = num.slice(endCharIdx + 1);
  return Number(num.slice(0, endCharIdx) + charsToRotate + endChar);
}

// Examples
console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917
