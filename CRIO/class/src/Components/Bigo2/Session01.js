function getIthindex(nums, j) {
  let ans = 0;

  for (let i = 0; i < j; i++) {
    if (nums[i] < nums[j]) {
      ans = Math.max(ans, nums[i]);
    }
  }
  return ans;
}

function getKthindex(nums, j) {
  let ans = 0;

  for (let k = 0; k < nums.length - 1; k++) {
    if (nums[k] > nums[j]) {
      ans = Math.max(ans, nums[k]);
    }
  }
  return ans;
}

function maxSumTriplet(n, nums) {
  let ans = 0;

  for (let j = 0; j < n; j++) {
    let ithValue = getIthindex(nums, j);

    let kthValue = getKthindex(nums, j);

    if (nums[j] + ithValue + kthValue > ans && ithValue > 0 && kthValue > 0) {
      ans = Math.max(ans, nums[j] + ithValue + kthValue);
    }
  }
  return ans;
}

console.log(maxSumTriplet(5, [1, 2, 3, 4, 5]));

function getIthIndex(nums, j) {
  let maxI = 0;
  for (let i = 0; i < j; i++) {
    if (nums[i] < nums[j]) {
      maxI = Math.max(maxI, nums[i]);
    }
  }
  return maxI;
}

function getKthIndex(nums, j) {
  let maxK = 0;
  for (let k = j + 1; k < nums.length; k++) {
    if (nums[k] > nums[j]) {
      maxK = Math.max(maxK, nums[k]);
    }
  }
  return maxK;
}

function maxSumTriplet1(n, nums) {
  let maxSum = 0;
  for (let j = 1; j < n - 1; j++) {
    let ithValue = getIthIndex(nums, j);
    let kthValue = getKthIndex(nums, j);
    if (ithValue > 0 && kthValue > 0) {
      maxSum = Math.max(maxSum, ithValue + nums[j] + kthValue);
    }
  }
  return maxSum;
}

// Example usage:
console.log(maxSumTriplet(7, [3, 7, 4, 2, 5, 7, 5])); // Output: 16
console.log(maxSumTriplet(4, [5, 2, 4, 5])); // Output: 11
console.log(maxSumTriplet(3, [3, 2, 1])); // Output: 0

function removeDuplicates(nums, n) {
    let val = 0;
    let count = 0;
    let j = 0;

    for (let i = 0; i < n; i++) {
      val = nums[i];
      count = 1;

      while (i + 1 < n && nums[i + 1] == val) {
        count++;
        i++;
      }

      if (count > 2) {
        count = 2;
      }
      while (count-- > 0) {
        nums[j] = val;
        j++;
      }
    }
    j = ``
    return [j, nums];
}
