/**
 * Write a function that takes a year as input and returns the century.
 * The return value should be a string that begins with the century number,
 * and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
 * New centuries begin in years that end with 01. So, the years 1901 - 2000
 * comprise the 20th century.
 */

function century(int) {
  // Transform int into string
  let century = Math.ceil(int / 100);

  // Append proper ending and return
  const endings = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

  const ending = (century % 100 > 10 && century % 100 < 20) ? 'th' : endings[century % 10];

  return String(century) + ending;
}

// Examples
console.log(century(2000) === "20th");       // true
console.log(century(2001) === "21st");       // true
console.log(century(1965) === "20th");       // true
console.log(century(256) === "3rd");         // true
console.log(century(5) === "1st");           // true
console.log(century(10103) === "102nd");     // true
console.log(century(1052) === "11th");       // true
console.log(century(1127) === "12th");       // true
console.log(century(11201) === "113th");     // true
