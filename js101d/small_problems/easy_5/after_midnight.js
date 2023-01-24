/**
 * As seen in the previous exercise, the time of day can be
 * represented as the number of minutes before or after midnight.
 * If the number of minutes is positive, the time is after midnight.
 * If the number of minutes is negative, the time is before midnight.
 * Write two functions that each take a time of day in 24 hour format,
 * and return the number of minutes before and after midnight, respectively.
 * Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.
 */
let start = Date.now();
const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

function afterMidnight(timeString) {
  // Convert first half of timeString to hours
  let hours = Number(timeString[0] + timeString[1]);

  // Convert second half of Timestring to minutes
  let minutes = Number(timeString[3] + timeString[4]);


  // Create the total minutes by converting hours var to
  // minutes and adding the minutes var above.
  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  // The remainder operator allows you to get the right answer
  // when a timem of 00:00 is passed.
  return totalMinutes % MINUTES_PER_DAY;
}

function beforeMidnight(timeString) {
  let minsAfterMidnight = afterMidnight(timeString);

  // The remainder operator allows you to get the right answer
  // when a timem of 00:00 is passed.
  return (MINUTES_PER_DAY - minsAfterMidnight) % MINUTES_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
let end = Date.now();
console.log(`Duration: ${end - start}`);
