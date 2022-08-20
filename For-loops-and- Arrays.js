let messages=[
    "hello denzel!",
    "how are you",
    "i am great and you?",
    "thanks"
]

   //start       finish; step
   for(let i = 0; i< 3; i+=1){
    console.log(messages[i])
}   

for(let i = 0; i< messages.length; i+=1){
    console.log(messages[i])
}

let cards = [7, 3, 9]

for (let i=0; i < cards.length; i++) {
  
  console.log(cards[i])
}

//for loop, array, DOM
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] 
}


