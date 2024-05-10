// Time Complexity is calculating the no of operations based on input
let commonEle = [];
function findCommonElement(arr1, arr2) {
  // arr1 length is 4 && arr2 lenght is 5
  for (let i = 0; i <= arr1.length; i++) {
    // => 4 operations
    for (let j = 0; j <= arr2.length; j++) {
      // => 4 * 5 = 20 operations
      if (arr1[i] === arr2[j]) {
        // => 4 * 5 = 20 operations
        commonEle.push(arr1[i]); // dependence on it ture it wii be => 1 operations
        console.log(arr1[i]);
        break;
      } // FINAL APPROX => 4 + (4 * 5) + (4 * 5) + 1
      // in terms of N and M => N + (N * M) + (N * M) + 1   => Approxmation is =>  N + 2(N * M) + 1
      // Ignore constant  N + (N * M) in every case (N * M) >= N  ==> Final TimeComplexity is O(MN)
      // both arr's are same length it will like O(N^2)
    }
  }
  return commonEle; // dependence on it false it wii be => 1
}

findCommonElement([1, 2, 3, 4], [2, 4, 6, 8]);

function N1(N) {
  for (let i = 0; i <= N; i++) {
    // N
    console.log(i);
  }
}
N1("");

function M1(M) {
  for (let i = 0; i <= M; i++) {
    // M
    console.log(i);
  }
}
M1("");

// two for loops independent of each other then it will be O(N + M)


function doubleIterate(arr) {
    for (let i = 0; i <= arr.length; i++) {  // n
        for (let j = 0; i <= arr.length; j++) {
          // n * n
          console.log(arr[j]); // n * n                ==> n + (n + n) + (n + n) Final==> n + 2 * n^2
            // Ignore constant n + n^2 
            // for every case n^2 always greater than n
        }
    }
}