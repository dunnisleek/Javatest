//function Declaration
function calAge1(birthYear){
    return 2022-birthYear;
  }
  const age1=calAge1(1992);
  
  console.log(age1)

  //function Expression

  const calAge2 = function(birthYear){
      return 2021-birthYear
  }

  const age2 =calAge2(1992)

  console.log(age2)

  //Arrow Function

  const calAge3 = birthYear => 2022 -birthYear 
  const age3 = calAge3(2000)
  console.log(age3)

  const retirementAge = (birthYear , firstName) => {
      const age = 2022 - birthYear
      const retirement = 65 - age

      return ` ${firstName} will retire at ${retirement}``
  }
  
  console.log(retirementAge(1992 ,"dunni"))