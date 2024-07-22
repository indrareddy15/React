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

function primeNumber(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i !== 0) {
      return "Prime";
    }
  }
  return "not Prime";
}
console.log(primeNumber(11));

function primeCounts(n) {
  let count = 0;
  for (let i = 2; i * i <= n.length; i++) {
    if (n % i !== 0) {
      count += i;
    }
  }
  return count;
}
console.log("Count", primeCounts([3, 5, 7, 14, 2, 15, 21, 55]));

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (n % i === 0) return false;
  }
  return num > 1;
}

function primeCount(arr) {
  let cnt = 0;
  for (let num of arr) {
    if (isPrime(num)) {
      cnt++;
    }
  }
  return cnt;
}
console.log("Count", primeCount([3, 5, 7, 14, 2, 15, 21, 55]));

// Euclidean Algorithm;
// gcd(a,0) = a
// gcd(a,b) = gcd(b, a % b)
// gcd(36,24) = gcd(24, 36 % 24) ==> 36 % 24 = 24
//            = gcd(24 , 24)

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
function gcdArray(n, arr) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = gcd(ans, arr[i]);
  }
  return ans;
}
console.log(gcdArray("gcdArray", 4, [4, 6, 8, 16]));

//101 843 556 466
//7581 1684 3661

function coPrime(n) {
  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    if (gcd(n, i) === 1) {
      cnt++;
    }
  }
  return cnt;
}
console.log("CoPrime", coPrime(9));

function palindorme(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log("palindorme", palindorme("madams"));

function bestTime(prices) {
  let left = 0;
  let right = prices.length - 1;
  while (left < right) {
    let maxPrice = prices[right] - prices[left];
    if (maxPrice === Math.max(prices)) {
      return maxPrice;
    }
    left++;
    right--;
  }
  return 0;
}

function findPeakElement(arr) {
  let n = arr.length;
  if (n === 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  for (let i = 1; i < n - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}
console.log("findPeakElement1", findPeakElement([10, 20, 15, 2, 23, 90, 67]));
console.log("findPeakElement2", findPeakElement([1, 3, 20, 4, 1, 0]));

// A JavaScript program to find a peak element
// using divide and conquer

// A binary search based function
// that returns index of a peak element
function findPeakUtil(arr, n) {
  let l = 0;
  let r = n - 1;
  let mid;

  while (l <= r) {
    // finding the mid index by right shifting
    mid = (l + r) >> 1;

    // first case if mid is the answer
    if (
      (mid === 0 || arr[mid - 1] <= arr[mid]) &&
      (mid === n - 1 || arr[mid + 1] <= arr[mid])
    )
      break;

    // change the right pointer to mid-1
    if (mid > 0 && arr[mid - 1] > arr[mid]) r = mid - 1;
    // change the left pointer to mid+1
    else l = mid + 1;
  }

  return mid;
}

// A wrapper over recursive function findPeakUtil()
let peak = findPeakUtil([1, 3, 20, 4, 1, 0], arr.length);
console.log("Index of a peak point is " + peak);

function anagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 !== n2) {
    return false;
  }

  str1.sort();
  str2.sort();

  for (let i = 0; i < n1; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}

console.log("Anagram", anagram(["b", "a", "c"], ["c", "b", "a"]));

function findAllAnagramsInAString(s, p) {
  let pmap = new Map();

  for (let i = 0; i < p.length; i++) {
    pmap.set(p[i], (pmap.get(p[i]) || 0) + 1);
  }

  let ans = [];
  let smap = new Map();

  for (let i = 0; i < s.length; i++) {
    smap.set(s[i], (smap.get(s[i]) || 0) + 1);

    if (i >= p.length - 1) {
      if (isMapEqual(smap, pmap)) {
        let j = i - p.length + 1;
        ans.push(j);
      }

      let lastEle = s[i - p.length + 1];
      let lastEleCount = smap.get(lastEle);
      if (lastEleCount === 1) {
        smap.delete(lastEle);
      } else {
        smap.set(lastEle, lastEleCount - 1);
      }
    }
  }

  return ans;
}

function isMapEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}
console.log("Anagram", findAllAnagramsInAString("aaba", "ab"));

function frequentWords(words, k) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }

  let arr = Array.from(map.entries());

  arr.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  let anss = [];
  for (let i = 0; i < k; i++) {
    anss.push(arr[i][0]);
  }
  return anss;
}

console.log("freq", frequentWords(1, ["bus"], 1));