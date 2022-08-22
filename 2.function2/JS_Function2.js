//NOTE THAT THIS ISN'T THE JS FOR js_test8.html!
//FUNCTION 1

//Create a new main. Js file, write a function, implement the
//following function: a string output in reverse order.
function reverseString(message) {
  let reversedMessage = "";
  for (let i = message.length - 1; i >= 0; i--) {
    reversedMessage += message[i];
  }
  return reversedMessage;
}

//=================================
//FUNCTION 2

// Create a new main.js file and write a function that does the following:
// determine whether a string is a palindrome string.
// (Palindrome, a string read from the beginning as well as from the end. For example, abcba is a palindrome string.)
function palindrome(message) {
  const reversedMessage = reverseString(message);
  return reversedMessage == message ? true : false;
}
palindrome("hello"); // should return false
palindrome("abcba"); // should return true
