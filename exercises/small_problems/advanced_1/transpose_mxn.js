function buildNewMatrixStructure(rows, columns) {
  const newMatrix = new Array(rows);
  for (let row = 0; row < rows; row++) {
    newMatrix[row] = new Array(columns).fill(1);
  }
  return newMatrix;
}

function fillNewMatrix(matrix, newMatrix) {
  matrix.forEach((arr, row) => {
    arr.forEach((num, column) => {
      newMatrix[column][row] = num;
    });
  });
}

function transpose(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  if (rows === 1 && columns === 1) return matrix.slice();
  let newMatrix = buildNewMatrixStructure(columns, rows);
  fillNewMatrix(matrix, newMatrix);
  return newMatrix;
}

console.log(
  transpose([[1, 5, 8, 5],[4, 7, 2, 0],[3, 9, 6, 1]]));
// [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]

console.log(transpose([[1, 2, 3, 4]]));
// [[1], [2], [3], [4]]

console.log(transpose([[1], [2], [3], [4]]));
// [[1, 2, 3, 4]]

console.log(transpose([[1]]));
// [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
