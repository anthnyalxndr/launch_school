// eslint-disable-next-line max-lines-per-function, max-statements
function binarySearch(arr, element) {
  let currentArray = arr.slice();
  let halfwayIdx = Math.floor((currentArray.length - 1) / 2);
  let currentElement = currentArray[halfwayIdx];
  let finalIdx = halfwayIdx;

  while (currentArray.length > 0) {
    currentElement = currentArray[halfwayIdx];
    let currentElementIsLess = currentElement < element;
    if (currentElementIsLess) {
      if (finalIdx === 0) return -1;
      currentArray = currentArray.slice(halfwayIdx);
    } else if (!currentElementIsLess) {
      if (finalIdx === 0) return -1;
      currentArray = currentArray.slice(0, halfwayIdx);
    }
    halfwayIdx = Math.floor(currentArray.length / 2);
    finalIdx = currentElementIsLess ? finalIdx + halfwayIdx : halfwayIdx;
    if (arr[finalIdx] === element) return finalIdx;
  }
  return currentElement === element ? finalIdx : -1;
}

let yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
function tests(yellowPages) {
  console.log(
    binarySearch(yellowPages, 'Pizzeria') === 7);                   // 7
  console.log(binarySearch(yellowPages, "Apple Store") === 0); // 0

  console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);    // -1
  console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);    // 7
  console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5) === 1);     // 1

  console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel',
    'Sue', 'Tyler'], 'Peter') === -1);  // -1
  console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel',
    'Sue', 'Tyler'], 'Tyler') === 6);  // 6
}
tests(yellowPages);

function pedac() {
  function understandTheProblem() {
    /*
    I: arr[string] || arr[num], element
    O: elementIdx
    Concepts: binary search
    Rules:
     - Iterate over array
      - Keep halving current array until you find desired element.
      - Discard 1/2 of array each iteration.
      - Don't mutate array arg
    Questions:
  */
  }

  function DSA() {
    /*
    Algorithm:
    - find halfwayIdx
    - split currentArray by halfwayIdx
    - figure out which half contains element, discard the other half, and
      reassign currentArray to new half.
    - Keep track of original idx (maybe use an object containing the curArray
      idx and original idx or just two separate variables)
    Data Structures:
  */
  }

  function _(funcs) {
    for (let func of funcs) {
      func();
    }
  }
  _([understandTheProblem, DSA]);
}
pedac();
