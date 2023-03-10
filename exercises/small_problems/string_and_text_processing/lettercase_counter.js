/*
Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that are
lowercase letters, one representing the number of characters that are uppercase
letters, and one representing the number of characters that are neither.
*/

function letterCaseCount(str) {
  // Could split str, loop over it and compare each char using toLowerCase &
  // toUpperCase.
  // return str.split('').reduce((prev, cur) => {
  //   if (/[a-z]/gi.test(cur)) {
  //     if (cur === cur.toLowerCase()) prev.lowercase += 1;
  //     else if (cur === cur.toUpperCase()) prev.uppercase += 1;
  //   } else prev.neither += 1;
  //   return prev;
  // }, {lowercase: 0, uppercase: 0, neither: 0});

  // Regex approach
  return {
    lowercase: str.replace(/[^a-z]/g, '').length,
    uppercase: str.replace(/[^A-Z]/g, '').length,
    neither: str.replace(/[A-z]/g, '').length,
  };
}

// Examples
console.log(''.match(/[a-z]/g));
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
