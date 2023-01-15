// P: Understand the Problem
// ---------------------------------------------------------------
// 1) Define all Terms and Eliminate Ambiguity
//
// 2) Identify Explicit & Implicit Rules and Requirements
//     - Input:
//         - data structure(s) / data type(s):
//            - Range of values for the data type(s):
//                - Strings: Upper vs lower case, alphabetic vs
//               alphanumeric vs symbols, etc.
//                - Numbers: Negatives, NaN, Floats, Infinity, etc.
//            - Other Requirements:
//                -
//
//         - Passing by reference, value, pointer, etc:
//
//         - Default parameter value(s):
//
//         Edge Cases:
//           - empty / null / undefined vals allowed?:
//           - other data types
//
//         Common Use Cases:
//           - What type of input are generally going to expect?
//
//     - Input => Output transformation:
//         - Side Effects vs Returning a Value?
//             - Side Effect examples: Logging, Mutating an
//               Object / Variable, etc
//
//         - Other Requirements:
//             -
//
//     - Output:
//         - data structure(s) / data type(s):
//            - Range of values for the data type(s):
//                - Strings: Upper vs lower case, alphabetic vs
//                  alphanumeric vs symbols, etc.
//                - Numbers: Negatives, NaN, Floats, Infinity, etc.
//            - Other Requirements:
//                -
//
//         - Passing by reference, value, pointer, etc:
//
//    3) Establish a mental model for the problem
//        - This will be what you write out in pseudocode
//
//    4) Come up with questions you have about the problem
//        -
//
//
// E: Examples / Test Cases
// ---------------------------------------------------------------
// - Validate your understanding of the problem by ensuring the
//   the output of your test cases matches what you'd expect
//
//
// D + A: Data Structures & Algorithms
// ---------------------------------------------------------------
// - Data Structure
//     - List the data structures that could be used to transform
//       input to output.
//     - Consider whether or not a data structure is need or if a
//        problem can be solved formulaically / mathematically
//
// - Algorithm (Step by step process of input => output)
//     - Write high level pseudocode explaining the algorithm
//     - If one part of the algorithm is particularly complicated,
//       go through this process for that specific part of the
//       algorithm as if it were its own algorithm
//         - You could also make that part of the algorithm into
//           its own function
//
//
// C: Code with Intent
// ---------------------------------------------------------------
// 1) Think about the algorithm in the context of your programming
//    language
//      - Syntax / coding patterns
//      - Built-in functions / methods
//      - Language features / constraints
//      - Characterisitcs of data structures
//
// 2) Start by writing pseudocode
//      - Don't get stuck trying to write the whole program in
//        pseudocode first since that's hard to do and can't be
//        validated.
//
// 3) Test Frequently
//      - Ensure you're checking your code step-by-step as you go
//        instead of writing a bunch of code and checking it all at
//        once.
//
//      - Breaking your code into functions can make this easier
//
//      - Explicitly mark points in your code where you can test
//        values.
//          - Use breakpoints or log things to the console to ensure
//            that your variables and function outputs are what you
//            expect them to be.

// Function & Constant Declarations
// ----------------------------------------------------------------------------
/**
 * The character representing a user's space on the game board.
 * @type {string}
 */
const PLAYER_CHAR = 'x';

/**
 * The character representing the "computer's" space on the game board.
 * @type {string}
 */
const COMPUTER_CHAR = 'o';

/**
 * A nested array of 3 space combinations that result in a winner.
 * @type {[[number]]}
*/
const WINNING_COMBOS = ['012', '345', '678', '036', '147', '258', '048', '246'];

/**
 * An array whose elements hold the state of each square in the game board.
 * @type {[number || string]}
 */
const playerChoices = Array(9).fill(' ');

/**
 * A readlineSync object to get user input.
 */
const readlineSync = require('readline-sync');

/**
   * A helper function to dynamically display a row of squares with the user or
 * computer choices based on an index of the player choices array.
 * Rows go from 0 - 2.
 * @param {number} rowNum The row number of the game board.
 * @returns {string} A string representation of a row of the game board.
 */
