var numbers = [12, 45, 65, 21, 6, 68];

var smallest = numbers[0];

for(var i = 0; i < numbers.length; i++){

    var num = numbers[i];

    if(num<smallest){

        smallest = num;

    }

}

console.log(smallest)