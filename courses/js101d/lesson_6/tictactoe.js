// Function & Constant Declarations
// ----------------------------------------------------------------------------

/**
 * The character representing a user's space on the game board.
 * @type {string}
 */
const FIRST_PLAYER_CHAR = 'x';

/**
 * The character representing the "computer's" space on the game board.
 * @type {string}
 */
const SECOND_PLAYER_CHAR = 'o';

/**
 * A nested array of 3 space combinations that result in a winner.
 * @type {[[number]]}
*/
const WINNING_COMBOS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

/**
 * A readlineSync object to get user input.
 */
const readlineSync = require('readline-sync');

/**
   * A helper function to dynamically display a row of squares with the user or
 * computer choices based on an index of the player choices array.
 * Rows go from 0 - 2.
 * @param {number} rowNum The row number of the game board.
 * @param {[[number]]} The game board.
 * @returns {string} A string representation of a row of the game board.
 */
function getRow(board, rowNum) {
  // Ensures rowNums align with playerChoices index;
  rowNum *= 3;
  return `  ${(rowNum / 3) + 1}  | ${board[rowNum]} | ${board[rowNum + 1]} | ${board[rowNum + 2]} |`;
}
/**
 * A number of space characters to align the game board.
 * @returns {string}
 */
function leftPadding() {
  const NUM_OF_SPACES = 5;
  return ' '.repeat(NUM_OF_SPACES);
}

/**
 * Logs the current state tic tac toe board to the console.
 * @param {[[number]]} The game board.
 * @returns {undefined}
 */
function displayBoard(board) {
  console.log(`${leftPadding()}    Columns`);
  console.log(`${leftPadding()}   1   2   3`);
  console.log(`${leftPadding()} +---+---+---+`);
  console.log(' ' + getRow(board, 0));
  console.log(`R${leftPadding()}+---+---+---+`);
  console.log('o' + getRow(board, 1));
  console.log(`w${leftPadding()}+---+---+---+`);
  console.log('s' + getRow(board, 2));
  console.log(`${leftPadding()} +---+---+---+`);
}

/**
 * Requests a row number from the user, which represents 1 / 2 of the coordinate
 * representing the space the user has chosen on the game board.
 * @returns {number} The row number chosen by the user.
 */
function getRowNum() {
  let rowNum = Number(readlineSync.question('Row Number: '));
  while ([1, 2, 3].includes(rowNum) === false) {
    console.log('Error: Not a valid Row Number. Valid Row Numbers are 1 - 3');
    rowNum = Number(readlineSync.question('Row Number: '));
  }
  return rowNum;
}
/**
 * Requests a column number from the user, which represents 1 / 2
 * of the coordinate
 * representing the space the user has chosen on the game board.
 * @returns {number} The column number chosen by the user.
 */
function getColNum() {
  let colNum = Number(readlineSync.question('Column Number: '));
  while ([1, 2, 3].includes(colNum) === false) {
    console.log('Error: Not a valid Column Number. Valid Column Numbers are 1 - 3');
    colNum = Number(readlineSync.question('Column Number: '));
  }
  return colNum;
}

/**
 * A function that makes a user re-choose their row and column number when
 * they've chosen an already picked space.
 * @returns {[number]} An array containing the row number,
 * column number, and corresponding index of the space chosen in the
 * playerChoices array.
 */
function chooseValidSpace() {
  let rowNum = getRowNum();
  let colNum = getColNum();
  let idx = (colNum - 1) + ((rowNum - 1) * 3);
  return [rowNum, colNum, idx];
}

function getInput(board, player, userInfo) {
  if (player === 'User') return getUserInput(board, userInfo.userChar);
  else return getComputerInput(board, userInfo.computerChar);
}


/**
 * Requests the user to choose a space on the game board and marks the space
 * they've chosen with PLAYER_CHAR
 * @param {[[number]]} The game board.
 * @returns {undefined}
 */
