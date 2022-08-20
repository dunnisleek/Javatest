// class Square {
//     constructor(length , breath){
//     this.length = length;
//     this.breath = breath;
//   }
//     //getter
    
//     get area(){
//       return this.calcArea();
   
//     }
//    calcArea(){
//      return this.length * this.breath;
//    }
//   }
  
//   const square_son = new Square( 4, 3);
//  console.log(square_son.area)

// let Coupon= { 
//     name: "dunni",
//     age: 50,
//     login(){
//       console.log("you are login");
//     }
//   }
//   console.log(Coupon.login)

  class Data{
    constructor(length, breath, height){
      this.length =length;
      this.breath = breath;
      this.height = height;
    }
    get average(){
      return this.calcAverage();
    }

    calcAverage(){
      return (this.length  + this.breath + this.height) / 3;
     
    }
  }
  const data_Dolphins = new Data(96,108, 89);
  const data_Kola = new Data(88,91,110);
  const data_Bonus1Dol = new Data(97, 112,101)
  const data_Bonus1kola = new Data(109, 95,123)
  const data_Bonus2Dol = new Data(97, 112,101)
  const data_Bonus2kola = new Data(109, 95 ,106)


  
  console.log(data_Dolphins.average , data_Kola.average)
  console.log(data_Bonus1Dol.average,data_Bonus1kola.average)
  console.log(data_Bonus2Dol.average, data_Bonus2kola.average)

  if(data_Dolphins > data_Kola && data_Dolphins > 100){
    console.log("you are the winner")
  
  } else{
    console.log("loss")
  }

  if(data_Bonus1Dol > data_Bonus1kola){
    console.log("you won")
  } else{
    console.log("fail")
  }
  