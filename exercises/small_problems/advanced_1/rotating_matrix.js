function addNewMatrixRows(matrix, rows) {
  for (let newRow = 0; newRow < rows; newRow++) {
    matrix.push([]);
  }
}

function addNewMatrixElements(oldMatrix, newMatrix) {
  oldMatrix.forEach(
    (oldMatrixSubArray, oldRow, oldMatrix) => {
      oldMatrixSubArray.forEach((oldMatrixEl, oldColumn) => {
        let newMatrixRow = oldColumn;
        let newMatrixColumn = oldMatrix.length - 1 - oldRow;
        newMatrix[newMatrixRow][newMatrixColumn] =  oldMatrixEl;
      });
    });
}

function rotate90(oldMatrix) {
  let rowCount = oldMatrix.length;
  let columnCount = oldMatrix[0].length;
  let newMatrix = [];
  if (rowCount === 1 && columnCount === 1) {
    return oldMatrix.map(el => el.slice());
  }
  addNewMatrixRows(newMatrix, columnCount);
  addNewMatrixElements(oldMatrix, newMatrix);
  return newMatrix;
}


let matrix1 = [[1, 5, 8], [4, 7, 2], [3, 9, 6]];

let matrix2 = [[3, 7, 4, 2],  [5, 1, 0, 8]];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
