//6!=(6-1)!*6
//n*(n-1)!
function factorial(n){
    if(n==0){
     return 1;
    } else{
        return n*factorial(n-1);
    }
}
var result=factorial(5);
console.log(result);