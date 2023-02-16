// Write a function to find the longest common prefix string amongst an array
// of strings.
// If there is no common prefix, return an empty string "".

function commonPrefix(arr /*of strings*/) {
  // Prefix def: any contiguous sequence of characters in a string starting
  // from the first character. Can include the last character.
  let longestCommonPrefix = '';

  // Loop over the first string in the array & find longest common prefix among
  // all elements
    // Loop by splitting first element into own array and using reduce
  let firstEl = arr[0];

  for (let idx = 0; idx < firstEl.length; idx++) {
    let isCommon = true;
    let curPrefix = firstEl.slice(0, idx + 1);
    // console.log({ firstEl }, { isCommon }, { curPrefix });
    arr.slice(1).forEach((el) => {
      let compPrefix = el.slice(0, idx + 1);
      // console.log({ el }, { compPrefix });
      if (compPrefix !== curPrefix) isCommon = false;
    });
    if (isCommon === false) break;
    longestCommonPrefix = curPrefix;
  }
    // Create a prefix starting with the first char
    // With each loop iteration update the prefix to include the next char
    // End the loop when adding a char to the prefix causes all elements
    // to no longer have a common prefix OR when we've reached the end of the
    // 1st array element
  return longestCommonPrefix;
}

// Test Cases
console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"]) === ""); // true
console.log(
  commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters"
); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true
