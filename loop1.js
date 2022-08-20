 //for(let rep=0; rep <=20 ; rep+=1){
   //  console.log(`this is done in ${rep} `)
 //}
 
 const jonas = [
     'name',
     12,
     "abuja",
     ["Ajah", "sangotedo"],
     true,
     "ayobami"
 ]
 const type=[]
  
 for(let i=0; i<jonas.length; i++){
     //reading from jonas array
     console.log(jonas[i], typeof jonas[i]) 

     //filling type array
     //type[i] =typeof jonas[i]
     //other way for the above
     type.push(typeof jonas[i]);
 }
 
 console.log(type)

 //example 3. calculating the years of this array

 const years=[2000,1992, 1980]
 const age=[]

 for(let i=0; i<years.length; i+=1){
     age.push(2022- years[i])
 }
 console.log(age)