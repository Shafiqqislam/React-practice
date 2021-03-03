var speech="i love my country. cz i love you";

count=0;

for( var i=0; i<speech.length; i++){
  var char=speech[i];
  if(char==" "){
    count++
  }
}
count++
console.log(count);