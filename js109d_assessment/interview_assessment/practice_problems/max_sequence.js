function maxSequence(arr /*of numbers*/) {
  // If array only contains negatives OR is empty, return 0
  if (arr.every(el => el < 0) || arr.length === 0) return 0;

    // Initialize the maximum to 0
  let max = 0;

  // Calculate the contiguous sums of all possible contiguous combinations
  // of elements and compare those sums with the current maximum. If the
  // maximum is less than the current sum, the maximum becomes the current sum.
    // Loop over the array
  arr.forEach((_, idx) => {
    // Use a two pointer strategy to keep track of the starting & ending
    // elements in our sum.
    let start = idx;
    let end = idx + 1;
    while (end < arr.length + 1) {
      let subArr = arr.slice(start, end);
      // Calculate the current sum
      let curSum = subArr.reduce((prev, cur) => prev + cur);
      // Test if the current sum is greater than max and update max to be the
      // current sum if it is.
      max = curSum > max ? curSum : max;
      // console.log({ ...subArr }, { curSum }, { max });
      end += 1;
    }
  });
  // Return the max sum
  return max; // Output ill be a number
}

// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//  --should return 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

// Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true
