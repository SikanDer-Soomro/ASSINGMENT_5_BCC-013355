/*ASSINGMENT NUMBER 5*/
/* Task.11 Write a JavaScript function named isVowel that accept string character and check
 using switch statement that character is a vowel or not. Function should return true 
 if its vowel and false if it's not 
vowel */ 
function isVowel(char) { 
var character = char.toLowerCase(); 
switch (character) { 
    case "a": 
    case "e": 
    case "i": 
    case "o": 
    case "u": 
    return true; 
    break; 
    default: 
    return false; 
    } 
} 
console.log(isVowel("A")); // true; 
console.log(isVowel("w")); // false; 
console.log(isVowel("e")); // true; 
console.log(isVowel("3")); // false; 
    
    