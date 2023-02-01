/*
Write a function that takes a string and returns an object containing the
following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/

// function letterPercentages(str) {
//   // Get number of matches via string.match
//   // Get perc by doing matches / str.length
//   let lowerCount = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
//   let percLowerCase = (lowerCount / str.length) * 100;
//   let upperCount = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0;
//   let percUpperCase = (upperCount / str.length) * 100;
//   let neitherCount = str.length - lowerCount - upperCount;
//   let percNeither = (neitherCount / str.length) * 100;
//   return {
//     lowercase: percLowerCase,
//     uppercase: percUpperCase,
//     neither: percNeither
//   };
// }

function letterPercentages(str) {
  let result = str.split('').reduce((prev, cur) => {
    if (/[a-z]/g.test(cur)) prev.lowercase += 1;
    else if (/[A-Z]/g.test(cur)) prev.uppercase += 1;
    else prev.neither += 1;
    return prev;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
  for (let prop in result) {
    result[prop] /= str.length;
  }
  return result;
}

// function letterPercentages(str) {
//   let result = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0
//   };
//   for (let char of str) {
//     if (/[a-z]/g.test(char)) result.lowercase += 1;
//     else if (/[A-Z]/g.test(char)) result.uppercase += 1;
//     else result.neither += 1;
//   }
//   for (let prop in result) {
//     result[prop] /= str.length;
//   }
//   return result;
// }


// Examples
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
