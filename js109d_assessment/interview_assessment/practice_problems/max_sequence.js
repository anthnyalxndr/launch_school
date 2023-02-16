// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//  --should return 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

function maxSequence(arr /*of numbers*/) {
  // If array only contains negatives OR is empty, return 0
  if (arr.every(el => el < 0) || arr.length === 0) return 0;

  // Calculate the contiguous sums of all possible contiguous combinations
  // of elements and compare those sums with the current maximum. If the
  // maximum is less than the current sum, the maximum becomes the current sum.
  //   Loop over the array
  return arr.reduce((prev, _, idx) => {
    // Create a subarray consisting of the current idx through the end of the
    // string.
    let subArr = arr.slice(idx, arr.length);

    // For each element in our subArr, calculate the sum between the 1st element
    // and the current element.
    subArr.forEach((_, idx) => {
      let curArray = subArr.slice(0, idx + 1);
      let sum = curArray.reduce((prev, cur) => prev + cur);
      // If the sum is bigger than our max, assign the current sum to max.
      if (sum > prev) prev = sum;
    });
    return prev;
  }, 0);
}

// Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true
