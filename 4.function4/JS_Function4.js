//=================================
//FUNCTION 4

// Create a new main.js file and write a function
// that calculates how many words a string contains.
function countWords(message) {
  let msgArray = message.split(" ");
  return msgArray.length;
}
let wordCount = countWords("Good morning, I love JavaScript."); // should return 5
console.log(wordCount);