function getUserInput(board, char) {
  console.log('\n\n');
  console.log('What space would you like to mark?');
  let rowNum = getRowNum();
  let colNum = getColNum();

  // Record the choice of the user in the board array.
  let idx = (colNum - 1) + ((rowNum - 1) * 3);

  // If the space was already chosen, make the player choose a new one.
  while (board[idx] !== ' ') {
    console.log('Error: That space has already been chosen, please choose another');
    [rowNum, colNum, idx] = chooseValidSpace();
  }

  // Mark the space once we have a valid choice.
  board[idx] = char;
}

/**
 * Returns whether or not a tie has occured. This means the board is full.
 * @param {[[number]]} The game board
 * @returns {boolean}
 */
function isTie(board) {
  return !board.some(el => el === ' ');
}

/**
 * A function that chooses a random square for the computer if no
 * offensive of defensive opportunities exist.
 * @param {[[number]]} The game board.
 * @returns {number} The index of the game board to mark.
 */
function chooseRandom(board) {
  let rowNum = Math.floor(Math.random() * 3);
  let colNum = Math.floor(Math.random() * 3);
  // Record the choice of the user in the playerChoices array.
  let idx = colNum + (rowNum * 3);

  // If the space was already chosen, make the computer choose a new one.
  while (board[idx] !== ' ') {
    rowNum = Math.floor(Math.random() * 3);
    colNum = Math.floor(Math.random() * 3);
    idx = colNum + (rowNum * 3);
  }
  return idx;
}

/**
 * Randomly generates a space for the "computer" to choose on the game
 * board and then marks that space with COMPUTER_CHAR
 * @returns {undefined}
 */

function getComputerInput(board, char) {
  let idx;
  let rowNum;
  let colNum;
  if (offensiveOpportunity(board)) {
    idx = offensiveOpportunity(board);
  } else if (defensiveOpportunity(board)) {
    idx = defensiveOpportunity(board);
  } else idx = chooseRandom(board);

  // Mark the space once we have a valid choice.
  rowNum = Math.floor(idx / 3);
  colNum = idx - (rowNum * 3);
  board[idx] = char;
  console.log(`The computer chose space (${rowNum + 1}, ${colNum + 1})`);
}

/**
 * Calculates if the supplied character has a winning combination anywhere
 * on the board
 * @param {string} char The character that the player (or computer) is using.
 */
function isWinner(board, char) {
  for (let combo of WINNING_COMBOS) {
    let [idxOne, idxTwo, idxThree] = combo;
    if (
      board[idxOne] === char &&
      board[idxTwo] === char &&
      board[idxThree] === char
    ) return true;
  }
  // If a winning combo isn't found return false
  return false;
}

// If it's a winning board, display the winner.
// If the board is full, display tie.
function logResult(board, userInfo) {
  console.clear();
  if (isWinner(board, userInfo.firstPlayerChar)) console.log(`${userInfo.firstPlayer} wins.\n`);
  else if (isWinner(board, userInfo.secondPlayerChar)) console.log(`${userInfo.secondPlayer} wins.\n`);
  else console.log("It's a tie game.\n");
  displayBoard(board);
  console.log('\n\n');
}

function playAgain() {
  let playAgain = readlineSync.question('Would you like to play again? (yes or no) ');
  while (!['yes', 'no'].includes(playAgain)) {
    console.log('Error: please input a valid response');
    playAgain = readlineSync.question('Would you like to play again? (yes or no) ');
  }
  return playAgain;
}

/**
 * Makes the computer prevent at least one potential winning path
 * that the user could do on their next move by choosing the square
 * that prevents the user from winning.
 * @returns {number || null}
 */

function defensiveOpportunity(board) {
  let missingSquare;
  for (let combo of WINNING_COMBOS) {
    let count = 0;
    let [idxOne, idxTwo, idxThree] = combo;
    if (board[idxOne] === FIRST_PLAYER_CHAR) count += 1;
    else missingSquare = idxOne;
    if (board[idxTwo] === FIRST_PLAYER_CHAR) count += 1;
    else missingSquare = idxTwo;
    if (board[idxThree] === FIRST_PLAYER_CHAR) count += 1;
    else missingSquare = idxThree;
    // Decrement count if the other player's char is 1 of 3 spaces in the combo.
    if ([
      board[idxOne],
      board[idxTwo],
      board[idxThree]].includes(SECOND_PLAYER_CHAR)) count -= 1;
    if (count === 2) return missingSquare;
  }
  return null;
}

