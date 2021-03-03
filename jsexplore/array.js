var friends=[12,23,45,66];
friends[1]=60;
friends.push(12);
friends.push(34);
friends.pop();
friends.pop();
var position=friends[2];
console.log(friends);
console.log(position);


var teaLine=['balam','kalam','salam'];
teaLine.shift();
teaLine.unshift('kuddus');
console.log(teaLine);

var teaLine=['balam','kalam','salam','dalam','palam'];
var part=teaLine.slice(2,4);
console.log(part);

