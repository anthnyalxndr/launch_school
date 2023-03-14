// Directions
{
  /*
  You have a bank of switches before you, numbered from 1 to count.
  Every switch is connected to exactly one light that is initially off.
  You walk down the row of switches and toggle every one of them, that is,
  you flip every switch. All the lights are now on.
  You walk back to the beginning of the row and start another pass.
  On this second pass, you toggle switches 2, 4, 6, and so on.
  Now, every other light is on.
  On the third pass, you go back to the beginning again, this time toggling
  switches 3, 6, 9, and so on.
  You continue to repeat this process until you have made count passes.

  Write a program that takes one argument (the total number of switches) and
  returns an array of the lights that are on after count passes.
  */
}
function toggleSwitch(idx, lights) {
  lights[idx] = !lights[idx];
}

function toggleAllSwitches(idx, multiple, lights, totalSwitches) {
  for (let curIdx = idx; curIdx < totalSwitches; curIdx += multiple) {
    toggleSwitch(curIdx, lights);
  }
}

function lightsOn(totalSwitches) {
  let lights = Array(totalSwitches).fill(false);

  for (let idx = 0; idx < totalSwitches; idx++) {
    toggleAllSwitches(idx, idx + 1, lights, totalSwitches);
  }

  let lightNumbers = lights.map((_, idx) => idx + 1);

  return lightNumbers.filter((_, idx) => lights[idx] === true);
}

// function lightsOnOLD(totalSwitches) {
//   let lights = Array(totalSwitches).fill(false);
//   for (let idx = 0; idx < totalSwitches; idx++) {
//     let multiple = idx + 1;
//     let curIdx = idx;
//     while (curIdx < totalSwitches) {
//       switchState(curIdx, lights);
//       curIdx += multiple;
//     }
//   }
//   let lightNumbers = lights.map((_, idx) => idx + 1);

//   return lightNumbers.filter((_, idx) => lights[idx] === true);
// }

// Test Cases
{
  console.log(lightsOn(5)); // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

  console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
}

function pedac() {
  // Feedback:
  //    - Be a bit more explicit about the algorithm portion, although
  //     this was a good starting point.
  //   - Could've replaced nested loop with map, although that may be more
  //     inefficient.
  //   - Broken up the function into some helper functions
  //   - Use variable names that relate more to the problem.
  function understandTheProblem() {/*
    I: number (count of Switches)
    O: [number] An array of the lights that are on after count passes.
    Concepts:
    Rules:
    - switches go from 1 - count
    - {start: 1, incrementBy: 1} -> {start: 2, incrementBy: 2} ...
    - repeat this process until you have made count passes.
    Questions:
    - where does count come from? Is it just as many iterations as you can until
      count > totalSwitches?
  */}

  function DSA() {/*
    Algorithm:
    - Loop totalSwitches times and while iterating...
      - update startingNum
      - update currentMultiple
      - Execute a nested loop or helper and flip individual light states
    Data Structures:
    - Light will be array of booleans
    - On / off state represented by booleans
  */}

  function _(funcArr) {
    for (let func of funcArr) func();
  }
  _([understandTheProblem, DSA]);
}
pedac();
