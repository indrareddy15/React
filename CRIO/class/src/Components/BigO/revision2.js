function searchTarget(arr, tar) {
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === tar) {
  //         return arr[i]
  //     }
  // }
  // return -1

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === tar) {
      return mid;
    } else if (arr[mid] < tar) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let newArr = searchTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
console.log(newArr);

function stringCompres(str) {
  let result = "";
  let start = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === start) {
      count++;
    } else {
      result += start + count;
      start = str[i];
      count = 1;
    }
  }
  result += start + count;
  return result;
}

let strCmp = stringCompres("abbcccdddd");
console.log(strCmp);

function stringCompression(str) {
  let result = "";
  let start = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === start) {
      count++;
    } else {
      result += start + count;
      start = str[i];
      count = 1;
    }
  }

  result += start + count;

  return result;
}

function matrixTraversal(
  matrix,
  currPosRow,
  currPosCol,
  dirToMove,
  stepsToMove
) {
  let res = [];
  for (let i = 0; i < stepsToMove; i++) {
    if (dirToMove === 3) {
      currPosCol--;
    } else if (dirToMove === 1) {
      currPosCol++;
    } else if (dirToMove === 4) {
      currPosRow--;
    } else if (dirToMove === 2) {
      currPosRow++;
    }

    if (
      currPosRow < 0 ||
      currPosRow < 0 ||
      currPosCol >= matrix.length ||
      currPosCol >= matrix[0].length
    ) {
      res = [];
      res.push(-1);
      return res;
    }
    res.push(matrix[currPosRow][currPosCol]);
  }
  return res;
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrixTraversal(mat, 1, 1, 2, 2));

function swap(matrix, r1, c1, r2, c2) {
  let temp = matrix[r1][c1];
  matrix[r1][c1] = matrix[r2][c2];
  matrix[r2][c2] = temp;
}

function transposeMat(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      swap(matrix, i, j, j, i);
    }
  }
}

function reverseRow(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[0].length - 1;

    while (left < right) {
      swap(matrix, i, left, i, right);
      left++;
      right--;
    }
  }
}

function rotateImage(n, matrix) {
  transposeMat(matrix);
  reverseRow(matrix);

  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateImage(matrix));

function printTrianglePattern(n) {
  let pattern = [];
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    pattern.push(row.trim());
  }
  return pattern;
}

// Sample input
const n = 4;
const pattern = printTrianglePattern(n);
console.log(pattern);

function maxProduct(n, nums) {
  let max = -1;
  let secondMax = -1;

  for (const ele of nums) {
    if (ele >= max) {
      secondMax = max;
      max = ele;
    } else if (ele >= secondMax) {
      secondMax = ele;
    }
  }
  return (max - 1) * (secondMax - 1);
}

console.log(maxProduct(4, [3, 4, 5, 2]));

function robotReturnToOrigin(moves) {
  let row = 0;
  let col = 0;

  for (let move of moves) {
    if (move === "U") {
      row--;
    } else if (move === "D") {
      row++;
    } else if (move === "L") {
      col--;
    } else if (move === "R") {
      col++;
    }
  }
  if (row === 0 && col === 0) {
    return true;
  }
  return false;
}

console.log(robotReturnToOrigin("UDLR"));
