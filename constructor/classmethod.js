class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    login(){
        console.log( this.name, "just logged in")
    }
    logout(){
        console.log( this.name, "just logged out")
    }
}

const userOne = new User("Ayo","ayo@gmail.com")

const userTwo = new User("tayo","tayo@gmail.com")
 console.log(userOne)