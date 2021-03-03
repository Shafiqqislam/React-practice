//https://github.com/Shafiqqislam/assignment-3-js
//kilometerToMeter part end

function kilometerToMeter(distance){
      var meter = distance*1000;    //1 kilometer=1000 meter
      if(distance < 0){
        return "distance cannot be negative";
      }
      return meter;
  }
  
  var result=kilometerToMeter(-5);
  console.log(result);

  //kilometerToMeter part end
// budgetCalculator part start

 function  budgetCalculator(watch,phone,laptop){
    var watchPrize=watch*50;
    var phonePrize=phone*100;
    var laptopPrize=laptop*500;
    var total= watchPrize+phonePrize+laptopPrize;
  return total;
 }
 var result =budgetCalculator(2,3,4);
 console.log(result);

 //budgetCalculator part end
// hotelCost part start

 function hotelCost(days){
  var rent = 0;
  if( days <=10){
  rent = days*100 ;
  }
   else if(days <=20){
    var firstPart= 10 * 100;
    var remining= days - 10;
    var secondPart= remining * 80;
    rent =firstPart + secondPart;
  }
    else{
     var firstPart = 10 * 100;
     var secondPart = 10 * 80;
     var remining = days - 20;
     var thirdPart = remining * 50;
     rent =firstPart + secondPart +thirdPart ; 
  }
   return rent ;
 }
      var count = hotelCost(12)
      console.log(count);

// hotelCost part end
//megaFriend part start

function megaFriend(largestName){
      var larger= largestName[0];
      for(var i=0 ; i<largestName.length ; i++){
         var element= largestName[i];
         if(element > larger){
            larger =element ;
         }
      }
      return larger;
      }
      
      var output= megaFriend(["shafiq","akib","salam","ali"]);
      console.log(output);
//megaFriend part end