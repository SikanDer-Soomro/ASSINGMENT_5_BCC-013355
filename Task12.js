/* ASSINGMENT NUMBER 5*/
/* 12. Write a JavaScript program act as number guessing game and give user chance 
to try 3 times if guess incorrect and then ask user if 
he/she wants to play game again 
a. Generate Random number between 1 to 100 
b. Ask user to guess number 
c. User will have 3 chances, if user enters incorrect number it should say that “Incorrect, 
Please try again” 
d. If user guess right on first, second or third try is should say “You are right, You won” 
e. Then it asks the user if he/she wants to play again, if user says yes, then the whole 
process starts from point (a) again 
f. If user says no then game end saying “Thank you for playing with use today” 
g. After point ( c ) if user failed 3 times then it should say “You Lose” and game 
should ask if user wants to play again, if user 
say yes then it should start from point (a) again. 
Note: You must use while or do while loop and functions for this game */  
var randomNum = Math.floor(Math.random() * 100 + 1); 
var playAgain; 
var counter = 0; 

function guessNum() { 
var userInput = prompt("Guess a number between 1 to 100"); 
var i = 0; 
do { 
if (userInput === randomNum) { 
alert("You are right, You won"); 
play_Again(); 
break; 
} 
else alert("Incorrect, Please try again"); 
userInput = prompt("Guess a number between 1 to 100"); 
counter++; 
i++ 
if (counter === 2) 
play_Again(); 
} while (i < 2); 
} 

function play_Again() { 
counter = 0; 
alert("You Lose");
playAgain = prompt("Do you want to play again? Yes/No"); 
if (playAgain.toLowerCase() === "yes") 
guessNum(); 
if (playAgain.toLowerCase() === "no") 
alert("Thank you for playing with us today."); 
} 
guessNum(); 
