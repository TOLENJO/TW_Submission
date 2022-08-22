//NOTE THAT THIS ISN'T THE JS FOR js_test6.html!
//ARRAY

// The writer determines whether the following variables are of type array.
var a = "[a, b, c, d]";
var b = [1, 2, 3, 4];

console.log(a instanceof Array);
console.log(b instanceof Array);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
const output = a.map(multiplyBy2);
console.log(output);

function multiplyBy2(num) {
  return num * 2;
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
const caseOne = colors.join(" ");
console.log(caseOne);
const caseTwo = colors.join("+");
console.log(caseTwo);
const caseThree = colors.join();
console.log(caseThree);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
const numbers = a.sort(function (a, b) {
  return b - a;
});

// Program to find the most frequent element in the following array.
var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let strList = a.join();
let uniqueStrArray = Array.from(new Set(strList.split(",")));
let mostFrequent;
let frequency = 0;

for (let i = 0; i < uniqueStrArray.length; i++) {
  const elem = uniqueStrArray[i];
  const forMatching = new RegExp(elem, "g");
  const elemCnt = (strList.match(forMatching) || []).length;
  if (elemCnt > frequency) {
    mostFrequent = elem;
    frequency = elemCnt;
  }
}

console.log(mostFrequent);
