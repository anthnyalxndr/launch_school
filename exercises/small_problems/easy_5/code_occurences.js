/**
 * Write a function that counts the number of occurrences of
 * each element in a given array. Once counted, log each
 * element alongside the number of occurrences. Consider the
 * words case sensitive e.g. ("suv" !== "SUV").
 */

function countOccurrences(arr) {
  let map = {};
  arr.forEach(el => {
    el = el.toLowerCase();
    map[el] = map[el] ? map[el] + 1 : 1;
  });

  let counts = Object.entries(map);

  counts.forEach(el => {
    console.log(`${el[0]} => ${el[1]}`);
  });
}

// Examplces
let vehicles = ['car', 'car', 'truck', 'Car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'Truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4;
// truck => 3;
// SUV => 1;
// motorcycle => 2;
