"use strict";

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples =
      multiples.length === 0 ? SumOfMultiples.DEFAULT_MULTIPLES : multiples;
  }
  static DEFAULT_MULTIPLES = [3, 5];
  static to(limit) {
    /*
    Algorithm
    - initialize a set to hold unique multiples
    - initialize a currentMultiple array to the args of multiples
    - loop until limit is reached by lowest multiple
    - each loop add all multiples < limit to the set and increment each number
      in the array by itself
    - return the sum of the set
    */
    let allMultiples = new Set();
    let currentMultiples = this.DEFAULT_MULTIPLES;
    while (Math.min(...currentMultiples) < limit) {
      let validMultiples = currentMultiples.filter((num) => num < limit);
      validMultiples.forEach((num) => allMultiples.add(num));
      currentMultiples = currentMultiples.map(
        (num, idx) => num + this.DEFAULT_MULTIPLES[idx]
      );
    }
    return allMultiples.size === 0
      ? 0
      : [...allMultiples].reduce((sum, num) => sum + num);
  }
  to(limit) {
    /*
    Algorithm
    - initialize a set to hold unique multiples
    - initialize a currentMultiple array to the args of multiples
    - loop until limit is reached by lowest multiple
    - each loop add all multiples < limit to the set and increment each number
      in the array by itself
    - return the sum of the set
    */
    let allMultiples = new Set();
    let currentMultiples = this.multiples;
    while (Math.min(...currentMultiples) < limit) {
      let validMultiples = currentMultiples.filter((num) => num < limit);
      validMultiples.forEach((num) => allMultiples.add(num));
      currentMultiples = currentMultiples.map(
        (num, idx) => num + this.multiples[idx]
      );
    }
    return allMultiples.size === 0
      ? 0
      : [...allMultiples].reduce((sum, num) => sum + num);
  }
}

module.exports = SumOfMultiples;
