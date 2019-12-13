/*ASSINGMENT NUMBER 5*/
/*Task.6 Write a function that will take an array and generate a mirror array of
it. */

var arr = [];
function mirror(arr) {
    var reverse = arr.reverse();
    return reverse;
}

console.log(mirror([1,2,3,4,5])); //5,4,3,2,1
console.log(mirror([10,9,8,7,6,])); //6,7,8,9,10