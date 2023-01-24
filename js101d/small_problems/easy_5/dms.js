/**
 * Write a function that takes a floating point number
 * representing an angle between 0 and 360 degrees and
 * returns a string representing that angle in degrees,
 * minutes, and seconds. You should use a degree symbol
 * (˚) to represent degrees, a single quote (') to represent
 * minutes, and a double quote (") to represent seconds.
 * There are 60 minutes in a degree, and 60 seconds in a minute.
 *
 * Algorithm
 *  - Input: float
 *  - Output: string
 *  - Algo
 *     - get degrees + minutes working
 */
function padZeroes(num) {
  return num < 10 ? '0' + num : num;
}

function correctedDegrees(float) {
  let remainder = float % 360;
  return (remainder < 0) ? 360 + remainder : remainder;
}

function dms(float) {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_DEGREE = 3600;
  const DEGREE = '°';
  float = correctedDegrees(float);
  let degrees = Math.floor(float);
  let minutes = Math.floor((float - degrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (float - degrees - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);

  degrees += DEGREE;
  minutes = padZeroes(minutes) + "'";
  seconds = padZeroes(seconds) + '"';
  return degrees + minutes + seconds;
}

// console.log(dms(30) === `30°00'00"`);           // 30°00'00"
// console.log(dms(76.73) === "76°43'48\"");        // 76°43'48"
// console.log(dms(254.6) === "254°35'59\"");        // 254°35'59"
// console.log(dms(93.034773) === "93°02'05\"");    // 93°02'05"
// console.log(dms(0) === "0°00'00\"");            // 0°00'00"
// console.log(dms(360) === "360°00'00\"");          // 360°00'00" or 0°00'00"


// Further Exploration
console.log(dms(-1) === `359°00'00"`);   // `359°00'00"`
console.log(dms(400) === `40°00'00"`);  // `40°00'00"`
console.log(dms(-40) === `320°00'00"`);  // `320°00'00"`
console.log(dms(-420) === `300°00'00"`); // `300°00'00"`
