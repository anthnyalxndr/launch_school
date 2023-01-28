/*
Write a function that takes a string as an argument and returns that string
with a staggered capitalization scheme. Every other character, starting from
the first, should be capitalized and should be followed by a lowercase or
non-alphabetic character. Non-alphabetic characters should not be changed,
but should be counted as characters for determining when to switch between
upper and lower case.
*/

function staggeredCase(str) {
  // Swap characters based on idx.
  // return str.split('').map((el, idx) => {
  //   if (idx % 2 === 0) el = el.toUpperCase();
  //   else el = el.toLowerCase();
  //   return el;
  // }).join('');

  // Manual approach
  for (let idx = 0; idx < str.length; idx++) {
    let el = str[idx];
    if (idx % 2 === 0) el = el.toUpperCase();
    else el = el.toLowerCase();
    str = str.slice(0, idx) + el + str.slice(idx + 1);
  }
  return str;
}

// Examples
console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");   // "IgNoRe 77 ThE 4444 nUmBeRs"
