/**
 * Declarations
 * ---------------------------------------------------------------------------
 */
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
    // Note: I still need to update handValue every time a card is added to hand
    this.handValue = getHandValue(this.hand);
    this.showingCard = this.hand[0];
  }
  hit = function (deck) {
    this.hand.push(drawFromDeck(deck, 1)[0]);
    this.handValue = getHandValue(this.hand);
    return null;
  };
  bust = function () {
    return this.handValue > 21;
  };
}

/**
 * Class encapsulating dealer cards and game functionality.
 */
class Dealer extends Player {
  constructor(handArg) {
    super(handArg);
  }
  hit = function (deck) {
    if (this.handValue > 16) return null;
    else while (this.handValue < 17) {
      this.hand.push(drawFromDeck(deck, 1)[0]);
      this.handValue = getHandValue(this.hand);
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
    // Remove card at idxOne
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
 * A function that logs the winner of the game based on who has the higher
 * hand value.
 * @param {number} playerHandValue The total value of the player's hand.
 * @param {number} dealerHandValue The total value of the dealer's hand.
 * @returns {null} Messages are logged to the console but nothing is returned.
 */
// eslint-disable-next-line max-lines-per-function
function logWinner(playerHand, playerHandValue, dealerHand, dealerHandValue) {
  console.clear();
  if (playerHandValue > 22 && dealerHandValue < 22) {
    console.log(`Dealer wins with a hand value of ${dealerHandValue} and the following hand: [${dealerHand}].`);
    console.log(`Your hand value was ${playerHandValue} with the following hand: [${playerHand}].`);
  } else if (playerHandValue < 22 && dealerHandValue > 22) {
    console.log(`You win with a hand value of ${playerHandValue} and the following hand: [${playerHand}].`);
    console.log(`The dealer had a hand value of ${dealerHandValue} and the following hand: [${dealerHand}]`);
  } else if (playerHandValue > dealerHandValue && playerHandValue < 22) {
    console.log(`You win with a hand value of ${playerHandValue} and the following hand: [${playerHand}].`);
    console.log(`The dealer had a hand value of ${dealerHandValue} and the following hand: [${dealerHand}]`);
  } else if (playerHandValue < dealerHandValue && dealerHandValue < 22) {
    console.log(`Dealer wins with a hand value of ${dealerHandValue} and the following hand: [${dealerHand}].`);
    console.log(`Your hand value was ${playerHandValue} with the following hand: [${playerHand}].`);
  } else {
    console.log(`It's a Tie. You and the Dealer each have a hand value of ${playerHandValue}.`);
    console.log(`Dealer's Hand: [${dealerHand}]`);
    console.log(`Your hand: [${playerHand}]`);
  }
  return null;
}

/**
 * A function that asks the user if they want to play again and either restarts
 * the game or ends it.
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

/**
 * Code
 * ----------------------------------------------------------------------------
 */
while (true) {
  // Initialize the deck. No need for shuffling given that we randomly
  // select from the deck.
  /**
   * The deck of cards for the game.
   * @type {[string]}
   */
  const deck = '2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace, '.repeat(4).split(', ').slice(0, -1);

  // Initialize player and dealer hands
  let dealer = new Dealer(drawFromDeck(deck, 2));
  let player = new Player(drawFromDeck(deck, 2));

  // Player's Turn
  while (true) {
    console.clear();
    console.log(`Dealer's Shown Card: ${dealer.showingCard}\n`);
    console.log(`Your current hand [${player.hand}] has a value of ${player.handValue}\n`);

    if (player.handValue === 21) {
      break;
    }

    let decision = readlineSync.question("It's your turn. Would you like to hit or stay? ");
    while (!['hit', 'stay'].includes(decision)) {
      console.log('Error: Invalid Choice. Please input "hit" or "stay"');
      decision = readlineSync.question("Would you like to hit or stay? ");
    }
    if (decision === 'hit') {
      player.hit(deck);
    } else break; // If they don't hit, they stay, and we should exit our loop.
    if (player.bust()) { // If the player busts, break out of the loop
      break;
    }
  }

  // Dealer's turn. The dealer doesn't need to go if the player busts or has 21.
  if (player.handValue < 21 && !player.bust()) {
    dealer.hit(deck);
  }

  logWinner(player.hand, player.handValue, dealer.hand, dealer.handValue);

  // Ask if the user wants to play again
  if (playAgain() === 'yes') continue;
  else break;
}
