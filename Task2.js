/*ASSINGMENT NUMBER 2*/
/* Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables*/

//Mehod 1: Argument as value.
function area(length, width) {
    var area = length * width;
    return console.log("Area of ractangle is " + area);    
}
area(4,3);

//Method 2: Argument as Variable
var length = prompt("Please Enter The length of Rectangle");
var width  = prompt("Please Enter The width of Rectangle");


function area2() {
    var area = length * width;
    return console.log("Area of recangle is " + area);    
}
area2();