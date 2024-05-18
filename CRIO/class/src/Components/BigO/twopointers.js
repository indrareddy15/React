// Two Pointers pattern is used for reducing the nested loop need, reducing the Time Complexity

// Template

function twoPointer(arr) {
  // initialize the pointers. generally we start with either left = 0 , right = 0 OR left = 0 , right = len -1
  let left = 0; //not string
  let right = arr.length - 1;

  // when should we stop iterating
  // generally iterate till left < right OR right < len - 1
  while (arr < right.length - 1) {
    if (arr[left] > arr[right]) {
      // update your parents
      return false;
    }
    left++;
    right++;
  }
  return true;
}

twoPointer([2, 3, 4, 5, 6]);

function isSorted(arr) {
  // Two Pointer approach Template(reusable)

  let left = 0;
  let right = 1;

  while (arr < right.length - 1) {
    if (arr[left] > arr[right]) {
      return false;
    }
    left++;
    right++;
  }
  return true;
}

isSorted([2, 3, 4, 5, 6, 7]);

// function palindrome(str) {
//   let x = str.split("")
//   console.log(x)
//   for(let i = 0; i < x.length; i++ ) {
//     if(x[i] === x.length - 1) {
//       console.log("palindrome")
//     } else {
//       console.log("not a palindrome")
//     }
//   }
//   return x
// }

// let data = palindrome("madam")
// console.log(data)

function palindrome(str) {
  let x = str.split("");
  let start = 0;
  let end = x.length - 1;
  while (start < end) {
    if (x[start] !== x[end]) {
      console.log("not a palindrome");
      return false;
    }
    start++;
    end--;
  }
  console.log("palindrome");
  return true;
}

let data = palindrome("madam");
console.log(data);

// palindrome que by using reverse a string method
function palindromes(str) {
  let rev = str.split("").reverse("").join("");
  if (str === rev) {
    console.log("palindrome");
    return true;
  } else {
    console.log("not a palindrome");
    return false;
  }
}

let datas = palindromes("madam");
console.log(datas);

function abc(str) {
  let left = 0,
    right = str.length - 1;

  while (left !== right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let xyz = abc("madam");
console.log(xyz);
