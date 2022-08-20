

//Rendering an error message
     // When the user clicks the purchase button, render out
    // "Something went wrong, please try again" in the paragraph
   // that has the id="error".  

   let errorParagraph = document.getElementById("error")
   console.log(errorParagraph)
   
   function purchase() {
       console.log("button clicked")
       errorParagraph.textContent = "Something went wrong, please try again"
   }

let num1 = 8
let num2 = 2
document.getElementById("num1-el").innerHTML = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


let sumEl = document.getElementById("sum-el")

function add() {
    sumEl.textContent = num1 + num2
}
