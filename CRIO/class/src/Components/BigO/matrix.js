// Check the magic Square or not

function magicSquare(matrix) {
  // find Sum of D1 and D2
  let sumOfDia1 = 0;
  let sumOfDia2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    sumOfDia1 += matrix[i][i];
    sumOfDia2 += matrix[i][matrix.length - 1 - i];
  }
  if (sumOfDia1 !== sumOfDia2) {
    return false;
  }

  // sum of rows and cols
  for (let j = 0; j < matrix.length; j++) {
    let rowSum = 0;
    let colSum = 0;
    for (let k = 0; k < matrix.length; k++) {
      rowSum += matrix[j][k];
      console.log("Row sum", matrix[j][k]);
      colSum += matrix[k][j];
      console.log("Col Sum", matrix[k][j]);
    }

    if (rowSum !== colSum || colSum !== rowSum) {
      return false;
    }
  }
  return true;
}

let magic = magicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
]);

console.log(magic ? "Magic Square" : "Not a Magic Square");


