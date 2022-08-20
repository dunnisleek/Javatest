

  /* Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */


function describeCountry( country, population, capitalCity){

     return `${country} has ${population} million people and its
     capital city is ${capitalCity}`;
}
const najanet = describeCountry("Nigeria", 3000 ,"Lagos")
const japanNet = describeCountry("Japan", 300,000 ,"china")
console.log(najanet)
console.log(japanNet)
/*
Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population*/
 
// declaration
function percentageOfWorld1(population){
    return (population /7900) * 100
}
const people1=percentageOfWorld1(100)
console.log(people1)

//expression

const people = function(population){
    return (population /7900) * 100
}

const newPeople = people(1000)

console.log(newPeople)

// arrow function
 const percentageOfWorld3 = population => ((population /7900) * 100)

 const percentage = percentageOfWorld3(1000)
 console.log(percentage)