// Map is the data structure that holds the concept of key-value pair
// Keys and Values can be of different data types
// Keys cannot repeat, has to be unique
// Insert not possible if the key already exist
// update value for key
/// delete based on key
// Position doesn't matter
// Search based on Keys (generally, this is more optional) or values
// Sort is based on key
// WHEN WE USE MAP KEY WORD THE JAVASCRIPT CONVERT THE KEY INTO HASHED FORMAT (BINARY FORMAT 10101000) AND SAVED INTO LOCATION

// how do we create a Map
let map = new Map();
map.set(1, "indra"); // insertion operation
map.set(2, "reddy");
map.set(3, "ganta"); // if we want to update the value use same key and new value
map.set(3, "ycp"); // if we want to update the value use same key and new value
console.log(map);

let getingValue = map.get(2);
console.log(getingValue); // getting the value with help of key

let deleteValue = map.delete(3);
console.log(deleteValue); // delete a value

let data = map.get(3); //get => delete => update
map.delete(3);
console.log(map.set(2, data));

for (let [key, value] of map) {
  // iteration for getting key and values
  console.log(key + ":" + value);
}

let keys = map.keys(); // to get the keys
console.log(keys);

let values = map.values(); // to get the values
console.log(values);

// ES6 way of iterating
map.forEach((key, value) => {
  console.log(key + ":" + value);
});

function singleNumber(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    // Add a new entry
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      let val = map.get(arr[i]);
      val = val + 1;

      map.set(arr[i], val);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(singleNumber([2, 2, 3, 3, 1, 4, 4]));

function mostOccurringWord(arr) {
  //   let wordCount = new Map();
  //   for (let word of arr) {
  //     if (wordCount.has(word)) {
  //       wordCount.set(word, wordCount.get(word) + 1);
  //     } else {
  //       wordCount.set(word, 1);
  //     }
  //   }
  //   let maxCount = Math.max(...wordCount.values());
  //   let mostOccurringWords = Array.from(wordCount.entries())
  //     .filter(([word, count]) => count === maxCount)
  //     .map(([word, count]) => word);
  //   return mostOccurringWords.sort()[0];

  let wordCount = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!wordCount.has(arr[i])) {
      wordCount.set(arr[i], 1);
    } else {
      let val = wordCount.get(arr[i]);
      val = val + 1;
      wordCount.set(arr[i], val);
    }
  }

  let maxValue = -1;
  let maxKey = "";
  for (let [key, val] of wordCount) {
    if (val > maxValue) {
      maxValue = val;
      maxKey = key;
    }
  }
  return maxKey;
}

let arr = ["crio", "for", "learn", "a", "learn", "a"];
console.log(mostOccurringWord(arr));

function intersectionOfBasic(n, nums1, m, nums2) {
  let hashmap = new Map();

  for (const ele of nums1) {
    let freq = hashmap.get(ele) || 0;
    hashmap.set(ele, freq + 1);
  }

  let result = [];

  for (const ele1 of nums2) {
    let freq = hashmap.get(ele1) || 0;
    if (freq > 0) {
      result.push(ele1);
      hashmap.set(ele1, freq - 1);
    }
  }
  result.sort();
  return result;
}

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let dataBaisc = intersectionOfBasic(nums1.length, nums1, nums2.length, nums2);
console.log(dataBaisc);

// Intersection of Two arrays

function intersection(nums1, nums2) {
  const hashMap1 = new Map();
  const hashMap2 = new Map();

  nums1.forEach((num) => {
    hashMap1.set(num, (hashMap1.get(num) || 0) + 1);
  });

  nums2.forEach((num) => {
    hashMap2.set(num, (hashMap2.get(num) || 0) + 1);
  });

  const result = [];

  hashMap1.forEach((count, num) => {
    if (hashMap2.has(num)) {
      const minCount = Math.min(count, hashMap2.get(num));
      for (let i = 0; i < minCount; i++) {
        result.push(num);
      }
    }
  });

  result.sort((a, b) => a - b);

  return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

function mostFrequent(text) {
  let hashmap = new Map();

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    let freq = hashmap.get(char) || 0;
    hashmap.set(char, freq + 1);
  }

  let res = "";
  let maxFreq = 0;

  for (const [char, freq] of hashmap) {
    let freq = hashmap.get(char) || 0;
    if (freq > maxFreq) {
      res = char;
      maxFreq = freq;
    } else if (freq === maxFreq) {
      if (char < res) {
        res = char;
      }
    }
  }
  return [res, maxFreq];
}
