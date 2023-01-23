function integerToString(num) {
  let lookup = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  do {
    result = lookup[num % 10] + result;
    num = (num - (num % 10)) / 10;
  } while (num > 0);
  return result;
}
// integerToString(4321);
// Examples
console.log(integerToString(4321) === "4321");        // "4321"
console.log(integerToString(0) === "0");           // "0"
console.log(integerToString(5000) === "5000");        // "5000"
console.log(integerToString(1234567890) === "1234567890");  // "1234567890"


// Further Exploration
function signedIntegerToString(int) {
  let sign;
  if (int > 0) sign = '+';
  else if (int < 0 || 1 / int === -Infinity) sign = '-';
  else sign = '';
  return sign + integerToString(Math.abs(int));
}

// Examples
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");
