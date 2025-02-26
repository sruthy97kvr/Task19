//w.a.p to find the factorial of a number using a while loop

let num = 5; 
let fact = 1;
let i = num;

while (i > 0) {
    fact *= i; 
    i--;       
}

console.log(`Factorial of ${num} is: ${fact}`);
