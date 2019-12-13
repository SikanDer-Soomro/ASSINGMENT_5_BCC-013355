/* ASSINGMENT NUMBER 5 */
/*Task.8 Write a function that take birth date and returns Age in years, months and days */    
function calculateAge(dob) { 
var curDate   = new Date(); 
var bthDate   = new Date(dob) 
var days      = Math.floor((curDate - bthDate) / (1000 * 60 * 60 * 24)); 
var ageYears  = Math.floor(days / 365); 
var ageMonths = Math.floor((days % 365) / 31); 
var ageDays   = days - (ageYears * 365) - (ageMonths * 31); 
console.log("You are " + ageYears + " Years, " + ageMonths + " months and " + ageDays + " days old"); 
} 
  
calculateAge('Jan 2, 2000'); 
calculateAge('Sep 25, 1994'); 
calculateAge('June 22, 1976'); 
