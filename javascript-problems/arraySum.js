function getArraySum(numbers){
    var sum=0;
    for( var i=0; i< numbers.length ; i++){
      var element=numbers[i];
      sum=sum+element;
}
return sum;
}
var numbers=[12,23,34,56,67,87];
 var result=getArraySum(numbers);
 console.log(result);
// another options
 var total=getArraySum([34,45,45,32]);
 console.log(total);