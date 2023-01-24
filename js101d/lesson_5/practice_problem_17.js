/**
 * Practice Problem 17
 * ----------------------------------------------------------------------------
 * Note: In the real world you should use the node-uuid to create a UUID since
 * a manual implementation results in a higher chance of conflicting UUIDs than
 * allowed for.
 *
 * A UUID is a type of identifier often used to uniquely identify items, even
 * when some of those items were created on a different server or by a different
 * application. That is, without any synchronization, two or more computer
 * systems can create new items and label them with a UUID with no significant
 * risk of stepping on each other's toes. It accomplishes this feat through
 * massiverandomization.
 *
 * The number of possible UUID values is approximately 3.4 X 10E38, which is a
 * huge number. The chance of a conflict is vanishingly small with such a large
 * number of possible values.
 *
 * Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the
 * letters a-f) represented as a string. The value is typically broken into 5
 * sections in an 8-4-4-4-12 pattern,
 * e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
 *
 * Write a function that takes no arguments and returns a string that
 * contains a UUID.
 *
 */


// Helper function to randomly generate a hexademcial number
function genRandomHex(length) {
  let hexString = '';
  // Use an array as a lookup instead of an object since we're only
  // looking up integers.
  let lookup = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < length; i += 1) {
    let rand = Math.floor(Math.random() * 16);
    hexString += lookup[rand];
  }
  return hexString;
}

// Generates a uuid
function uuid() {
  let sectionLengths = [8, 4, 4, 4, 12];
  // Loop over section lengths and generate UUID section
  // based on value of arr element.
  let uuid = sectionLengths.reduce((prev, cur, idx, arr) => {
    let delim = (idx < arr.length - 1) ? '-' : '';
    prev += genRandomHex(cur) + delim;
    return prev;
  }, '');
  return uuid;
}

// Algo
// - Randomly generate 32 hexadecimal (base 16) numbers.
//     - Math.random?
//       - If a - f can't be explicitly produced, lookup
//         Math.randoms output in an object containing
//         base 10 to base 16 key-val pairs.
//           - e.g. Math.floor(Math.random() * 16)
// - Delimit with dashes in an 8-4-4-4-12
//   pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

console.log(uuid());
