function isLeapYear(year){
   
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    console.log(year, "This is year is a Leap Year");
    }
    else {
    console.log(year, "This is year is Not a  Leap Year");
    }
    }
    var checkLeapYear = isLeapYear(2000);
    var checkLeapYear = isLeapYear(2017);
    console.log(checkLeapYear);