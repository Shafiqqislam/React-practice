function  explain_callback(name ,age, task){
  console.log('hellow ' ,name);
  console.log('your age', age);
  task();
}

function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
  console.log('take shower');
}
explain_callback('sogir uddin', 16 ,washHand);
explain_callback('josim uddin' , 22,takeShower);