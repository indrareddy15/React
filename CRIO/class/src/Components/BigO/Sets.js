function twoSumInSortedArray(n, arr, target_sum) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum === target_sum) {
      return "Present";
    } else if (currSum >= target_sum) {
      right--;
    } else {
      left--;
    }
  }
  return "Not Present";
}
function sortedArr(n, arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let currSum = arr[i] + arr[j];
      if (currSum === tar) {
        return "Present";
      } else {
        return "Not Present";
      }
    }
  }
}
