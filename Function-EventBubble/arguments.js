function addNumbers(num1 ,num2){
    var sum =0 ;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum= sum + element ;
        
    }
    return sum ;
}

var result = addNumbers(2,3,4,7);
console.log(result);
