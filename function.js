
//returning values in Function
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)

//example 2
 
function fruitProcessor(apples , banana){
    const juice =`daniel has ${apples} apples and ${banana} banana`
    return juice;
}

const danielJuice = fruitProcessor(4,2);
console.log(danielJuice);

const dunni = fruitProcessor (5,5);
console.log(dunni)