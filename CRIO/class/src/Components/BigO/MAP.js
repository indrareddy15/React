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
    let map = new Map()
    
}


console.log(singleNumber([2,1,2,3,3]))