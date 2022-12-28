const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  // console.clear();
  console.log(`=> ${message}`);
}

// Function that returns whether the player wins
const playerWins = (choice, computerChoice) => {
  return (choice === 'rock' && ['scissors', 'lizard'].includes(computerChoice)) ||
  (choice === 'paper' && ['rock', 'spock'].includes(computerChoice)) ||
  (choice === 'scissors' && ['paper', 'lizard'].includes(computerChoice)) ||
  (choice === 'lizard' && computerChoice === 'spock') ||
  (choice === 'spock' && computerChoice === 'rock');
};

// Function that returns whether the computer wins
const computerWins = (choice, computerChoice) => {
  return (computerChoice === 'rock' && ['scissors', 'lizard'].includes(choice)) ||
  (computerChoice === 'paper' && ['rock', 'spock'].includes(choice)) ||
  (computerChoice === 'scissors' && ['paper', 'lizard'].includes(choice)) ||
  (computerChoice === 'lizard' && choice === 'spock') ||
  (computerChoice === 'spock' && choice === 'rock');
};

let score = {
  computerScore: 0,
  playerScore: 0,
  gamesPlayed: 0
};

const gameOver = (gamesPlayed, playerScore, computerScore) => {
  return gamesPlayed === 5 || playerScore === 3 || computerScore === 3;
};

const logOverallWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) prompt(`Player wins ${playerScore} to ${computerScore}`);
  else if (computerScore > playerScore) prompt(`Computer wins ${computerScore} to ${playerScore}`);
  else prompt(`It's a tie. ${computerScore} to ${playerScore}`);
};

// Function that returns whether the player wins, the computer, wins,
// or it's a tie.
const logResult = (choice, computerChoice) => {
  if (playerWins(choice, computerChoice)) {
    prompt('You win!\n');
  } else if (computerWins(choice, computerChoice)) {
    prompt('Computer wins!\n');
  } else {
    prompt("It's a tie!\n");
  }
  if (!gameOver(score.gamesPlayed, score.playerScore, score.computerScore)) {
    prompt(`The current score is player: ${score.playerScore} to computer: ${score.computerScore}\n`);
    prompt(`It's time to play game number ${score.gamesPlayed + 1}.`);
  }
  if (gameOver(score.gamesPlayed, score.playerScore, score.computerScore)) {
    prompt('The game is now over.');
    logOverallWinner(score.playerScore, score.computerScore);

  }
};


while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  console.clear();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  console.clear();
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  if (playerWins(choice, computerChoice)) score.playerScore += 1;
  if (computerWins(choice, computerChoice)) score.computerScore += 1;
  score.gamesPlayed += 1;

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  logResult(choice, computerChoice);

  if (gameOver(score.gamesPlayed, score.playerScore, score.computerScore)) {
    break;
  }


  // prompt('Do you want to play again (y/n)?');
  // let answer = readline.question().toLowerCase();
  // while (answer[0] !== 'n' && answer[0] !== 'y') {
  //   prompt('Please enter "y" or "n".');
  //   answer = readline.question().toLowerCase();
  // }
  // if (answer[0] !== 'y') break;


}
