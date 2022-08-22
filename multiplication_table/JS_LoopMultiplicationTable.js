//NOTE THAT THIS ISN'T THE JS FOR js_test7.html!
//LOOP MULTIPLICATION

// Create new index.js file, write program output 9*9 times table. The output is as follows：
// 1*1=1
// 2*1=2 2*2=4
// 3*1=3 3*2=6 3*3=9
// ……
// 9*1=9 9*2=18 9*3=27 …… 9*9=81

let tabOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tabTwo = tabOne;
let consoleMsg = "";
let xTable = {};

for (let i = 0; i < tabOne.length + 1; i++) {
  xTable[i] = consoleMsg;

  for (let j = 1; j < i + 1; j++) {
    const res = i * j;
    consoleMsg = `${i}*${j}=${res} `;
    xTable[i] += consoleMsg;
  }

  consoleMsg = "";
}

for (const ele in xTable) {
  if (xTable[ele] != "") {
    console.log(xTable[ele]);
  }
}
