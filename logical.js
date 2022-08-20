// OR ||  &&

const password = "passwof@4dwr"

if(password.length >= 12 && password.includes('@')){
    console.log('you are good to go')
} else if( password.length >=8 ){
    console.log("password is long")
} else(
    console.log('too weak')
)

// NOT(!)

user = true
 if (!user){
   console.log('you have to register')
 }else{
   console.log('good')
 }

 user = false
 if (!user){
   console.log('you have to register')
 }else{
   console.log('good')
 }