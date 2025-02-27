//Reverse a Number Without Converting to String using while 
//Eg: 547 to 745
let n=547;
output=0;

while(n>0){
LastDigit=n%10 ;//last digit
output=output*10 + LastDigit;
n= Math.floor(n/10); //removing the last digit


}
console.log(output)