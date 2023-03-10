/*
Modify the function from the previous exercise so it ignores
non-alphabetic characters when determining whether it should uppercase or
lowercase each letter. The non-alphabetic characters should still be included
in the return value; they just don't count when toggling the desired case.
*/

function staggeredCase(str) {
  // Using an object as the accumulator in reduce
  // to hold local variables (i.e. last). This seems to be the only way
  // a variable value can be preserved with every callback invocation.
  return str.split('').reduce((prev, cur) => {
    if (prev.last === 'lower' && /[A-z]/.test(cur)) {
      cur = cur.toUpperCase();
      prev.last = 'upper';
    } else if (prev.last === 'upper' && /[A-z]/.test(cur)) {
      cur = cur.toLowerCase();
      prev.last = 'lower';
    }
    prev.arr.push(cur);
    // console.log(prev);
    return prev;
  }, {arr : [], last: 'lower'}).arr.join('');

  // Manual approach
  // let last = 'lower';
  // for (let idx = 0; idx < str.length; idx++) {
  //   let char = str[idx];
  //   if (last === 'lower' && /[a-z]/i.test(char)) {
  //     char = char.toUpperCase();
  //     last = 'upper';
  //   } else if (last === 'upper' && /[a-z]/i.test(char)) {
  //     char = char.toLowerCase();
  //     last = 'lower';
  //   }
  //   str = str.slice(0, idx) + char + str.slice(idx + 1);
  // }

  // return str;
}

// Examples
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
