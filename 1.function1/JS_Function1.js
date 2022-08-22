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

var olleh = reverseString("hello"); // should return 'olleh'
console.log(olleh);