function getRow(rowNum) {
  // Ensures rowNums align with playerChoices index;
  rowNum *= 3;
  return `  ${(rowNum / 3) + 1}  | ${playerChoices[rowNum]} | ${playerChoices[rowNum + 1]} | ${playerChoices[rowNum + 2]} |`;
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
 * @returns {undefined}
 */
function displayBoard() {
  console.log('Below is the current state of the board\n');
  console.log(`${leftPadding()}    Columns`);
  console.log(`${leftPadding()}   1   2   3`);
  console.log(`${leftPadding()} +---+---+---+`);
  console.log(' ' + getRow(0));
  console.log(`R${leftPadding()}+---+---+---+`);
  console.log('o' + getRow(1));
  console.log(`w${leftPadding()}+---+---+---+`);
  console.log('s' + getRow(2));
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
 * @returns {[number, number, number]} An array containing the row number,
 * column number, and corresponding index of the space chosen in the
 * playerChoices array.
 */
function chooseValidSpace() {
  let rowNum = getRowNum();
  let colNum = getColNum();
  let idx = (colNum - 1) + ((rowNum - 1) * 3);
  return [rowNum, colNum, idx];
}


/**
 * Requests the user to choose a space on the game board and marks the space
 * they've chosen with PLAYER_CHAR
 * @returns {undefined}
 */
function getUserInput() {
  console.log('What space would you like to mark?');
  let rowNum = getRowNum();
  let colNum = getColNum();

  // Record the choice of the user in the playerChoices array.
  let idx = (colNum - 1) + ((rowNum - 1) * 3);

  // If the space was already chosen, make the player choose a new one.
  while (playerChoices[idx] !== ' ') {
    console.log('Error: That space has already been chosen, please choose another');
    [rowNum, colNum, idx] = chooseValidSpace();
  }

  // Mark the space once we have a valid choice.
  playerChoices[idx] = PLAYER_CHAR;
}

/**
 * Randomly generates a space for the "computer" to choose on the game
 * board and then marks that space with COMPUTER_CHAR
 * @returns {undefined}
 */
function getComputerInput() {
  console.log('Getting computer input...');
  let rowNum = Math.floor(Math.random() * 3);
  let colNum = Math.floor(Math.random() * 3);
  // Record the choice of the user in the playerChoices array.
  let idx = colNum + (rowNum * 3);

  // If the board is full return to avoid an infinite loop
  if (playerChoices.filter(el => el === ' ').length === 0) return;

  // If the space was already chosen, make the player choose a new one.
  while (playerChoices[idx] !== ' ') {
    rowNum = Math.floor(Math.random() * 3);
    colNum = Math.floor(Math.random() * 3);
    idx = colNum + (rowNum * 3);
  }
  // Mark the space once we have a valid choice.
  playerChoices[idx] = COMPUTER_CHAR;
  console.log(`The computer chose space (${rowNum + 1}, ${colNum + 1})`);
}

/**
 * Returns the indices all possible 3 element combinations in the playerChoices
 * array that match the supplied character (either the user's character or the
 * computers character).
 */
function getAllCombos(char) {
  // The indices of the playerChoices array for each instance
  // of char.
  let indices = playerChoices.reduce((prev, cur, idx) => {
    if (cur === char) prev.push(idx);
    return prev;
  }, []);
  let allCombos = [];

  // 3 nested loops to get all possible combinations of 3 indices in
  // the indices array.
  for (let i = 0; i < indices.length; i++) {
    for (let j = i + 1; j < indices.length; j++) {
      for (let k = j + 1; k < indices.length; k++) {
        if (indices[k] === undefined) break;
        allCombos.push(`${indices[i]}${indices[j]}${indices[k]}`);
      }
    }
  }
  return allCombos;
}

/**
 * Calculates if the supplied character has a winning combination anywhere
 * on the board
 * @param {string} char The character that the player (or computer) is using.
 */
function isWinner(char) {
  let combos = getAllCombos(char);

  for (let combo of combos) {
    if (WINNING_COMBOS.some(el => el === combo)) return true;
  }

  // If a winning combo isn't found return false
  return false;
}

function isTie() {
  return !playerChoices.some(el => el === ' ');
}

// If it's a winning board, display the winner.
// If the board is full, display tie.
function logResult(winner) {
  if (winner) console.log(`${winner} wins.`);
  else console.log("It's a tie game.");
}
// Code
// ----------------------------------------------------------------------------
let playAgain = 'yes';
while (playAgain) {
  /**
   * The Winner of the game.
   */
  let winner;
  let tieGame;
  console.log('Let the games begin...');
  while (!winner && !tieGame) {
    // Step 1: Display the current board
    displayBoard();

    // Step 2: Get the user and computer's choices for their spaces
    // on the board.
    getUserInput();
    if (isWinner(PLAYER_CHAR)) winner = 'User';
    else if (!winner) {
      getComputerInput();
      if (isWinner(COMPUTER_CHAR)) winner = 'Computer';
    } else tieGame = isTie();
  }

  logResult(winner);
  playAgain = readlineSync.question('Would you like to play again? (yes or no) ');
  while (!['yes', 'no'].includes(playAgain)) {
    console.log('Error: please input a valid response');
    playAgain = readlineSync.question('Would you like to play again? (yes or no) ');
  }
  if (playAgain === 'yes') continue;
  else break;
}
console.log('The game has ended. Good bye...');
