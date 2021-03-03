function evenify(num){
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
       if( num % 2== 0 ){
           console.log(num ,"is evn number");
       }else{
        console.log(num * 2,"is odd number");
       }
    }
}
nums = [137,34,56,78,98,76,13];
evenify(nums);
friends_age = [12,34,56,54,32];
evenify(friends_age);

