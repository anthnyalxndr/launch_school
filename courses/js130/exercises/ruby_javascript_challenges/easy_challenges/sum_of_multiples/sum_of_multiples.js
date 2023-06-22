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
    let allMultiples = new Set([0]);
    let currentMultiples = this.DEFAULT_MULTIPLES.slice();
    while (Math.min(...currentMultiples) < limit) {
      let validMultiples = currentMultiples.filter((num) => num < limit);
      validMultiples.forEach((num) => allMultiples.add(num));
      currentMultiples.forEach(
        (_, idx, arr) => { arr[idx] += this.DEFAULT_MULTIPLES[idx] }
      );
    }
    return [...allMultiples].reduce((sum, num) => sum + num, 0);
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
    return [...allMultiples].reduce((sum, num) => sum + num, 0);
  }
}

module.exports = SumOfMultiples;
