// console.log("Pratice");

function capitalize(str) {
  let newStr = "";
  if (str[0] !== 0) {
    let ch = str[0].toUpperCase();
    newStr = newStr + ch;
  }
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      let ch = str[i].toUpperCase();
      newStr += ch;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// let str = "hello world Welcome to javaScript programming";
// console.log(capitalize(str));

// Two Pointer: Continuous Compression
// Whenever we comparing two elements and moving in the entire array or string

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return "not a palindrome";
    }
    left++;
    right--;
  }
  return "palindrome";
}
// console.log(palindrome("madams"));

function reverseString(str) {
  let res = str.split("");
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    let temp = res[l];
    res[l] = res[r];
    res[r] = temp;
    l++;
    r--;
  }
  return res.join("");
}

console.log(reverseString("Indra Reddy"));

function countVowels(word) {
  let count = 0;
  let vw = "aeiouAEIOU";
  for (let i = 0; i < word.length; i++) {
    if (vw.includes(word[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("Indra Reddy Ganta"));

// function rotateMatrix(matrix) {
//     let n = matrix.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//  console.log("row", matrix[i][j]);
//  console.log("column", matrix[j][i]);
//  console.log("diagonal", matrix[i][i]);  primary diagonal condition time complexity is O(n)
//  console.log("diagonal", matrix[j][j]);
// if (i === j) {
// primary diagonal condition time complexity is O(n^2)
// console.log(matrix[i][j]);
// }
//  if (i + j === n - 1) {
//  console.log("Secondary_Diagonal", matrix[i][j]); Secondary_Diagonal condition time complexity is O(n^2)
//  }
// }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log("Secondary_Diagonal", matrix[i][n - 1 - i]); // Secondary_Diagonal condition time complexity is O(n)
//     }
//   }
// }
// console.log(
//   rotateMatrix([
//     [3, 6, 9],
//     [2, 5, 8],
//     [1, 4, 7],
//   ])
// );

function magicSquares(m, matrix) {
  let sumD1 = 0;
  let sumD2 = 0;
  for (let i = 0; i < m; i++) {
    sumD1 += matrix[i][i];
    sumD2 += matrix[i][m - 1 - i];
  }

  if (sumD1 !== sumD2) {
    return false;
  }

  for (let i = 0; i < m; i++) {
    let rSum = 0;
    let cSum = 0;
    for (let j = 0; j < m; j++) {
      rSum += matrix[i][j];
      cSum += matrix[j][i];
    }

    if (rSum !== sumD1 || cSum !== sumD2) {
      return false;
    }
  }
  return true;
}

let magic = magicSquares(3, [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
]);
console.log(magic);

function findTarget(n, arr, tar) {
  let l = 0;
  let r = n - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === tar) {
      return mid;
    } else if (arr[mid] > tar) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const toFind = 7;
const n = arr.length;
console.log("findTarget", findTarget(n, arr, toFind));

function searchrarget(matrix, tar) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === tar) {
      return true;
    } else if (matrix[row][col] > tar) {
      col--;
    } else {
      row++;
    }
  }
  return -1;
}

function reverseWordsInAString(s) {
  let str = s.split(" ");
  return str.reverse().join(" ").trim();
}

// Example usage
const inputString = "  hello world  ";
console.log(reverseWordsInAString(inputString)); // Output: "world hello"

function maxProduct(nums) {
  nums.sort((a, b) => a - b);
  let case1 = nums[0] * nums[1] * nums[nums.length - 1];
  let case2 =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  return Math.max(case1, case2);
}

console.log("maxProduct", maxProduct([2, -5, 20, -10, 1, 6]));


// function sumN(n) {
//     let sum = 0;
//     for(let i = 0; i <=n; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(sumN(10));

// function nSum(n) {
//     if (n === 0) {
//         return 1
//     }
//     return (n * nSum(n -1))
// }
// console.log(nSum(5));