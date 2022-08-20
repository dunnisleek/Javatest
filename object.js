const markInfo ={
   name: "mark miller",
   mass:  78,
   height:1.95,
   calcBMI: function(){
       this.bmi = this.mass / this.height ** 2
    return this.bmi
   }
}
const johnInfo ={
    name: "John Smith",
    mass:  92,
    height:1.85,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2
     return this.bmi
    }
 }

 markInfo.calcBMI();
 johnInfo.calcBMI();
 console.log(markInfo.bmi, johnInfo.bmi)
 //"john Smith's BMI(28.3) is higher than Mark Miller's (23.9)"

 if (markInfo.bmi > johnInfo.bmi){
     console.log(`${markInfo.name}'s BMI ${markInfo.bmi} is hgher than ${johnInfo}'s (${johnInfo.bmi})`)
 } else if(johnInfo.bmi > markInfo.bmi) {
    console.log(`${johnInfo.name}'s BMI (${johnInfo.bmi}) is hgher than ${markInfo}'s (${markInfo.bmi})`)
 }


 //example 2

 const myCountry ={
     country:"Nigeria",
     capital:"Abuja",
     language:"English" ,
     population:1200000,
     neighbour:["Man","hausa", "yoruba"],
      
 }
 console.log(`${myCountry.country}  has (${myCountry.population}) english speaking peope, 3 neighbour conprises of (${myCountry.neighbour}) and a capital city in (${myCountry.capital}) `)
myCountry.population += 200000;
myCountry.population -= 200000;
console.log(myCountry.population)