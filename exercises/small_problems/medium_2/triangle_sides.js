/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must
be greater than the length of the longest side, and every side must have a
length greater than 0. If either of these conditions is not satisfied, the
triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

function isInvalid(arr) {
  let [short, middle, long] = arr;
  if (short + middle <= long || arr.some(el => el === 0)) return true;
  else return false;
}

function getTriangleType(arr) {
  // Get unique length counts
  let uniqueLengthCount = arr.reduce((prev, cur) => {
    if (!prev.includes(cur)) prev.push(cur);
    return prev;
  }, []);
  // let uniqueLengthCount = [...new Set(arr)];
  if (uniqueLengthCount.length === 1) return 'equilateral';
  if (uniqueLengthCount.length === 2) return 'isosceles';
  else return 'scalene';
}

function triangle(...args) {
  let sorted = [...args].sort((a, b) => a - b);
  // Guard Clause
  if (isInvalid(sorted)) return 'invalid';
  return getTriangleType(sorted);
}

// Examples
console.log(triangle(3, 3, 3) === "equilateral");    // true
console.log(triangle(3, 3, 1.5) === "isosceles");    // true
console.log(triangle(3, 4, 5) === "scalene");        // true
console.log(triangle(0, 3, 3) === "invalid");        // true
console.log(triangle(3, 1, 1) === "invalid");        // true
