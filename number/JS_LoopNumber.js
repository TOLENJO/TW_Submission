//=================================
//LOOP NUMBER

// Create a new index.js file and write a loop in any way to achieve the following requirements: from 0 to 20,
// determine whether the number is odd or even, and output. The output is as follows:
// 1 is odd number.
// 2 is even number.
// 3 is odd number.
// ……
// 19 is odd number.
// 20 is even number.

for (let i = 1; i < 21; i++) {
  const numProperty = i % 2 == 0 ? "even" : "odd";
  console.log(`${i} is ${numProperty} number.`);
}
