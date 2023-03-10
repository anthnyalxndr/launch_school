function integerToString(num) {
  let CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let back = num % 10;
    result = CHARS[back] + result;
    num = Math.floor(num / 10);
  } while (num > 0);

  return result;
}

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  num *= sign;
  switch (1 / sign) {
    case -1:
      return '-' + integerToString(num);
    case 1:
      return '+' + integerToString(num);
    case -Infinity:
      return '-0';
    case Infinity:
      return '0';
    default:
      return 'NaN';
  }
}

// Examples
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");
