function factorial (n){
    var i=1;
    fact=1;
    while(i<=n){
      fact=fact*i;
      i++;
    }
    return fact;
}
var result=factorial(5);
console.log(result);