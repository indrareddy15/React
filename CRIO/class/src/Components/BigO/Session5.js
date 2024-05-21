// 2D Array => Matrix

const arrar = [
  [2, 3, 4, 5],
  [6, 7, 8, 9],
];

console.log(arrar);

function iterateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // T.C is O(N * M) bcz it has rows and cols
    let rows = matrix[i];
    for (let j = 0; j < rows.length; j++) {
      let cols = rows[j];
      console.log(cols);
    }
  }
}
let matrix = [
  [10, 20],
  [40, 50],
  [60, 70],
];

function iterateRow(matrix, rowNo) {
  for (let i = 0; i < matrix[rowNo].length; i++) {
    console.log(i);
  }
}
iterateRow(
  [
    [10, 20],
    [40, 50],
    [60, 70],
  ],
  1
);

function iterateCol(matrix, colNo) {
  for (let i = 0; i < matrix[colNo].length; i++) {
    console.log(matrix[i][colNo]);
  }
}

iterateCol(
  [
    [10, 20],
    [40, 50],
    [60, 70],
  ],
  1
);

function iterateDiagonal(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}

iterateDiagonal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

function iterateDiagonal2(matrix) {
  let col = matrix.length - 1;
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row][col]);
    col--;
  }
}

iterateDiagonal2([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

let matrixs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function iterateMatrixs(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // T.C is O(N * M) bcz it has rows and cols
    let rows = matrix[i];
    for (let j = 0; j < rows.length; j++) {
      let cols = rows[j];
      console.log(cols + rows);
    }
  }
}

iterateMatrixs([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
]);

function iterateSumRow(matrix, rowNo) {
  let sum = 0
  for (let i = 0; i < matrix[rowNo].length; i++) {
    sum+= matrix[rowNo][i]
  }
  return sum
}