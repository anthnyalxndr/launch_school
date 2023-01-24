/** Directions
 * The time of day can be represented as the number of minutes
 * before or after midnight. If the number of minutes is positive,
 * the time is after midnight. If the number of minutes is negative,
 * the time is before midnight.
 * Write a function that takes a time using this minute-based format
 * and returns the time of day in 24 hour format (hh:mm). Your function
 * should work with any integer input.
 * You may not use javascript's Date class methods.
 */
function padZeroes(number) {
  if (number < 10) {
    return '0' + String(number);
  }
  return String(number);
}

function timeOfDay(minutes) {
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  let sign = Math.sign(minutes);
  minutes = Math.abs(minutes);
  let days = Math.floor(minutes / (HOURS_PER_DAY * MINUTES_PER_HOUR));

  // Subtract the minutes in days to update the minutes var.
  minutes -= days * (HOURS_PER_DAY * MINUTES_PER_HOUR);

  let hours = Math.floor(minutes / MINUTES_PER_HOUR);

  // Subtact the minutes in hours to update the minutes var.
  minutes -= hours * MINUTES_PER_HOUR;

  // Adjust minutes and hours based on sign of minutes
  // If the sign of the arg is negative,
  // the time is before midnight and therefore we need to subtract minutes,
  // hours, etc from 24: 00.and vice versa.
  if (sign < 0) {
    hours = 23 - hours;
    minutes = 60 - minutes;
  }

  // Format and return the time.
  hours = padZeroes(hours);
  minutes = padZeroes(minutes);
  let time = `${hours}:${minutes}`;
  return time;
}

// Examples
function logExampleResults() {
  console.log(timeOfDay(0));// === "00:00");
  console.log(timeOfDay(-3));// === "23:57");
  console.log(timeOfDay(35));// === "00:35");
  console.log(timeOfDay(-1437));// === "00:03");
  console.log(timeOfDay(3000));// === "02:00");
  console.log(timeOfDay(800));// === "13:20");
  console.log(timeOfDay(-4231));// === "01:29");
}
logExampleResults();

/** Further Exploration:
 * How would you approach this problem if you were allowed
 * to use JavaScript's Date class? Suppose you also needed
 * to consider the day of week? (Assume that deltaMinutes
 * is the number of minutes before or after midnight between
 * Saturday and Sunday; in such a method, a deltaMinutes value
 * of -4231 would need to produce a return value of Thursday 01:29.)
 */

function timeOfDay2(deltaMinutes) {
  const MILLISECONDS_PER_MINUTE = 60000;
  const DAY_OF_WEEK_MAP = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Initialize a date object to our starting time of Sunday 00:00
  const baseDate = new Date('January 22, 2023 00:00:00');

  // convert baseDate to epoch milliseconds with valueOf method
  // and subtract milliseconds from that to get the new date.
  const newDate = new Date(baseDate.valueOf()
    + (deltaMinutes * MILLISECONDS_PER_MINUTE));

  let dayOfWeek = DAY_OF_WEEK_MAP[newDate.getDay()];
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  return `${dayOfWeek} ${padZeroes(hours)}:${padZeroes(minutes)}`;
}

// Examples
console.log(timeOfDay2(-4231) === 'Thursday 01:29'); // => true
