'use strict';

class Octal {
  constructor (num) {
    const invalidInput = /[^0-7]/;
    this.octal = invalidInput.test(num) ? '0' : num;
  }
  /*
  Algo:
    input: octal
    output: decimal

    - Initialize a decimal variable to eventually return
    - Loop over octal
      - Initialize currentPower variable and decrement with each iteration
      - Transform each digit to a decimal and add to decimal
    - Return decimal
  */
  toDecimal() {
    let decimal = 0;
    for (
      let idx = 0, currentPower = this.octal.length - 1;
      idx < this.octal.length;
      idx += 1, currentPower -= 1) {
      let curDigit = +this.octal[idx];
      decimal += (8 ** currentPower) * curDigit;
    }
    return decimal;
  }
}

module.exports = Octal;
