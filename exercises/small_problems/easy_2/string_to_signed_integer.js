// Taken from string_to_integer.js
function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let num = 0;

  // This for loop converts each digit to it's base 10 equivalent
  // gradually over the course of the loop.
  for (let idx = 0; idx < str.length; idx += 1) {
    num = (num * 10) + DIGITS[str[idx]];
  }

  return num;
}

// Higher-order function example.
// Prefer using a higher - order function when you already have
// another function defined instead of modifying the other
// function (see function below this one)
function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1));
    case '+':
      return stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }
}

// // All in one function with no higher-order function.
// function stringToSignedInteger(str) {
//   let sign;
//   if (str[0] === '-') {
//     sign = 'negative';
//     str = str.slice(1);
//   } else if (str[0] === '+') {
//     sign = 'positive';
//     str = str.slice(1);
//   } else {
//     sign = 'positive';
//   }

//   let num = 0;

//   for (let idx = 0; idx < str.length; idx += 1) {
//     num = (num * 10) + DIGITS[str[idx]];
//   }

//   return sign === 'negative' ? 0 - num : num;
// }

// Examples / Test Cases
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
