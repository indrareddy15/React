let str = "Hello World";

let data = str.slice(6);
console.log(data);

let data1 = str.substring(6); // negitive number will not support
console.log(data1);

let data2 = str.indexOf("o");
console.log(data2);

let data3 = str.lastIndexOf("o");
console.log(data3);

let data4 = str.includes()

// function capLet(word) {
//   let cap = word[0].toUpperCase() + word.slice(1).toLowerCase();
//   console.log(cap);
//   return cap;
// }

function capLet(word) {
   let upper = word[0].toUpperCase();
   for (let i = 1; i < word.length; i++) {
     upper += word[i];
   }
   return upper;
}

let cdata = capLet("indra expected because it's trying to iterate over");
console.log(cdata);


function capLets(sentence) {
  let words = sentence.split(" ");
  console.log(words); //["indra", "expected", "because", "it...]
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

// let cdata1 = capLets("indra expected because it's trying to iterate over");
// console.log(cdata1); // Indra Expected Because It's Trying To Iterate Over


// function captlizeWord(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// // TODO: Implement this method
// function capitaliseBasic(paragraph) {
//     let wordArr = paragraph.split(" ");
    
//   for (let i = 0; i < wordArr.length; i++) {
//     wordArr[i] = captlizeWord(wordArr[i]);
//   }
//   return wordArr.join(" ");
// }

// let tdata = capitaliseBasic(
//   "riwuria fcnejkgsnj xjiojbiruudhr Elrjsmo vhu nabchsdghsj dshiufeu dhdhhh nfhv kkslCwsm ajsndjw"
// );
// console.log(tdata);

// let str1 =
//   "Riwuria Fcnejkgsnj Xjiojbiruudhr Elrjsmo Vhu Nabchsdghsj Dshiufeu Dhdhhh Nfhv KkslCwsm Ajsndjw";
// let str2 =
//   "Riwuria Fcnejkgsnj Xjiojbiruudhr Elrjsmo Vhu Nabchsdghsj Dshiufeu Dhdhhh Nfhv Kkslcwsm Ajsndjw";

// if (str1 === str2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.replace(/\s+/g, " ").trim();
    });
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function readIntArr() {
  let str = readLine();
  str = str.split(" ");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str[i], 10));
  }
  return arr;
}

function print(x) {
  process.stdout.write(x + "\n");
}

/**
 * @param {string} word
 * @return {string}
 */
function captlizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * @param {string} paragraph
 * @return {string}
 */
function capitaliseBasic(paragraph) {
  let wordArr = paragraph.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = captlizeWord(wordArr[i]);
  }
  return wordArr.join(" ");
}

// NOTE: Please do not modify this function
function main() {
  let paragraph = readLine();
  let result = capitaliseBasic(paragraph);
  print(result);
}

/**
 * @param {string} paragraph
 * @return {string}
 */
function captlizeWords(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


// TODO: Implement this method
function capitaliseBasics(paragraph) {
  let wordArr = paragraph.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = captlizeWords(wordArr[i]);
  }
  return wordArr.join(" ");
}

function capitaliseBasices(paragraph) {
  let wordArr = paragraph.split(" ");
  console.log(wordArr);
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr.substr(1);
  }
  return wordArr.join(" ");
}

let datas = capitaliseBasic(
  "Riwuria Fcnejkgsnj Xjiojbiruudhr Elrjsmo Vhu Nabchsdghsj Dshiufeu Dhdhhh Nfhv Kkslcwsm Ajsndjw"
);
console.log(datas);
