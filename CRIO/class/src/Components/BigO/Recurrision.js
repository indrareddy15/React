function primeNumber(N) {
  for (let i = 1; i <= N; i++) {
    console.log(i);
  }
}
console.log(primeNumber(10));

var twoSum = function (nums, target) {
  for (var j = 1; j <= nums.length; j++) {
    for (var i = 0; i <= nums.length; i++) {
        var output = nums[i] + nums[i + j ];
        if (output === target) {
          return [i, i + j ];
        }
    }
  }
};

let data = twoSum([1, 2, 3, 4, 5, 6, 7, 8], 15);
console.log(data);

function sumNatNum(N) {
  // base condition
  if (N <= 0) return 0;
  // recursion condition
  return N + sumNatNum(N - 1);
}

console.log(sumNatNum(10));

function fibonacci(N) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
}

console.log(fibonacci(5));

function fibonacciRec(N) {
  if (N <= 1) return N;
  return fibonacciRec(N - 1) + fibonacciRec(N - 2);
}

console.log(fibonacciRec(5));


function tribonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }
}

// Example usage
const n = 10; // Change the value of n to get different Tribonacci numbers
for (let i = 0; i < n; i++) {
  console.log(tribonacci(i));
}


function factorialDSA(n) {
  //implement this function
  if (n <= 1) return n;
  return n * factorialDSA(n - 1);
}