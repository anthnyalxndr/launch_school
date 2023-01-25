/**
 * Write a function that takes a string, doubles every consonant
 * character in the string, and returns the result as a new string.
 * The function should not double vowels ('a','e','i','o','u'),
 * digits, punctuation, or whitespace.
 */
// Helper function used b/c I was having a hard time with regex.
function shouldDouble(char) {
  if (
    char >= 'A' &&
    char <= 'z' &&
    !['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) return true;
  return false;
}

function doubleConsonants(str) {
  // Loop over the string by transforming it into an array
  return str.split('').reduce((prev, cur) => {
    // Regex solution commented out.
    // if (/([b-df-hj-np-tv-z])/i.test(cur)) cur = cur.repeat(2);
    if (shouldDouble(cur)) cur = cur.repeat(2);
    prev += cur;
    return prev;
  }, '');
}

// Examples
console.log(doubleConsonants('String') === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('') === "");                // ""
