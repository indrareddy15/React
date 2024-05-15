// Space Complexity :  how much of the memory(space) does it takes
// SPC is measured on based on input size

function test() {
  return 1; // SPC is O(constant) or O(1) or O(C) bcz no var is there so no space
}

function add(a, b) {
  let sum = a + b; // based on i/p only one var SPC is O(1)
  return sum;
}

function primeNumber(arr) {
  // arr is [1,2,3] we are using one var so
  for (let i = 0; i <= arr.length; i++) {
    // that is let i = 0 which is only 1,2,3  SPC is O(1)
    console.log(arr[i]);
  }
}

function search(arr, n, target) {
  for (let i = 0; i <= n; i++) {
    // SPC is O(1) bcz we are using only one variable
    if (arr[i] === target) {
      console.log("first");
    }
  }
}
search();

function findCommonElement(arr1, arr2) {
  let commonEle = []; // var 1
  for (let i = 0; i <= arr1.length; i++) { // var 2
    for (let j = 0; j <= arr2.length; j++) { // var 3
      if (arr1[i] === arr2[j]) {
        commonEle.push(arr1[i]);
        console.log(arr1[i]);
      }
    }
    console.log(commonEle);
  }
}

findCommonElement([1, 2, 3, 4], [2, 4, 6, 8]);
