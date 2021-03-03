function isPrime(n){
    for(var i=2; i<n ; i++){
     if(n%i==0){
         return "not a prime number";
     }
    }
    return "your number is a prime numer";
}

var result=isPrime(18);
console.log(result);