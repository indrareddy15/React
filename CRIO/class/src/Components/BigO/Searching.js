// Linear Searching Algorithm
const stateArray = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function linearSearchState(stateArray, val) {
  for (let i = 0; i < stateArray.length; i++) {
    if (stateArray[i] === val) {
      return i;
    }
  }
  return -1;
}

const linearSearch = linearSearchState(stateArray, "Texas");
console.log(linearSearch);

// Binary Search
// It will work only in sorted array like either ascending or descending order
// function accepts te sorted array and a value
// two variables one that points to index to left and right is end of array
// while the left pointer comes before the right pointer
// create a pointer in the middle
// if you find the value you want return the index
// if the value is too small move the left pointer up
// if the value is too large move the right pointer down
// if you never found the value then return -1

function searchBinary(sortedArray, value) {
  let start = 0;
  let end = sortedArray.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log("start :", start, "end :", end, "middle :", middle);
}

searchBinary([2, 5, 6, 9, 13, 15, 28, 30], 15);
