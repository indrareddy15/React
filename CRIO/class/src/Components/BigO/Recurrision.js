function primeNumber(N) {
  for (let i = 1; i <= N; i++) {
    console.log(i);
  }
}
console.log(primeNumber(10));

var twoSum = function (nums, target) {
  for (var j = 1; j <= nums.length; j++) {
    for (var i = 0; i <= nums.length; i++) {
      for (var k = 0; k < nums.length; k++) {
        var output = nums[i] + nums[i + j + k];
        if (output === target) {
          return [i, i + j + k];
        }
      }
    }
  }
};

let data = twoSum([1, 2, 3, 4, 5, 6, 7, 8], 15)
console.log(data)
