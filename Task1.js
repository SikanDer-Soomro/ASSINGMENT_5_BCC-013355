/*ASSINGMENT NUM 5*/
//Task.1 Write a function that computes the factorial of a number

function factorial(num) 
{
    if (num === 0){
        return 1;
    }

    else {

        return num * factorial(num -1)
    }
    
}

console.log(factorial(8)); //40320
console.log(factorial(5)); //120
console.log(factorial(9)); //362880