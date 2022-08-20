// Check if the person is elegible for a birthday card from the King! (100)
/*
let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age< 100) {
    console.log("Not elegible")
}

else if(age == 100){
    console.log("Here is your birthday card from the King!")
}
else{
    console.log("Not elegible, you have already gotten one")
}
*/
//2
/*
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
}
else if( sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
}
else{
    console.log("You're out of the game! 😭")
}
*/

//3/


let firstCard = 10
let secondCard = 4
// 1. Create a new array - cards - that contains firstCard and secondCard

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl= document.getElementById("cards-el")


// Create a new function called startGame() that calls renderGame()
function startGame(){
    renderGame()
}
function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "cards: " + firstCard +secondCard
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard(){
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 10
    
    // 2. Add the new card to the sum variable
    sum += card
    
    // 3. Call startGame()
    renderGame()
}
/*
//ARRAY

let experience = ["CEO at Scrimba", 
"Frontend developer at Xeneta", 
"People counter for Norstat"]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])

let mySelf =["Dunni", 22 , "i love coding" ]

mySelf.push( "sleek")//adding content to array
console.log(mySelf)
*/