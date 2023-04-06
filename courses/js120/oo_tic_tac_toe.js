/*
TODO:
  - Try to arrange the code so that:
    - Try to always display the board at the same location on the screen
    regardless of whether the welcome message is present.
      - LS used two different display methods to accomplish this.
        - See https://launchschool.com/lessons/93a83d87/assignments/527c4a79

  - Consider adding a Board class
    - Could have a toString method that makes it easy to log the board.

  - Consider adding a Square class
    - Could have a toString method that makes it easy to log the square.

*/

const readlineSync = require('readline-sync');

class Player {
  constructor(char) {
    this.char = char;
  }
}

class User extends Player {
  constructor(char) {
    super(char);
  }
}

User.prototype.getInput = function () {
  console.log('\n\n');
  console.log('What space would you like to mark?');
  let rowNum = this.getRowNum();
  let colNum = this.getColNum();

  // Record the choice of the user in the board array.
  let idx = (colNum - 1) + ((rowNum - 1) * 3);

  // If the space was already chosen, make the player choose a new one.
  while (this.board[idx] !== ' ') {
    console.log('Error: That space has already been chosen, please choose another');
    [rowNum, colNum, idx] = this.chooseValidSpace();
  }

  // Mark the space once we have a valid choice.
  this.board[idx] = this.char;
};

User.prototype.getRowNum = function () {
  let rowNum = Number(readlineSync.question('Row Number: '));
  while (![1, 2, 3].includes(rowNum)) {
    console.log('Error: Not a valid Row Number. Valid Row Numbers are 1 - 3');
    rowNum = Number(readlineSync.question('Row Number: '));
  }
  return rowNum;
};

User.prototype.getColNum = function () {
  let colNum = Number(readlineSync.question('Column Number: '));
  while (![1, 2, 3].includes(colNum)) {
    console.log('Error: Not a valid Column Number. Valid Column Numbers are 1 - 3');
    colNum = Number(readlineSync.question('Column Number: '));
  }
  return colNum;
};

User.prototype.chooseValidSpace = function () {
  let rowNum = this.getRowNum();
  let colNum = this.getColNum();
  let idx = (colNum - 1) + ((rowNum - 1) * 3);
  return [rowNum, colNum, idx];
};

class Computer extends Player {
  constructor(char) {
    super(char);
  }
}

class Game {
  static firstPlayerChar = 'x';
  static secondPlayerChar = 'o';
  constructor() {
    this.board = Array(9).fill(' ');
  }
}

Game.prototype.getInput = function (player) {
  return player.getInput();
};

Game.prototype.innerLoop = function () {
  while (true) {
    console.clear();

    if (this.firstPlayer.constructor === User) {
      this.displayBoard(this.computer.lastMove || '');
    }

    this.getInput(this.firstPlayer);

    if (this.firstPlayer.constructor === Computer) {
      this.displayBoard(this.computer.lastMove);
    }

    if (this.isWinner(this.firstPlayer) || this.isTie()) break;

    this.getInput(this.secondPlayer);

    if (this.isWinner(this.secondPlayer) || this.isTie(this.board)) break;
  }
};

Game.prototype.setPlayers = function () {
  this.firstPlayer = this.chooseFirstPlayer();

  this.secondPlayer = (this.firstPlayer.constructor === User)
    ? new Computer(Game.secondPlayerChar) : new User(Game.secondPlayerChar);

  this.computer = (this.firstPlayer.constructor === User)
    ? this.secondPlayer : this.firstPlayer;

  this.human = (this.firstPlayer.constructor === User)
    ? this.firstPlayer : this.secondPlayer;

};

Game.prototype.mixInSharedObjects = function () {
  Player.prototype.board = this.board;
  Player.prototype.winningCombos = this.winningCombos;
  User.prototype.opponent = this.firstPlayer.constructor === User
    ? this.secondPlayer
    : this.firstPlayer;
  Computer.prototype.opponent =
    this.firstPlayer.constructor === User
      ? this.firstPlayer
      : this.secondPlayer;
};

Game.prototype.play = function () {
  while (true) {
    this.setPlayers();

    this.mixInSharedObjects();

    this.innerLoop();

    this.logResult();

    if (this.playAgain() === 'yes') {
      this.board.fill(' ');
      continue;
    } else break;
  }

  console.clear();

  console.log('The game has ended. Good bye...\n');
};

Game.prototype.leftPadding = function () {
  const NUM_OF_SPACES = 5;
  return ' '.repeat(NUM_OF_SPACES);
};

Game.prototype.getRow = function (rowNum) {
  // Ensures rowNums align with playerChoices index;
  rowNum *= 3;
  return `  ${(rowNum / 3) + 1}  | ${this.board[rowNum]} | ${this.board[rowNum + 1]} | ${this.board[rowNum + 2]} |`;
};


