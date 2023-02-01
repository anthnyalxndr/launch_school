/*
Some people believe that Fridays that fall on the 13th day of the month are
unlucky days. Write a function that takes a year as an argument and returns the
number of Friday the 13ths in that year.

You may assume that the year is greater
than 1752, which is when the United Kingdom adopted the modern Gregorian
Calendar. You may also assume that the same calendar will remain in use for
the foreseeable future.
*/

// Unoptimal solution, loop through every Friday of the year
// function fridayThe13ths(year) {
//   let sum = 0;

//   // The current friday being evaluated
//   let curFriday;

//   let dayOfMonth = 1;

//   // Set curFriday to the first Friday of the year.
//   while (!curFriday) {
//     let date = new Date(`01/0${dayOfMonth}/${year}`);
//     if (date.getDay() === 5) {
//       curFriday = date;
//     } else dayOfMonth += 1;
//   }

// Loop through Fridays in the year and increment sum if the day of the month
//   // equals 13
//   while (curFriday.getFullYear() === year) {
//     if (curFriday.getDate() === 13) sum += 1;
//     curFriday.setDate(curFriday.getDate() + 7);
//   }

//   // Return the number of occurences in dayOfMonth of 13.
//   return sum;
// }

// Optimal solution, loop through every 13th of the month
function fridayThe13ths(year) {
  let sum = 0;
  for (let month = 0; month < 12; month++) {
    let curDate = new Date(`${month}/${13}/${year}`);
    if (curDate.getDay() === 5) sum += 1;
  }
  return sum;
}


// Examples
console.log(fridayThe13ths(1986) === 1);      // 1
console.log(fridayThe13ths(2015) === 3);      // 3
console.log(fridayThe13ths(2017) === 2);      // 2
