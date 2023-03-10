/**
 * Write a function that takes a string argument containing one or more words
 * and returns a new string containing the words from the string argument.
 * All five-or-more letter words should have their letters in reverse order.
 * The string argument will consist of only letters and spaces. Words will be
 * separated by a single space.
 */

function reverseWords(str) {
  // Split str into array
  let arr = str.split(' ');

  // Reverse elements with 5 or more letters
  let reversed = arr.map(el => {
    // Reassign el to it's reverse if el.length > 4.
    if (el.length > 4) el = el.split('').reverse().join('');
    return el;
  }).join(' ');

  return reversed;
}

// Examples
console.log(reverseWords('Professional') === "lanoisseforP");             // "lanoisseforP"
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School') === "hcnuaL loohcS");            // "hcnuaL loohcS"
