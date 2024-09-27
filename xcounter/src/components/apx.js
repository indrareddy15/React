function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateArray(n, k, nums) {
    k = k % n; // Normalize k
    reverse(nums, 0, n - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, n - 1); // Reverse the rest
}

// Input handling
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
});

rl.on('close', () => {
    const [n, k] = inputLines[0].split(' ').map(Number);
    const nums = inputLines[1].split(' ').map(Number);
    rotateArray(n, k, nums);
    console.log(nums.join(' '));
});


/gantaindrareddy83-ME_DSA_INTERVIEW_LEVEL1_PACK_101-12581cc8-9a70-4079-96d0-abd0522786b0/user/RotateArray.js:95
*/
  

SyntaxError: Unexpected end of input
    at wrapSafe (internal/modules/cjs/loader.js:1029:16)
    at Module._compile (internal/modules/cjs/loader.js:1078:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1143:10)
    at Module.load (internal/modules/cjs/loader.js:979:32)
    at Function.Module._load (internal/modules/cjs/loader.js:819:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47