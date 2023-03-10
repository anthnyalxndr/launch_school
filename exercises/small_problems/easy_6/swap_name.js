/**
 * Write a function that takes a string argument consisting
 * of a first name, a space, and a last name, and returns a
 * new string consisting of the last name, a comma, a space,
 * and the first name.
 */

function swapName(name) {
  // Split the string via a space into an array of 2 elements
  let arr = name.split(' ');

  // Reverse the array of strings so last name is before first
  arr.reverse();

  // Return a joined array with ', ' as the delimiter
  return arr.join(', ');
}

// Examples
console.log(swapName('Joe Roberts') === "Roberts, Joe");    // "Roberts, Joe"

function swapName2(name) {
  // Split the string via a space into an array of 2 elements
  let arr = name.split(' ');
  let last = arr[arr.length - 1];
  let first = arr[0];
  let middle = arr.slice(1, -1).join(' ');
  return `${last}, ${first} ${middle}`;


  // Return a joined array with ', ' as the delimiter
  // return `${arr[arr.length - 1]}, ${arr[0]} ${arr.slice(1, -1).join(' ')}`;
}

// Further Exploration
console.log(swapName2('Karl Oskar Henriksson Ragvals') === "Ragvals, Karl Oskar Henriksson");    // "Ragvals, Karl Oskar Henriksson"
