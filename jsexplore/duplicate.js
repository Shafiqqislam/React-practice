var serial=[2,3,4,5,6,7,8,2,34,5,6,7,8];
var uniqueName=[];
for( var i=0; i<serial.length ; i++){
var element=serial[i];
var index=uniqueName.indexOf(element);
if(index==-1){
    uniqueName.push(element);

   }
}
console.log(uniqueName);