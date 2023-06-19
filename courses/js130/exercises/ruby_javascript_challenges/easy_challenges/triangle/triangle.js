/* eslint-disable max-lines-per-function */
/*
problem description: Write a program to determine whether a triangle is
equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, and
the sum of the lengths of any two sides must be greater than the length of the
third side.
*/

/*
PEDAC
- Problem:
- Examples / Test Cases:
- DSA:
*/
class Triangle {
  constructor () {
    const sideLengths = Array.from(arguments);
    this.sideLengths = sideLengths;

    if (this.sideLengths.some((length) => length <= 0)) {
      throw new Error("All sides must have a length greater than 0");
    }

    const violatesTriangleInequality = () => {
      const [side1Length, side2Length, side3Length] = sideLengths;
      const sideCombinations = [
        [[side1Length, side2Length], side3Length],
        [[side1Length, side3Length], side2Length],
        [[side2Length, side3Length], side1Length],
      ];
      const sum = (num1, num2) => num1 + num2;
      for (let combo of sideCombinations) {
        let [[first, second], third] = combo;
        if (sum(first, second) <= third) return true;
      }
      return false;
    };

    if (violatesTriangleInequality()) {
      throw new Error("Violates Triangle Inequality");
    }
  }

  kind() {
    const triangleCategoryMap = {
      3: 'scalene',
      2: 'isosceles',
      1: 'equilateral',
    };
    let uniqueSides = (new Set(this.sideLengths)).size;
    return triangleCategoryMap[uniqueSides];
  }
}

// (function tests() {
//   (function violate() {
//     const triangle = new Triangle(10, 1, 3);
//   })();
// })();

module.exports = Triangle;
