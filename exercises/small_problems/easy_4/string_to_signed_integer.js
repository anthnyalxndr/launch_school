function stringToInteger(str) {
  if (str.length === 0) return NaN;
  let mapping = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  let number = str.split('').reduce((prev, cur) => {
    if (cur < '0' || cur > '9') return prev;
    return (prev * 10) + mapping[cur];
  }, 0);

  return number;
}

function stringToSignedInteger(str) {
  let sign;
  if (['+', '-'].includes(str[0])) {
    sign = (str[0] === '-') ? -1 : 1;
    str = str.slice(1);
  } else sign = 1;
  return sign * stringToInteger(str);
}

// Examples
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
