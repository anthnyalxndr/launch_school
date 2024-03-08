// /*
// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution.

// It uses a series of Caesar Ciphers based on the letters of a keyword. Each
// letter of the keyword is treated as a shift value.

// For instance, the letter 'B' corresponds to a shift value of 1, and the
// letter 'd' corresponds to a shift value of 3. In other words, the shift value
// used for a letter is equal to its index value in the alphabet. This means
// that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase
// letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character.

// To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas! keyword: meat

// Applying the Vigenere Cipher for each alphabetic character: plaintext : Pine
// appl esdo ntgo onpi zzas shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// OR plaintext: Pineapples don't go on pizzas! shift:     meatmeatme atm e at
// me atmeat result: Bmnxmtpeqw dhz'x gh ar pbldal!


// Notice that in the example, the key isn't moved forward if the character
// isn't in the alphabet.

// Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic
// characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword
// doesn't matter—in other words, the resulting encryption won't change
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


// P.I.word .type: str .rangeOfValues: any char (non alphabetic left alone)
//   .null/Undefined: return null/undefined .wrongArgType: return undefined

// P.I.key .type: str .rangeOfValues: **assume** alpha chars .null/Undefined:
//   **assume** return word. .wrongArgType: return word.


// P.Rules
// - Vigenere encrypts alphabetic text using polyalphabetic substitution
// - Takes a word to be encrypted and a key (which is a word to use for shift
//   values.)
//   - If key.length < word.length: repeat key across entire word.
// - uses a series of Caesar Ciphers based on the letters of a keyword.
// - Caesar Ciphers are **case insensitive**.
// - the shift value used for a letter is equal to its index value in the
//   alphabet.
//   - For instance, the letter 'B' corresponds to a shift value of 1, and the
//     letter 'd' corresponds to a shift value of 3
//   - a:0, b:1, c:2, d:3 ... z:25
// - Vigenere Cipher sequentially applies the Ceasar Cipher to encrypt each
//   character by using the letter and its shift value (alphaIdx)
// - Example: plaintext: Pineapples don't go on pizzas! keyword: meat

//   Applying the Vigenere Cipher for each alphabetic character: plaintext :
//   Pine appl esdo ntgo onpi zzas shift     : meat meat meat meat meat meat
//   ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// P.Definitions
// - polyalphabetic substitution
// -

// E.testCases

// DSA.A.Option1
//   - initialize the following vars:
//   - 'a'.charCodeAt
//   - encrypted: str to be returned
//   - getAlphaIdx() {}
//   - encrypt() {} // returns encrypted char
//   - Loop over plaintext 1 at a time
//     - Initialize...
//       - curCase
//       - curChar
//       - curCharCode
//       - keyCharCode
//     - encryptedChar = getEncryptedIdx() {}
//       - return (curCharCode + keyCharCode - aCharCode) % 26 + aCharCode;
//     - encrypted += formatCase(encryptedChar) DSA.D
//   - return value: encrypted = string;
//   - looping: for loop
//     */

function encryptedCharCode(curCharCode, keyCharCode) {
  const aCode = 'a'.charCodeAt();
  const summand = keyCharCode - aCode;
  const alphaIdx = (curCharCode + summand - aCode) % 26;
  return aCode + alphaIdx;
}


function isAlpha(char) {
  return /[a-z]/i.test(char);
}

function formatCase(char, referenceChar) {
  const fnName = referenceChar === referenceChar.toLowerCase()
    ? 'toLowerCase'
    : 'toUpperCase';

  return char[fnName]();
}

function* generator(key) {
  let idx = 0;

  while (true) {
    yield key[idx++ % 4];
  }
}

function getNewChar(word, idx, keyGen) {
  const curChar = word[idx].toLowerCase();
  const curCharCode = curChar.charCodeAt();
  const keyChar = keyGen.next().value;
  const keyCharCode = keyChar.toLowerCase().charCodeAt();
  const newCharCode = encryptedCharCode(curCharCode, keyCharCode);
  return String.fromCharCode(newCharCode);
}


function vigenere(word, key) {
  let encrypted = '';
  let keyGen = generator(key);

  for (let idx = 0; idx < word.length; idx++) {
    let encryptedChar;
    if (isAlpha(word[idx])) {
      let newChar = getNewChar(word, idx, keyGen);
      encryptedChar = formatCase(newChar, word[idx]);
    } else {
      encryptedChar = word[idx];
    }
    encrypted += encryptedChar;
  }
  keyGen.return();
  return encrypted;
}

const testCases = [
  {
    word: "Pineapples don't go on pizzas!",
    key: 'meat',
    answer: "Bmnxmtpeqw dhz'x gh ar pbldal!"
  }
];

testCases.forEach(({ word, key, answer }) => {
  console.log('output:', vigenere(word, key));
  console.log(vigenere(word, key) === answer);
});
