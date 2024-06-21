function maxSumSubArray(n, arr, k) {
  let ans = []
  for(let i = 0; i < n - k + 1; i++) {
    let currSum = 0
    for(let j =i; j < i + k; j++) {
      currSum += arr[j];
    }
    ans = Math.max(ans, currSum);
  }
  return ans
}