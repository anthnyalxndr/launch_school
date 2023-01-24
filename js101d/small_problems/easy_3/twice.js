/**
 * Write a function that returns the number provided as an argument
 * multiplied by two, unless the argument is a double number; otherwise,
 * return the double number as-is.
 */

function twice(int) {
  let length = String(int).length;
  let halwayPoint = Math.floor(length / 2);
  const isDouble = String(int).substring(0, halwayPoint)
    === String(int).substring(halwayPoint, length);

  return isDouble ? int : int * 2;
}

// Examples
console.log(twice(37) === 74);          // 74
console.log(twice(44) === 44);          // 44
console.log(twice(334433) === 668866);      // 668866
console.log(twice(444) === 888);         // 888
console.log(twice(107) === 214);         // 214
console.log(twice(103103) === 103103);      // 103103
console.log(twice(3333) === 3333);        // 3333
console.log(twice(7676) === 7676);        // 7676
