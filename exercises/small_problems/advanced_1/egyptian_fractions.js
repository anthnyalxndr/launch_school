/*
A Rational Number is any number that can be represented as the result of the
division between two integers, e.g., 1/3, 3/2, 22/7, etc. The number to the
left is called the numerator, and the number to the right is called the
denominator.

A Unit Fraction is a rational number where the numerator is 1.

An Egyptian Fraction is the sum of a series of distinct unit fractions
(no two are the same), such as:

1   1    1    1
- + - + -- + --
2   3   13   15

Every positive rational number can be written as an Egyptian fraction.
For example:
    1   1   1   1
2 = - + - + - + -
    1   2   3   6
Write two functions: one that takes a Rational number as an argument, and
returns an Array of the denominators that are part of an Egyptian Fraction
representation of the number, and another that takes an Array of numbers in
the same format, and calculates the resulting Rational number.
*/
const Fraction = require("fraction.js");

function egyptian(fraction) {
  let currentFraction = new Fraction(1);
  let denominators = [];
  let currentDifference = new Fraction(fraction);
  while (currentDifference > 0) {
    if (currentFraction <= currentDifference) {
      currentDifference = currentDifference.sub(currentFraction);
      denominators.push(currentFraction.d);
    }
    currentFraction.d += 1;
  }
  return denominators;
}

function unegyptian(denominators) {
  let rationalNumber = 0;
  for (let idx = 0; idx < denominators.length; idx++) {
    let currentDenominator = denominators[idx];
    rationalNumber += Fraction(1, currentDenominator);
  }

  return rationalNumber;
}

function testCases() {
  console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
  console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
  console.log(egyptian(new Fraction(3, 1)));
  // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
  console.log(unegyptian(egyptian(new Fraction(1, 2))) === 0.5); // logs 0.5
  console.log(unegyptian(egyptian(new Fraction(3, 4))) === 0.75); // logs 0.75
  console.log(unegyptian(egyptian(new Fraction(39, 20))) === 1.95); // logs 1.95
  console.log(
    unegyptian(egyptian(new Fraction(127, 130))) === 0.9769230769230768
  );
  // logs 0.9769230769230768
  console.log(unegyptian(egyptian(new Fraction(5, 7))) === 0.7142857142857142);
  // logs 0.7142857142857142
  console.log(unegyptian(egyptian(new Fraction(1, 1))) === 1); // logs 1
  console.log(unegyptian(egyptian(new Fraction(2, 1))) === 2); // logs 2
  console.log(unegyptian(egyptian(new Fraction(3, 1))) === 3); // logs 3
}
testCases();

function egyptionPEDAC() {
  function understandTheProblem() {
    /*
    I: Fraction
    O: arr[denominators]
    Concepts:
    Rules:
    Questions:
  */
  }

  function DSA() {
    /*
    Algorithm:
    - Create a currentDifference to keep track of the current difference
      between the egyptianFraction sum and the fraction arg.
    - Create a currentNumerator & currentDenominator to create a
    currentFraction.
    - Create an egyptianFractions array to hold individual fractions in the
      egyptianFractions that sum to the fraction arg.
    - Begin looping
      - add currentFraction egyptianFractions
      - currentDifference -= currentFraction
      - increment currentDenominator until it causes currentFraction to equal
        currentDifference or be less than currentDifference.
    Data Structures:
    - Need to use an object to keep track of the "current" Variables since they
      need to be linked.
  */
  }

  function _(funcArr) {
    for (let func of funcArr) func();
  }
  _([understandTheProblem, DSA]);
}
egyptionPEDAC();

function unegyptianPEDAC() {
  function understandTheProblem() {
    /*
    I:
    O:
    Concepts:
    Rules:
    Questions:
  */
  }

  function DSA() {
    /*
    Algorithm:
    Data Structures:
  */
  }

  function _(funcArr) {
    for (let func of funcArr) func();
  }
  _([understandTheProblem, DSA]);
}
unegyptianPEDAC();
