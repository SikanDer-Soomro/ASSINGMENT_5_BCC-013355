/* ASSINGMENT NUMBER 4*/
/*Task.4 The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
a. Pass the radius to the function.
b. Calculate the circumference based on the radius, and output
"The circumference is NN".

Create a function called calcArea:
a. Pass the radius to the function.
b. Calculate the area based on the radius, and output "The area is NN".
Circumference of circle = 2πr
Area of circle = πr2*/

function calcCircumference(radius){
 var circumference = Math.PI * 2 * radius;
 console.log("Circumference of circle " + circumference);
}

function calArea(radius){
    var area = Math.PI * radius * radius;
    console.log("area of Circle is " + area);   
}
calcCircumference(5);
calArea(5);
