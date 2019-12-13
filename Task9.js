/* ASINGMENT NUMBER 9 */
/*Task.9 Write a function to add weeks in current date */     
function addWeek(numWeeks) { 
var now = new Date(); 
now.setDate(now.getDate() + numWeeks * 7); 
console.log(now); 
} 
addWeek(3); 
addWeek(10); 
