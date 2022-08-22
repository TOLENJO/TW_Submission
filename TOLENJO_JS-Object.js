//NOTE THAT THIS ISN'T THE JS FOR js_test4.html!

// 1. Program and observe the following requirements:
const user = {}; // Create a null object and set its variable name as user;
user["name"] = "John"; // Add a name attribute and set its value as John;
user["surname"] = "Mike"; // Add a surname attribute and set its value as Mike;
user.name = "Peter"; // Modify the value of name attribute as Peter;
delete user.name; // Delete name attribute of user.

// 2.Program and observe the following requirements:
var fruit = { apple: 20, pear: 20, peach: 10 };
let fruitLength = Object.keys(fruit).length; //calculate how many pieces of fruit there are in the fruit object
let output = 0; //and the output should be 50.
for (const fr in fruit) {
  output += fruit[fr];
}
console.log(output);
