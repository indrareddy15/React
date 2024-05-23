function duplicates(a, n) {
  // your code here
  let newSet = new Set();
  for (let i = 0; i < n; i++) {
    if (newSet.has(a[i])) {
      return a[i];
    }
    newSet.add(a[i]);
  }
  return -1;
}

let fa = duplicates([1, 2, 2, 3, 4, 5, 5]);
console.log(fa);

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    let left = 0;
    let sum = 0;
    for (let right = 0; right < n; right++) {
      sum += arr[right];
      while (sum > s && left <= right) {
        sum -= arr[left];
        left++;
      }
      if (sum === s) {
        return [left + 1, right + 1];
      }
    }
    return [-1];
  }
}

function magicSquare(arr) {
  let sumOfD1 = 0;
  let sumOfD2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfD1 += arr[i][i];
    sumOfD2 += arr[i][arr.length - 1 - i];
  }
  if (sumOfD1 !== sumOfD2) {
    return false;
  }

  for (let j = 0; j < arr.length; j++) {
    let rowSum = 0;
    let colSum = 0;
    for (let k = 0; k < arr.length; k++) {
      rowSum += arr[j][k];
      colSum += arr[k][j];
    }
    if (rowSum !== colSum || colSum !== rowSum) {
      return false;
    }
  }
  return true;
}

let magic = magicSquare([
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
]);
console.log(magic ? "Magic Square" : "Not a Magic Square");
