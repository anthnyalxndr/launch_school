/**
 * Write a function that takes a string as an argument and returns true
 * if all parentheses in the string are properly balanced, false otherwise.
 * To be properly balanced, parentheses must occur in matching '(' and ')'
 * pairs.
 */
function isOpeningChar(char) {
  return ['(', '['].includes(char);
}

function closingCharCountGreater(char, countsObj, charsObj) {
  let closingCharCount = countsObj[charsObj[char]];
  let charCount = countsObj[char];
  return closingCharCount > charCount;

}
// Side Note: An alternate approach, similar to the LS example, could be to keep
// track of a balance for a pair of chars instead of a count for each.
function isBalanced(str) {
  const counts = { "(": 0, ")": 0, "[": 0, "]": 0 };
  const chars = { "(": ")", "[": "]" };

  // Loop over the string and increment counts
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];

    // If it's a char we're not concerned with counting
    // continue the loop
    if (!Object.keys(counts).includes(char)) continue;

    // If the current char is an opening char and the count of char's
    // closingChar is greater return false, since this string can
    // never be balanced.
    if (isOpeningChar(char) && closingCharCountGreater(char, counts, chars)) {
      return false;
    }

    // If we're still looping increment the char's count and continue.
    counts[char] += 1;
  }

  // Generate an array containing a boolean representing whether or not each
  // opening char is balanced.
  let result = Object.keys(chars).map((el) => {
    let closingCharCount = counts[chars[el]];
    let charCount = counts[el];
    return charCount === closingCharCount;
  });

  // If the string is unbalanced for any of the chars in our array return false.
  return result.every(el => el === true);
}

// // Examples
console.log(isBalanced("What [(is)] this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/**
 * Further Exploration
 * ===================
 * There are a few other characters that should be matching as well.
 * Square brackets and curly brackets normally come in pairs.
 * Quotation marks(single and double) also typically come in pairs and should
 * be balanced. Can you expand this function to take into account those
 * characters?
 *
 * Algo
 * ===================
 * - Create an object to hold counts of all chars
 *    - {(: 0, ): 0, [: 0, ]: 0}
 * - Create an object to hold a chars counterpart
 *    - {(:), [:],}
 * - Loop over string
 *     - Use counterpart obj to test whether count of closing char is greater
 *       than count of opening char.
 *       E.g. if countObj[closingChars['(']] > countObj['('] return false
 *     - Increment the chars count in the count obj.
 */