Game.prototype.displayBoard = function (leadingLine = '\n') {
  console.log(`${leadingLine}`);
  console.log('');
  console.log(`${this.leftPadding()}    Columns`);
  console.log(`${this.leftPadding()}   1   2   3`);
  console.log(`${this.leftPadding()} +---+---+---+`);
  console.log(' ' + this.getRow(0));
  console.log(`R${this.leftPadding()}+---+---+---+`);
  console.log('o' + this.getRow(1));
  console.log(`w${this.leftPadding()}+---+---+---+`);
  console.log('s' + this.getRow(2));
  console.log(`${this.leftPadding()} +---+---+---+`);
};

Game.prototype.winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

Game.prototype.isTie = function () {
  return !this.board.some(el => el === ' ');
};

Game.prototype.isWinner = function (player) {
  let char = player.char;
  for (let combo of this.winningCombos) {
    let [idxOne, idxTwo, idxThree] = combo;
    if (
      this.board[idxOne] === char &&
      this.board[idxTwo] === char &&
      this.board[idxThree] === char
    ) return true;
  }
  // If a winning combo isn't found return false
  return false;
};

Game.prototype.logResult = function () {
  console.clear();

  if (this.isWinner(this.firstPlayer)) {
    this.displayBoard(`${this.firstPlayer.constructor.name} wins.`);
  } else if (this.isWinner(this.secondPlayer)) {
    this.displayBoard(`${this.secondPlayer.constructor.name} wins.`);
  } else this.displayBoard("It's a tie game.");

  console.log('\n\n');
};

Game.prototype.playAgain = function () {
  let playAgain = readlineSync.question('Would you like to play again? (yes or no) ');
  while (!['yes', 'no'].includes(playAgain)) {
    console.log('Error: please input a valid response');
    playAgain = readlineSync.question('Would you like to play again? (yes or no) ');
  }
  return playAgain;
};

Game.prototype.chooseFirstPlayer = function () {
  console.clear();
  let first = readlineSync.question("Who should go first? Enter 'Computer' or 'User': ");

  while (!['Computer', 'User'].includes(first)) {
    console.log("Error: Invalid Answer.");
    first = readlineSync.question("Please enter 'Computer' or 'User'");
  }
  return first === 'User' ? new User(Game.firstPlayerChar) : new Computer(Game.firstPlayerChar);
};

Game.prototype.getInput = function (player) {
  return player.getInput();
};

Computer.prototype.getInput = function () {
  let idx;
  let rowNum;
  let colNum;
  if (this.offensiveOpportunity()) {
    idx = this.offensiveOpportunity();
  } else if (this.defensiveOpportunity()) {
    idx = this.defensiveOpportunity();
  } else idx = this.chooseRandom();

  // Mark the space once we have a valid choice.
  rowNum = Math.floor(idx / 3);
  colNum = idx - (rowNum * 3);
  this.board[idx] = this.char;
  this.lastMove = `The computer chose space (${rowNum + 1}, ${colNum + 1})`;
  // console.log(`The computer chose space (${rowNum + 1}, ${colNum + 1})`);
};

Computer.prototype.defensiveOpportunity = function () {
  let missingSquare;
  for (let combo of this.winningCombos) {
    let count = 0;
    let [idxOne, idxTwo, idxThree] = combo;
    if (this.board[idxOne] === this.opponent.char) count += 1;
    else missingSquare = idxOne;
    if (this.board[idxTwo] === this.opponent.char) count += 1;
    else missingSquare = idxTwo;
    if (this.board[idxThree] === this.opponent.char) count += 1;
    else missingSquare = idxThree;
    // Decrement count if the other player's char is 1 of 3 spaces in the combo.
    if ([
      this.board[idxOne],
      this.board[idxTwo],
      this.board[idxThree]].includes(this.char)) count -= 1;
    if (count === 2) return missingSquare;
  }
  return null;
};

Computer.prototype.offensiveOpportunity = function () {
  let missingSquare;
  for (let [idxOne, idxTwo, idxThree] of this.winningCombos) {
    let count = 0;
    if (this.board[idxOne] === this.char) count += 1;
    else missingSquare = idxOne;
    if (this.board[idxTwo] === this.char) count += 1;
    else missingSquare = idxTwo;
    if (this.board[idxThree] === this.char) count += 1;
    else missingSquare = idxThree;
    // Decrement count if the other player's char is 1 of 3 spaces in the combo.
    if ([
      this.board[idxOne],
      this.board[idxTwo],
      this.board[idxThree]].includes(this.opponent.char)) count -= 1;
    if (count === 2) return missingSquare;
  }
  return null;
};

Computer.prototype.chooseRandom = function () {
  let rowNum = Math.floor(Math.random() * 3);
  let colNum = Math.floor(Math.random() * 3);
  // Record the choice of the user in the playerChoices array.
  let idx = colNum + (rowNum * 3);

  // If the space was already chosen, make the computer choose a new one.
  while (this.board[idx] !== ' ') {
    rowNum = Math.floor(Math.random() * 3);
    colNum = Math.floor(Math.random() * 3);
    idx = colNum + (rowNum * 3);
  }
  return idx;
};


const game = new Game();

game.play();
