/**
 * Write a function that will take a short line of text, and write it to the
 * console log within a box.
 */

function logInBox(str) {
  const topOrBottom = '+' + '-'.repeat(str.length + 2) + '+';
  const padding = '|' + ' '.repeat(str.length + 2) + '|';
  const message = `| ${str} |`;
  console.log(topOrBottom);
  console.log(padding);
  console.log(message);
  console.log(padding);
  console.log(topOrBottom);
}

// Modified to truncate a message if a maxWidth argument is provided.
function logInBoxMod(str, maxWidth) {
  if (str.length > maxWidth) logInBox(str.substring(0, maxWidth - 7) + '...');
  else logInBox(str);
}

// Examples
logInBoxMod('To boldly go where no one has gone before.', 12);
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
