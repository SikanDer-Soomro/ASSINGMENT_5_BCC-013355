/* ASSINGMENT NUMBER 11*/
/* 10. Write a JavaScript function that accept string and returns the count of vowel used within the string. */ 
function countVowels(str) { 
    var vowelsCount = 0; 
    var string = str.toLowerCase(); 
    for (var i = 0; i < string.length; i++) { 
    switch (string.charAt(i)) { 
    case "a": 
    case "e": 
    case "i": 
    case "o": 
    case "u": 
    vowelsCount += 1; 
    break; 
    } 
     } 
    console.log(vowelsCount + " Vowels"); 
    } 
    countVowels("Sikander Soomro");  // 6 vowels 
    countVowels("PIAIC BLOCKCHAIN"); // 6 vowels 
    countVowels("Mentor Aaly Malik");// 6 vowels  
    countVowels("A.E.I.O.U"); // 5 vowels */ 