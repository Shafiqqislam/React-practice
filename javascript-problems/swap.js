var a=5;
var b=7;
console.log("before swap: a=", a,"b=" ,b);
var temp=a;
a=b;
b=temp;
console.log("after swap: a=", a,"b=" ,b);
//another way
var x=10;
var y=12;
[x,y]=[y,x];
console.log("swap:x=",x,"y=",y);
