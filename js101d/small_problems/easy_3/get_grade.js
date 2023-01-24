// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for
// negative values or values greater than 100.

function getGrade(grade1, grade2, grade3) {
  const avg = (grade1 + grade2 + grade3) / 3;
  const lookup = Math.floor(avg / 10);
  const grades = ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A', 'A'];
  return grades[lookup];

}

// Examples
console.log(getGrade(95, 90, 93) === "A");    // true
console.log(getGrade(50, 50, 95) === "D");    // true