/**
 * Makes the computer prevent at least one potential winning path
 * that the user could do on their next move by choosing the square
 * that prevents the user from winning.
 * @returns {number || null}
 */

function offensiveOpportunity(board) {
  let missingSquare;
  for (let combo of WINNING_COMBOS) {
    let count = 0;
    let [idxOne, idxTwo, idxThree] = combo;
    if (board[idxOne] === SECOND_PLAYER_CHAR) count += 1;
    else missingSquare = idxOne;
    if (board[idxTwo] === SECOND_PLAYER_CHAR) count += 1;
    else missingSquare = idxTwo;
    if (board[idxThree] === SECOND_PLAYER_CHAR) count += 1;
    else missingSquare = idxThree;
    // Decrement count if the other player's char is 1 of 3 spaces in the combo.
    if ([
      board[idxOne],
      board[idxTwo],
      board[idxThree]].includes(FIRST_PLAYER_CHAR)) count -= 1;
    if (count === 2) return missingSquare;
  }
  return null;
}

function chooseFirstPlayer() {
  console.clear();
  let first = readlineSync.question("Who should go first? Enter 'Computer' or 'User': ");

  while (!['Computer', 'User'].includes(first)) {
    console.log("Error: Invalid Answer.");
    first = readlineSync.question("Please enter 'Computer' or 'User'");
  }
  return first;
}

// Code
// ----------------------------------------------------------------------------
// Outer Game Loop: Continues until the user explicitly states they don't
// want to play again.
while (true) {
  /**
   * An array whose elements hold the state of each square in the game board.
   * @type {[number || string]}
   */
  let board = Array(9).fill(' ');

  /**
   * A manually set constant that determines the player who goes first in the
   * game. Either "User" or "Computer".
   * @type {string}
   */
  const FIRST_PLAYER = chooseFirstPlayer();

  /**
   * The character the first player uses to mark a space.
   */
  const FIRST_PLAYER_CHAR = 'x';

  /**
   * A manually set constant that determines the player who goes first in the
   * game. Either "User" or "Computer".
   * @type {string}
   */
  const SECOND_PLAYER = (FIRST_PLAYER === 'User') ? 'Computer' : 'User';

  /**
   * The character the second player uses to mark a space.
   */
  const SECOND_PLAYER_CHAR = 'o';

  /**
   * For elegance & dynamic code, place all user info in an object to
   * feed into functions.
   */
  const PLAYER_INFO = {
    firstPlayer: FIRST_PLAYER,
    secondPlayer: SECOND_PLAYER,
    firstPlayerChar: FIRST_PLAYER_CHAR,
    secondPlayerChar: SECOND_PLAYER_CHAR
  };

  // Add userChar & computerChar properties to player info for use in functions.
  PLAYER_INFO['userChar'] = (FIRST_PLAYER === 'User') ? FIRST_PLAYER_CHAR : SECOND_PLAYER_CHAR;
  PLAYER_INFO['computerChar'] = (FIRST_PLAYER === 'User') ? SECOND_PLAYER_CHAR : FIRST_PLAYER_CHAR;

  // Inner game loop: Keeps looping until someone wins or a tie happens.
  while (true) {
    // Step 1: Display the current board
    console.clear();
    if (FIRST_PLAYER === 'User') displayBoard(board);

    // Step 2: Get the user and computer's choices for their spaces
    // on the board.
    getInput(board, FIRST_PLAYER, PLAYER_INFO);
    if (FIRST_PLAYER === 'Computer') displayBoard(board);
    if (isWinner(board, FIRST_PLAYER_CHAR) || isTie(board)) break;

    getInput(board, SECOND_PLAYER, PLAYER_INFO);
    if (isWinner(board, SECOND_PLAYER_CHAR) || isTie(board)) break;
  }

  logResult(board, PLAYER_INFO);

  if (playAgain() === 'yes') {
    continue;
  } else break;
}
console.clear();
console.log('The game has ended. Good bye...\n');
