//w.a.p to find and print all prime numbers between 1 and 50 using while
//  let n=10;
let i=2;

 while(i<=50){
    j=2;
    let Isprime=true;
     while(j<i){
        if(i%j==0){
        Isprime=false;

        }
        j++;
     }
Isprime?console.log(i):"";
i++;
    } 
 
