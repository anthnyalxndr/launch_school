/**
 * Write a function that takes a positive integer, n, as an argument
 * and logs a right triangle whose sides each have n stars. The
 * hypotenuse of the triangle (the diagonal side in the images below)
 * should have one end at the lower-left of the triangle, and the other
 * end at the upper-right.
 */

function triangle(stars) {
  let spaces = stars - 1;
  for (let round = 0; round < stars; round += 1) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars - spaces));
    spaces -= 1;
  }
}

// Examples
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
