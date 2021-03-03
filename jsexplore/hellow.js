var bananaPrize=21;
console.log(typeof bananaPrize);

var userName="shafiq";
console.log(userName);

var promise="Complete Web Development Course With Jhankar Mahbub";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('Jhankar'));
console.log(promise.split('Jhankar'));

var numer1=15;
var numer2='15.5';
//numer2=parseFloat(numer2);
numer2=parseInt(numer2);
console.log(numer1 + numer2);
 
var numer3=0.1;
var numer4=0.2;
var total= numer3 + numer4;
console.log(total.toFixed(1) );

//absolute
var numer=-5;
var absoluteNumber= Math.abs(numer);
console.log(absoluteNumber);
//round
var numer=7.49;
var absoluteNumber= Math.round(numer);
console.log(absoluteNumber);

var numer=7.51;
var absoluteNumber= Math.round(numer);
console.log(absoluteNumber);

//ceil uppre uthai nibe
var numer=8.009;
var absoluteNumber= Math.ceil(numer);
console.log(absoluteNumber);

//floor niche tene namai
var numer=1.99;
var absoluteNumber= Math.floor(numer);
console.log(absoluteNumber);