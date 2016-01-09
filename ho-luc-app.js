
function guessingGame() {
var question1 = document.getElementById('resultOne');
var question2 = document.getElementById('resultTwo');
var question3 = document.getElementById('resultThree');
var question4 = document.getElementById('resultFour')
var totalCorrect = document.getElementById('totalCorrect')

var user = prompt('Hi, what is your name?');
var counter = 0;
var newName = document.getElementById('newUser');
newName.textContent = 'Hello ' + user + ' welcome to my game!';
newName.className = 'head';
console.log('The user\'s name is: ' + user);
alert('Greetings, ' + user + ' nice to meet you! I want to play a game, involving asking questions, to help you get to know me.');


var quesData = [
  //question 1
  ['Am I a native Washingtonian','Y','YES','Good job ' + user + ' you got it right!','Good guess ' + user + ', but you got it wrong', question1],
  //question 2
  ['Do I drive when commuting to school', 'N', 'NO', 'Correct, you got it right, I take the train instead', 'No ' + user + ' you got it wrong!', question2],
  //question 3
  ['Did I decide to go to Code Fellows while in Maui', 'Y', 'YES', 'You got it right! I had an epiphany when I was in Maui two months ago. A good friend talked me into making a life change.', 'You got it wrong ' + user, question3]
  ]

function questions() {
var question1 = prompt(quesData[i][0]);
console.log('The user response to the first question is: '+ question1);
if (question1.toUpperCase() === quesData[i][1] || question1.toUpperCase() === quesData[i][2]){
  //alert('Good job ' + user + ' you got it right!');
  quesData[i][5].textContent = quesData[i][3];
  quesData[i][5].className = 'correct';
  counter += 1;
} else {
  //alert('Good guess ' + user + ', but you got it wrong!');
  quesData[i][5].textContent = quesData[i][4];
  quesData[i][5].className = 'wrong';
 };
}

for (var i = 0; i < quesData.length; i++) {
  questions();
}

var guessNumber = false;
function fourthQuestion () {
  while (guessNumber === false) {
    var question4 = prompt('Can you guess the number I\'m thinking of?');
    console.log('The user response to the fourth question is: '+ question4);
    question4 = parseInt(question4);
    if (question4 < 8) {
      resultFour.textContent = 'Your guess was too low';
    } else if (question4 > 8) {
      resultFour.textContent = 'Your guess was too high.';
    } else {
      resultFour.textContent = 'You got it right!';
      guessNumber = true;
      counter += 1;
    }
  }

}
fourthQuestion();

totalCorrect.textContent = 'You got ' + counter + ' out of 4 questions correct.';
}
guessingGame();
