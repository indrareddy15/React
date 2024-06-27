function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const toFind = 7;
let data = binarySearch(arr, toFind);
console.log(data);

function reverseString(str) {
  // return str.split(" ").reverse().join(" ");

  // to remove the extra spaces then we need use filter method
  let arr = str.split(" ");
  let filterArr = arr.filter((i) => i.trim() !== "");
  return filterArr.reverse().join(" ");
}

let revrse = reverseString("Indra Reddy Ganta");
console.log(revrse);

function reverseWord(str) {
  let words = str.split(" ");
  let reversedWords = words.map((word) => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

let revrseWrd = reverseWord("Indra Reddy Ganta");
console.log(revrseWrd);

function searchingTarget(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        console.log("Found");
        return { i, j };
      }
    }
  }
  return -1;
}

let mat = [
  [1, 2, 4],
  [4, 5, 6],
  [7, 8, 9],
];

let tar = 11;

let srMat = searchingTarget(mat, tar);
console.log(srMat);

function searchTargetMat(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    let curr = matrix[row][col];
    if (curr === target) {
      return true;
    } else if (curr > target) {
      col--;
    } else {
      row++;
    }
  }
}

let mat1 = [
  [1, 2, 4],
  [4, 5, 6],
  [7, 8, 9],
];

let tar1 = 11;

let srMat1 = searchTargetMat(mat1, tar1);
console.log(srMat1);

function stringCompress(n, str) {
  let f1 = str.indexOf("1");
  let l0 = str.lastIndexOf("0");

  if (f1 > l0 || f1 === -1 || l0 === -1) {
    return str;
  }
  return str.slice(0, f1) + str.slice(l0 + 1);
}

let strCompress = stringCompress("1001010");
console.log(strCompress);

function stringCompres(n, str) {
  let result = "";
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  result += str[n - 1] + count;

  return result.length < n ? result : str;
}

let strCompres = stringCompres("1001010");
console.log(strCompres);

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] === target) {
      return mid;
    } else if (nums[left] <= mid) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

const seq = [
  {
    name: "John Doe",
    age: 30,
    gender: "male",
    occupation: "Engineer",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "female",
    occupation: "Doctor",
  },
  {
    name: "Alex Johnson",
    age: 35,
    gender: "other",
    gender_description: "Non-binary",
    occupation: "Artist",
  },
  {
    name: "John Doe",
    age: 30,
    gender: "male",
    occupation: "Engineer",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "female",
    occupation: "Doctor",
  },
  {
    name: "Alex Johnson",
    age: 35,
    gender: "other",
    gender_description: "Non-binary",
    occupation: "Artist",
  },
  {
    name: "John Doe",
    age: 30,
    gender: "male",
    occupation: "Engineer",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "female",
    occupation: "Doctor",
  },
  {
    name: "Alex Johnson",
    age: 35,
    gender: "other",
    gender_description: "Non-binary",
    occupation: "Artist",
  },
];

function bt1(seq) {
  const filterMale = seq.filter((gen) => gen.gender === "male")
  console.log(filterMale); 
}

bt1()

function btn2() {
  const filteredFemale = seq.filter((gen) => gen.gender === "female")
  console.log(filteredFemale)
}
btn2()