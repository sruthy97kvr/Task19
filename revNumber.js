//Reverse a Number Without Converting to String using while 
//Eg: 547 to 745
let num = 547;
let reversedNum = 0;

while (num > 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit; 
    num = Math.floor(num / 10); 
}
console.log(reversedNum);
