/*ASSINGMENT NUMBER 3*/
/*Task.3 Write a JavaScript function that checks whether a passed string is a
palindrome or not? A palindrome is the word, phrase, or sequence
that reads the same backward as forward, e.g., madam, Tibit.*/

function palindrome(str) {
    
 var string = str.toLowerCase();
 var len = string.length;
 var mid = Math.floor(len / 2);

for (var i = 0; i<mid; i++){
    if(string[i] !== string[len -1 - i] ){
        return false;
    }
}
return true;
}

console.log(palindrome("Table")); // false: not a plindrome word
console.log(palindrome("madam")); // true:  palindrom word
console.log(palindrome("Tibit")); // true:  palindrome word 
console.log(palindrome("Level")); // true:  palindrome word
console.log(palindrome("PIAIC")); // false: not a palindrome word





    