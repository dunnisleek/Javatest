function caseInSwitch(val) {
    let answer = " ";
    // Only change code below this line
    switch(val){
      case 1:
      answer = "alpha";
      break;
      case 2:
      answer ="beta";
      break;
      case 3:
      answer ="gamma";
      break;
      case 4:
      answer ="delta"
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);
  
  
      //Multiple Identical Options in Switch Statements
      //Write a switch statement to set answer for the following ranges:
     /* 1-3 - Low
      4-6 - Mid
      7-9 - High*/

      function sequentialSizes(val) {
        var answer = "";
        // Only change code below this line
        switch (val) {
          case 1:
          case 2:
          case 3:
            return "Low";
            break;
          case 4:
          case 5:
          case 6:
            return "Mid";
            break;
          case 7:
          case 8:
          case 9:
            return "High";
            break;
        }
        // Only change code above this line
        return answer;
      }
      sequentialSizes(2)

   //e.g 3
      switch (prompt("what is the weather like")) {
        case "rainy":
        console.log("take umbrella")
        break;
        case "sunny":
            console.log("you can go outside")
            break;
            case "cloudy":
                console.log("take sweater")
                break;
    }

  // example 3 
  const grade =""
 switch (grade){
   case 'a':
     console.log('this is a');
      break;
       case 'b':
     console.log('this is b ');
     break;
       case 'c':
     console.log('this is c');
     break;
   default:
     console.log("none")
 }