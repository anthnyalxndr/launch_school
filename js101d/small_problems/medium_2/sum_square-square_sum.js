/*
Write a function that computes the difference between the square of the sum of
the first count positive integers and the sum of the squares of the first
count positive integers.
*/

function sumSquareDifference(count) {
  // square of the sum of the first count positive integers
  let squareOfSum = 0;
  let sumOfSquare = 0;
  for (let int = 1; int < count + 1; int++) {
    squareOfSum += int;
    sumOfSquare += int ** 2;
  }

  squareOfSum **= 2;

  return squareOfSum - sumOfSquare;
}

// Examples
console.log(sumSquareDifference(3) === 22);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);     // 2640
console.log(sumSquareDifference(1) === 0);      // 0
console.log(sumSquareDifference(100) === 25164150);    // 25164150
