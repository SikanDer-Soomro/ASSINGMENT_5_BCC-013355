/*ASSINGMENT NUMBER 5*/
/* Task.7. Write a function to test whether a given date is a weekend? If not how
many days to weekend */

function is_weekend(date) { 
 var input = new Date(date); 
 var day = input.getDay(); 
switch (day) { 
 case 0: 
 case 6: 
 return "Its weekend"; 
 break; 
 case 1: 
 return "Sorry! wait for 4 more days"; 
 break; 
 case 2: 
 return "Sorry! wait for 3 more days"; 
 break; 
 case 3: 
 return "Sorry! wait for 2 more days"; 
 break; 
 case 4: 
 return "Sorry! wait for 1 more day"; 
break; 
case 5: 
return "Sorry! Weekend starts tomorrow"; 
 break; 
} 
 } 
 
console.log(is_weekend('Nov 2, 2019')); // Its Weekend 
console.log(is_weekend('Nov 3, 2019')); // Its Weekend 
console.log(is_weekend('Nov 4, 2019')); // Sorry! wait for 4 more days 
console.log(is_weekend('Nov 5, 2019')); // Sorry! wait for 3 more days  
    