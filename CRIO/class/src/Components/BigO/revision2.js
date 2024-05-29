function searchTarget(arr, tar) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === tar) {
    //         return arr[i]
    //     }
    // }
    // return -1

    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === tar) {
            return mid
        } else if (arr[mid] < tar) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
let newArr = searchTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)
console.log(newArr)


function stringCompres(str) {
    let result = "";
    let start = str[0];
    let count = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === start) {
            count++;
        } else {
            result += start + count
            start = str[i]
            count = 1
        }
    }
    result += start + count;
    return result
}

let strCmp = stringCompres("abbcccdddd")
console.log(strCmp)


function stringCompression(str) {
  let result = "";
  let start = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === start) {
      count++;
    } else {
      result += start + count;
      start = str[i];
      count = 1;
    }
  }

  result += start + count;

  return result;
}