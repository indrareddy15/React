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

function findSubarrayWithSum(arr, s) {
  let list = [];
  let sum = 0;
  let j = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    while (j < n && sum > s) {
      sum -= arr[j];
      j++;
    }
    if (sum === s && i >= j) {
      list.push(j + 1);
      list.push(i + 1);
      break;
    }
  }

  if (list.length === 0) {
    list.push(-1);
  }

  return list;
}

function subarraySum(arr, n, s) {
  let res = [];
  let low = 0;
  let high = 0;
  let currSum = 0;

  while (high < n) {
    currSum += arr[high];

    while (currSum > s && low < high) {
      currSum -= arr[low];
      low++;
    }

    if (currSum == s) {
      res.push(low + 1);
      res.push(high + 1);
      return res;
    }

    high++;
  }

  res.push(-1);
  return res;
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar0 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let n = input_ar0[0];
    let s = input_ar0[1];
    let arr = new Array(n);
    let input_ar1 = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    let res = obj.subarraySum(arr, n, s);
    let ans = "";
    for (let i = 0; i < res.length; i++) {
      ans += res[i];
      ans += " ";
    }
    console.log(ans);
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 */

class Solutions {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    let result = [];
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < n) {
      sum += arr[right];

      while (sum > s && left < right) {
        sum -= arr[left];
        left++;
      }

      if (sum == s) {
        result.push(left + 1);
        result.push(right + 1);
        return result;
      }
      right++;
    }
    result.push(-1);
    return result;
  }
}

class DupSolution {
  duplicates(arr, n) {
    let abc = {};
    let lst = [];

    for (let i = 0; i < n; i++) {
      if (arr[i] in abc) {
        abc[arr[i]] += 1;
      } else {
        abc[arr[i]] = 1;
      }
    }

    for (let x in abc) {
      if (abc[x] > 1) {
        lst.push(parseInt(x));
      }
    }

    if (lst.length === 0) {
      lst.push(-1);
    }

    lst.sort((a, b) => a - b);
    return lst;
  }
}

// Example usage:
let solution = new Solution();
let arr = [2, 3, 1, 2, 3];
let n = arr.length;
console.log(solution.duplicates(arr, n)); // Output: [2, 3]

class XXX {
  duplicates(a, n) {
    // your code here
    let res = {};
    let arr = [];

    for (let i = 0; i < n; i++) {
      if (a[i] in res) {
        res[a[i]] += 1;
      } else {
        res[a[i]] = 1;
      }
    }

    for (let x in res) {
      if (res[x] > 1) {
        arr.push(parseInt(x));
      }
    }

    if (arr.length === 0) {
      arr.push(-1);
    }

    arr.sort((a, b) => a - b);
    return arr;
  }
}


var twoSum = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === target) {
      return target;
    }
  }
  return sum;
};

let data = twoSum([2, 7, 11, 15], 9);
console.log(data);