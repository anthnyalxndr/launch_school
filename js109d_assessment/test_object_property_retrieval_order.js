let pets = {
  jerry: { species: "cat", age: 3 },
  luna: { species: "dog", age: 5 },
  goldin: { species: "fish", age: 1 },
};

/**
 * Given an array containing subarrays of object keys, test whether or not
 * the object keys for each index are strictly equal across all subarrays for
 * each index.
 * @param {Array[string]} arr An array containing subarrays of object keys.
 * @returns {boolean}
 */
function elementsAreEqual(arr) {
  for (let comparisonIdx = 0,
    outerIdx = comparisonIdx + 1,
    innerIdx = 0;
    comparisonIdx < arr.length - 1;
    comparisonIdx++, outerIdx = comparisonIdx + 1) {
    while (outerIdx < arr.length) {
      while (innerIdx < arr[outerIdx].length) {
        if (arr[comparisonIdx][innerIdx]
          !== arr[outerIdx][innerIdx]) return false;
        innerIdx += 1;
      }
      innerIdx = 0;
      outerIdx += 1;
    }
  }
  return true;
}

/**
 * Tests whether the keys in an object are accessed in the same order
 * over a given number of repetitions.
 * @param {*} obj The object to test the key access order for.
 * @param {*} reps The number of times to test whether the same object
 * keys are accessed in the same order.
 * @returns {boolean} whether or not the objects have the same order.
 */
function testObjOrder(obj, reps) {
  let result = [];
  let subarray = [];
  for (let count = 0; count < reps; count++) {
    for (let key in obj) {
      let subObj = obj[key];
      for (let key in subObj) {
        subarray.push(key);
      }
    }
    result.push(subarray);
    subarray = [];
  }
  return elementsAreEqual(result);
}

let results = testObjOrder(pets, 3);
console.log(results);
