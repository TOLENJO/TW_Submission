//=================================
//FUNCTION 3

// Create a new main.js file and write a function
// that outputs the incoming argument string alphabetically.
function alphabetSort(message) {
  let msgArray = [];
  for (let i = 0; i < message.length; i++) {
    msgArray.push(message[i]);
  }
  return msgArray.sort().join("");
}

let ehllo = alphabetSort("hello"); // should return 'ehllo'
console.log(ehllo);