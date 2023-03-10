/**
 * Write a function that takes an Array as an argument and reverses its
 * elements in place. That is, mutate the Array passed into this method.
 * The return value should be the same Array object.
 * You may not use Array.prototype.reverse().
 */

function reverse(arr) {
  // Reverse elements in-place
  for (let idx = 0; idx < Math.floor(arr.length / 2); idx += 1) {
    [arr[idx], arr[arr.length - idx - 1]] = [
      arr[arr.length - idx - 1],
      arr[idx],
    ];
  }
  return arr;
}

// Examples
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
