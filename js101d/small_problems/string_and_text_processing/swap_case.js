/*
Write a function that takes a string as an argument and returns that
string with every lowercase letter changed to uppercase and every uppercase
letter changed to lowercase. Leave all other characters unchanged.
*/

function swapCase(str) {
  return str.split('').map(el => {
    if (/[a-z]/.test(el)) el = el.toUpperCase();
    else if (/[A-Z]/.test(el)) el = el.toLowerCase();
    return el;
  }).join('');
}

// Examples
console.log(swapCase('CamelCase') === "cAMELcASE");              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");      // "tONIGHT ON xyz-tv"
