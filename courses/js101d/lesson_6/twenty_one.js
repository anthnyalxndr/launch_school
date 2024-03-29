// Description:
// This program builds a command-line version of a
// stripped down Blackjack game.

/**
 * readlineSync object to get user input from the console.
 * @type {object}
 */
const readlineSync = require('readline-sync');

/**
 * Class encapsulating player cards and game functionality
 */
class Player {
  constructor(handArg) {
    this.hand = handArg;
    this.handValue = getHandValue(this.hand);
    this.showingCard = this.hand[0];
  }
  hit = function (deck) {
    this.hand.push(drawFromDeck(deck, 1)[0]);
    // Auto-update handValue every time a card is added to hand.
    this.handValue = getHandValue(this.hand);
    return null;
  };
  bust = function () {
    return this.handValue > 21;
  };
}

/**
 * Child class encapsulating dealer cards and game functionality.
 */
class Dealer extends Player {
  constructor(handArg) {
    super(handArg);
  }
  hit = function (deck) {
    if (this.handValue > 16) return null;
    else while (this.handValue < 17) { // Stop hitting if dealer's handValue is 17 or greater.
      this.hand.push(drawFromDeck(deck, 1)[0]);
      this.handValue = getHandValue(this.hand); // Auto-update handValue every time a card is added to hand.
    }
    return null;
  }
}

/**
 * A function that randomly draws numbers 0 - deck.length - 1
 * (i.e. the deck array's indices).
 * @param {[string]} deck The deck of cards
 * @param {number} numofCards The number of cards to draw
 * @returns {[string]} The cards that have been drawn from the deck.
 */
function drawFromDeck(deck, numofCards) {
  let cards = [];
  for (let i = 0; i < numofCards; i++) {
    let idx = Math.floor(Math.random() * (deck.length - 1));
    let card = deck[idx];
    // Remove the drawn card from the deck.
    deck.splice(idx, 1);
    // Push the drawn card to the cards array that will be returned
    cards.push(card);
  }
  return cards;
}

/**
 * A function to calculate the total value of a hand of cards (accounting
 * for aces being 1 or 11).
 * @param {[string]} hand A hand of cards
 * @returns {number} The total value of a hand of cards.
 */
function getHandValue(hand) {
  // Initialize an object to lookup card values.
  let lookup = { Jack: 10, Queen: 10, King: 10, Ace: 1, }; // Initialize Aces to 1 and add 10 later.

  // Initialize a variable to store the number of aces in the hand.
  let aces = 0;
  let handValue = 0;

  // Loop over the cards in the hand and add their value to handValue
  hand.forEach(el => {
    if (['Jack', 'Queen', 'King', 'Ace'].includes(el)) {
      if (el === 'Ace') aces += 1;
      handValue += lookup[el];
    } else handValue += Number(el);
  });

  while (aces > 0) {
    if (handValue + 10 < 22) {
      handValue += 10;
      aces -= 1;
    } else aces -= 1;
  }

  return handValue;
}

/**
 * A function that determines whether or not the player won the game.
 * @param {object} player An instance of the player class.
 * @param {object} dealer An instance of the dealer class.
 * @returns {boolean}
 */
function playerWins(player, dealer) {
  return (player.handValue < 22 && dealer.handValue > 21) ||
    (player.handValue > dealer.handValue && player.handValue < 22);
}

/**
 * A function that determines whether or not the dealer won the game.
 * @param {object} player An instance of the player class.
 * @param {object} dealer An instance of the dealer class.
 * @returns {boolean}
 */
function dealerWins(player, dealer) {
  return (player.handValue > 21 && dealer.handValue < 22) ||
    (player.handValue < dealer.handValue && dealer.handValue < 22);
}

/**
 * A function that logs the winner of the game based on who has the higher
 * hand value.
 * @param {object} player An instance of the player class.
 * @param {object} dealer An instance of the dealer class.
 * @returns {null}
 */

function logWinner(player, dealer) {
  console.clear();
  console.log('Game Over');
  console.log('---------');
  if (dealerWins(player, dealer)) {
    console.log(`Dealer wins with a hand value of ${dealer.handValue} and the following hand: [${dealer.hand}].`);
    console.log(`Your hand value was ${player.handValue} with the following hand: [${player.hand}].`);
  } else if (playerWins(player, dealer)) {
    console.log(`You win with a hand value of ${player.handValue} and the following hand: [${player.hand}].`);
    console.log(`The dealer had a hand value of ${dealer.handValue} and the following hand: [${dealer.hand}].`);
  } else {
    console.log(`It's a Tie. You and the Dealer each have a hand value of ${player.handValue}.`);
    console.log(`Dealer's Hand: [${dealer.hand}].`);
    console.log(`Your hand: [${player.hand}].`);
  }
  return null;
}

/**
 * A function that asks the user if they want to play again and returns the
 * answer
 * @returns {string}
 */
function playAgain() {
  console.log('\n');
  let answer = readlineSync.question('Would you like to play again? (yes or no) ');
  while (!['yes', 'no'].includes(answer)) {
    console.log('Error: Invalid choice. Please input "yes" or "no".');
    answer = readlineSync.question('Would you like to play again? (yes or no) ');
  }
  if (answer === 'no') {
    console.clear();
    console.log('The game has ended. Thanks for playing.');
  }
  return answer;
}

// Game begins.
while (true) {
  // Initialize the deck. No need for shuffling given that we randomly
  // select from the deck when drawing a card.
  /**
   * The deck of cards for the game. Suits are ignored since
   * they're not essential for game play.
   * @type {[string]}
   */
  const deck = '2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace, '.repeat(4).split(', ').slice(0, -1);

  // Initialize player and dealer hands
  let dealer = new Dealer(drawFromDeck(deck, 2));
  let player = new Player(drawFromDeck(deck, 2));

  // Player's Turn
  while (true) {
    console.clear();
    console.log('Welcome to Blackjack');
    console.log('--------------------\n');
    console.log(`The Dealer is showing: ${dealer.showingCard}\n`);
    console.log(`Your current hand [${player.hand}] has a value of ${player.handValue}.\n`);

    if (player.handValue === 21) {
      break;
    }

    // Get the player's decision. "hit" or "stay".
    let decision = readlineSync.question("=> It's your turn. Would you like to hit or stay? ");
    while (!['hit', 'stay'].includes(decision)) {
      console.log('Error: Invalid Choice. Please input "hit" or "stay".');
      decision = readlineSync.question("Would you like to hit or stay? ");
    }

    // Enact the player's decision.
    if (decision === 'hit') {
      player.hit(deck);
    } else break; // If you don't hit, you stay. Therefore we should exit our loop.
    if (player.bust()) { // If the player busts, break out of the loop.
      break;
    }
  }

  // Dealer's turn.
  // The dealer doesn't need to go if the player busts or has 21.
  if (player.handValue < 21 && !player.bust()) {
    dealer.hit(deck);
  }

  logWinner(player, dealer);

  // Ask if the user wants to play again
  if (playAgain() === 'yes') continue;
  else break;
}
