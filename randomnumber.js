// Generate Random Whole Numbers with JavaScript
//E.g Use this technique to generate and return a random whole number between 0 and 9.

// function randomWholeNum() {

//     // Only change code below this line
//   Math.floor(Math.random()*10)
//     return Math.floor(Math.random()*10);
//   }
  
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

function bmi(weight, height){
    return weight /height **2
}
let mark = prompt("markWeight","weight");
let mark1 = prompt("markHeight","height");
let ans = bmi(mark,mark1);
console.log(ans)
// if( mark <john ) {
//     console.log("mark is great")
// } 
// else {
//     console.log("False answer")
// }

