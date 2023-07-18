/* eslint-disable max-lines-per-function */
class Robot {
  constructor () { }
  static NAMES = [];
  name() {
    if (this.nameStr) return this.nameStr;
    return this.generateName();
  }

  generateName() {
    const NAME_LENGTH = 5;
    const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const ALPHABETIC_CHARS = (function () {
      let chars = [];
      for (let charCode = 65; charCode < 91; charCode++) {
        chars.push(String.fromCharCode(charCode));
      }
      return chars;
    })();

    let name = '';
    for (let idx = 0; idx < NAME_LENGTH; idx += 1) {
      let charSource = idx in [0, 1]
        ? ALPHABETIC_CHARS : DIGITS;
      const randIdx = Math.floor(Math.random() * charSource.length);
      const randChar = charSource[randIdx];
      name += randChar;
    }

    while (Robot.NAMES.includes(name)) {
      name = this.name();
    }

    Robot.NAMES.push(name);

    this.nameStr = name;

    return name;

  }

  reset() {
    let nameIdx = Robot.NAMES.findIndex(name => name === this.nameStr);
    Robot.NAMES.splice(nameIdx, 1);
    this.nameStr = undefined;
  }

}


module.exports = Robot;
