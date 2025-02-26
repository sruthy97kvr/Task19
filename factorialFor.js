//w.a.p to find the factorial of a number using a for loop

let num = 5; 
let factorial = 1; 

for (let i = num; i >= 1; i--) {
    factorial *= i; 
}

console.log(`Factorial of ${num} is: ${factorial}`);
