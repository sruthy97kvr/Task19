n=129;
temp=n;
output=0;

while(n>0){
    LastDigit=n%10 ;//last digit
    output=output*10 + LastDigit;


    n= Math.floor(n/10); //removing the last digit
    
}
if(output==temp){
console.log("the number is palindrome");

}
else{
    console.log("the number is not palindrome");
}