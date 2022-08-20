
// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 
//when your code has finished running.
const myArray = [];
let i = 10;

// Only change code below this line
do{
  myArray.push(i);
  i++
}
while (i < 5) 


// Replace Loops using Recursion
//exampl2
function sum(arr, n) { 
    // Only change code below this line
  if (n <= 0){
    return 0;
  }else {
    return sum(arr , n-1) + arr[n-1]
  }
    // Only change code above this line
  }