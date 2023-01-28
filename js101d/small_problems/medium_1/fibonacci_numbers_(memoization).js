/* eslint-disable id-length */
function recurse(n, arr) {
  if (arr[n]) return arr[n];

  else arr[n] = recurse(n - 1, arr) + recurse(n - 2, arr);

  return arr[n];
}

function fibonacci(n) {
  // Initialize an array with the first two fibonacci numbers.
  let arr = [1, 1];
  // We use n - 1 below so that n matches arr's 0 based indexing.
  return recurse(n - 1 , arr);
}

// Examples
console.log(fibonacci(1) === 1);       // true
console.log(fibonacci(2) === 1);       // true
console.log(fibonacci(3) === 2);       // true
console.log(fibonacci(4) === 3);       // true
console.log(fibonacci(5) === 5);       // true
console.log(fibonacci(12) === 144);    // true
console.log(fibonacci(20) === 6765);   // true
