//WAP to print the Fibonacci Sequence up to N Terms using for Loop

let n = 10; 
let a = 0, b = 1, nextTerm;

console.log("Fibonacci Sequence:");

console.log(a);
console.log(b);
for (let i = 3; i <= n; i++) { 
    nextTerm = a + b;
    console.log(nextTerm);
    a = b; 
    b = nextTerm;
}
