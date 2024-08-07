let arr = [1, 2, 3, 4, 5];
arr.push(6);

function push(arr) {
  for (let i = 0; i <= arr.length; i++) {}
}

// Push always work in TimeComplexity is O(constant)

let arr1 = [1, 2, 3, 4, 5];
arr1.length = arr1.length - 1;
console.log(arr1);
// Pop always works in TimeComplexity is O(constant)

//Push and Pop are good operations

let arr2 = [1, 2, 3, 4, 5];
arr2.unshift(0);
// if array len is 5 to add a num in index[0] array will require 5 shifting operations
// if arr len is N then N shifting operations will require
// then Time complexity of unshift is O(N)

let arr3 = [1, 2, 3, 4, 5];
arr3.shift(1);
// if array len is 5 to remove a num in index[0] array will require 5-1 => 4 shifting operations
// if arr len is N then N-1 shifting operations will require
// then Time complexity of unshift is O(N-1) => O(N)

// shift and unshfit are bad operations

// Array Basic Operations
// 1). Rotation
//        Left Rotation => arr = [1,2,3,4,5] => Ans [2,3,4,5,1]
//        Right Rotation => arr = [1,2,3,4,5] => [5,1,2,3,4]

function rightRotate(arr) {
  // remove the last value
  let removeEle = arr.pop(); // Time Complexity is O(1)

  // add the removed value at the start
  arr.unshift(removeEle); // Time Complexity is O(N)
  // total is O(N + 1) remove constant i.e is O(N + 1)
  return arr;
}

let rightRes = rightRotate([1, 2, 3, 4, 5, 6]);
console.log(rightRes);

function leftRotate(arr) {
  let removedEle = arr.shift();

  arr.push(removedEle);
  return arr;
}
let leftRes = leftRotate([1, 2, 3, 4, 5, 6]);
console.log(leftRes);

// Reverse the array
// Time Complexity is O(N)
function reverseArr(arr) {
  //
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }

  // case 2: Time Complexity is O(N)
  return arr.reverse();
}
console.log(reverseArr([1, 2, 3, 4, 5, 6]));

// SORTING Array
function sortArray(arr) {
  return arr.sort();
}

console.log(sortArray([4, 2, 1, 5, 7, 10]));

// FIND THE ELEMENT

function findElement(x, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

let data = findElement(5, [1, 8, 2, 4, 5]);
console.log(data);

function findPeaks(arr) {
  let peaks = [];
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    if (i === 0 && arr[i] > arr[i + 1]) {
      peaks.push(arr[i]);
    } else if (i === N - 1 && arr[i] > arr[i - 1]) {
      peaks.push(arr[i]);
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peaks.push(arr[i]);
    }
  }

  return peaks;
}

let data1 = findPeaks([4, 2, 3, 1, 5, 6, 4]);
console.log(data1); // Outputs: [ 4, 3, 6 ]

function test(N, M) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      console.log(i);
    }
  }

  // for (let i = 0; i < N; i++) {
  //   for (let j = 0; j < M; j++) {
  //     console.log(i);
  //   }
  // }
}

test(10, 10);

function extractNum(N, arr) {
  let newArr = [];
  for (let str of arr) {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) >= "0" || str.charAt(i) <= "9") {
        newArr.push(str);
        break;
      }
    }
  }
  return newArr;
}
let data2 = extractNum(["a", 3, "long", 17, " crio", "dsa", 100, 20]);
console.log(data2);

// function extractNum(N, arr) {
//   let newArr = [];
//   for (let str of arr) {
//     let flag = true;
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === "-") {
//         if (i !== 0 && str.length === 1) {
//           flag = false;
//           break;
//         }
//       } else if (str.charAt(i) >= 0 || str.charAt(i) <= 9) {
//         flag = false;
//         break;
//       }
//     }
//   }
// }
