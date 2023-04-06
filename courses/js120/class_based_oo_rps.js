let readline = require('readline-sync');

class Player {
  move = null;
}

Player.prototype.choices = ['rock', 'paper', 'scissors'];

class Computer extends Player {
  constructor() {
    super();
  }
  choose() {
    let randomIndex = Math.floor(Math.random() * this.choices.length);
    this.move = this.choices[randomIndex];
  }
}

class Human extends Player {
  constructor() {
    super();
  }
  choose() {
    let choice;

    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      choice = readline.question();
      if (this.choices.includes(choice)) break;
      console.log('Sorry, invalid choice.');
    }

    this.move = choice;
  }
}

class RPSGame {
  human = new Human();
  computer = new Computer();
}

RPSGame.prototype.displayWelcomeMessage = function() {
  console.log('Welcome to Rock, Paper, Scissors!');
};

RPSGame.prototype.displayGoodbyeMessage = function() {
  console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
};

RPSGame.prototype.displayWinner = function() {
  console.log(`You chose: ${this.human.move}`);
  console.log(`The computer chose: ${this.computer.move}`);

  let humanMove = this.human.move;
  let computerMove = this.computer.move;

  if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
    console.log('You win!');
  } else if ((humanMove === 'rock' && computerMove === 'paper') ||
             (humanMove === 'paper' && computerMove === 'scissors') ||
             (humanMove === 'scissors' && computerMove === 'rock')) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie");
  }
};

RPSGame.prototype.playAgain = function() {
  console.log('Would you like to play again? (y/n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
};

RPSGame.prototype.play = function() {
  this.displayWelcomeMessage();
  while (true) {
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    if (!this.playAgain()) break;
  }

  this.displayGoodbyeMessage();
};

const game = new RPSGame();

game.play();
