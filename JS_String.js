//NOTE THAT THIS ISN'T THE JS FOR js_test5.html!

// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = "hello";
const greet = name.toUpperCase();
console.log(` '${greet}' `);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = "good afternoon, mr mike.";

const sentenceArray = sentence.split(" ");
var cappedSentence = "";
for (let i = 0; i < sentenceArray.length; i++) {
  const word = sentenceArray[i];
  const firstLetter = word.charAt(0).toUpperCase();
  const capitalizedWord = word.replace(firstLetter.toLowerCase(), firstLetter);
  cappedSentence += `${capitalizedWord} `;
}

const sentenceArrayLength = cappedSentence.length;
var finalSentence = cappedSentence.slice(0, sentenceArrayLength - 1);
console.log(finalSentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = "￥20";
var moneyValue = money.slice(1);
console.log(moneyValue);
