//LOOPS AND ARRAYS


let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
//long method//
console.log(largeCountries[0])
console.log(largeCountries[1])
console.log(largeCountries[2])
console.log(largeCountries[3])
console.log(largeCountries[4])

//short and better way
console.log("The 5 largest countries in the world:")

for (let i =0; i < largeCountries.length; i++)
{
    console.log(largeCountries[i])
}