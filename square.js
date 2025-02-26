//Write a program to print the squares of numbers from 1 to 10, but only print the squares that are multiples of 4, using a while loop.
let num = 1; 

while (num <= 10) { 
    let square = num * num; 

    if (square % 4 === 0) { 
        console.log(`Square of ${num} is ${square}`);
    }

    num++; 
}
