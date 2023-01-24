
// // for...in loop
// function crunch(str) {
//   let result = '';
//   for (let idx in str) {
//     if (str[idx] !== str[idx - 1]) result += str[idx];
//   }
//   return result;
// }

// // for...of loop
// function crunch(str) {
//   let result = '';
//   for (let char of str) {
//     if (result[result.length - 1] !== char) result += char;
//   }
//   return result;
// }

// Using regex. See breakdown of syntax below
// [^] is a negated character class and doesn't match any the characters in it.
//
// \w matches any alphanumeric character from the basic Latin alphabet,
// including the underscore.Equivalent to[A - Za - z0 -9_]
//
// \s Matches a single white space character, including space, tab, form feed,
// line feed, and other Unicode spaces.Equivalent to...
// [\f\n\r\t\v\u00a0\u1680\u2000 -\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
//
// | Called a disjunction but is acts just like any old OR operator.
//
// (.) A capturing group that matches any character
//
// (?=\1) A capturing group that matches any instances of the character
// before it.
//   ? is a wildcard for any single character.
//   \1 represents the last charcter in the substring match. Essentially,
//   this forces us to match multiple occurences of a character.
//
// g flag is the global flag. Which means a search is done across the entire
// string, even if a match has already been found. Without the global flag
// searching would stop once a match was found.
//
// i flag is the case-insensitive flag. This causes Aa or aA to register
// as a duplicate even though the they're different cases.

function crunch(str) {
  return str.replace(/[^\w\s]|(.)(?=\1)/gi, '');
}


// Examples
console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");    // "daily double"
console.log(crunch('4444abcabccba') ===  "4abcabcba");              // "4abcabcba"
console.log(crunch('ggggggggggggggg') ===  "g");            // "g"
console.log(crunch('a') ===  "a");                          // "a"
console.log(crunch('') ===  "");                           // ""
