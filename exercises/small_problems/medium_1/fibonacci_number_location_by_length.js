function findFibonacciIndexByLength(digitCountBigInt) {
  let currentDigitCount = 1n;
  let lastFibonacciNum = 0n;
  let curFibonacciNum = 1n;
  let iterations = 1n;
  while (currentDigitCount < digitCountBigInt) {
    [curFibonacciNum, lastFibonacciNum] =
      [lastFibonacciNum + curFibonacciNum, curFibonacciNum];
    currentDigitCount = String(curFibonacciNum).length;
    iterations += 1n;
  }
  return iterations;
}

// Test Cases
function tests() {
  console.log(findFibonacciIndexByLength(1n) === 1n);
  console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
  console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
  console.log(findFibonacciIndexByLength(10n) === 45n);
  console.log(findFibonacciIndexByLength(16n) === 74n);
  console.log(findFibonacciIndexByLength(100n) === 476n);
  console.log(findFibonacciIndexByLength(1000n) === 4782n);
  console.log(findFibonacciIndexByLength(10000n) === 47847n);
}
tests();


function pedac() {
  function understandTheProblem() {/*
    I:
    O:
    Concepts:
    Rules:
    Questions:
  */}

  function DSA() {/*
    Algorithm:
    Data Structures:
  */}

  function _(...funcs) {
    for (let func of [funcs]) func();
  }
  _(understandTheProblem, DSA);
}
pedac();
