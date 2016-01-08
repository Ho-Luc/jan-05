
function guessingGame() {
var question1 = document.getElementById('resultOne');
var question2 = document.getElementById('resultTwo');
var question3 = document.getElementById('resultThree');
var question4 = document.getElementById('resultFour')
var totalCorrect = document.getElementById('totalCorrect')

var user = prompt('Hi, what is your name?');
var counter = 0;
console.log('The user\'s name is: ' + user);
alert('Greetings, ' + user + ' nice to meet you! I want to play a game, involving asking questions, to help you get to know me.');

function firstQuestion() {
var question1 = prompt(user + ' to answer these questions, type yes or no. My first question is am I a native Washingtonian?');
console.log('The user response to the first question is: '+ question1);
if (question1.toUpperCase() === "Y" || question1.toUpperCase() === 'YES'){
  //alert('Good job ' + user + ' you got it right!');
  resultOne.textContent = 'Good job ' + user + ' you got it right!';
  counter += 1;
} else {
  //alert('Good guess ' + user + ', but you got it wrong!');
  resultOne.textContent = 'Good guess ' + user + ', but you got it wrong!';
 };
}

function secondQuestion() {
var question2 = prompt(user + ' my second question is, do I drive when commuting to school?');
console.log('The user response to the second question is: '+ question2);
if (question2.toUpperCase() === "N" || question2.toUpperCase() === 'NO') {
  //alert('Correct ' + user + ' you got it right, I take the train instead.');
  resultTwo.textContent = 'Correct ' + user + ' you got it right, I take the train instead.';
  counter += 1;
} else {
  //alert(user + ', you got it wrong!');
  resultTwo.textContent = user + ', you got it wrong!'
 };
}

function thirdQuestion() {
var question3 = prompt('My third question is, did I decide to do Code Fellows while on a beach in Maui?');
console.log('The user response to the third question is: '+ question3);
if (question3.toUpperCase() === "Y" || question3.toUpperCase() === 'YES'){
  //alert('You got it right! I had an epiphany when I was in Maui two months ago. A good friend talked me into making a life change.');
  resultThree.textContent = 'You got it right! I had an epiphany when I was in Maui two months ago. A good friend talked me into making a life change.';
  counter += 1;
} else {
  //alert('You got it wrong ' + user);
  resultThree.textContent = 'You got it wrong ' + user;
 };
}

function fourthQuestion () {
var question4 = prompt('Can you guess the number I\'m thinking of?');
console.log('The user response to the fourth question is: '+ question4);
if (question4 < '8') {
  //alert('Your guess was too low');
  resultFour = 'Your guess was too low';
} else if (question4 > '8') {
  //alert('Your guess was too high.');
  resultFour = 'Your guess was too high.';
} else {
  //alert('You got it right!');
  resultFour.textContent = 'You got it right!';
  counter += 1;
};
}
firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
//totalCorrect();

totalCorrect.textContent = 'You got ' + counter + ' out of 4 questions correct.';
//alert('You got ' + counter + ' out of 4 questions correct.');
}
guessingGame();
