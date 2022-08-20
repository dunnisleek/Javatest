//basic Example 1
const scores = [ 10, 30, 15 , 25, 50, 40, 5];

const filterScores = scores.filter((score)=>{
    return score > 20
})

// console.log(filterScores)

//basic Example 2

const users = [
    {name: "seun" , premium : true},
    {name :"Aishat", premium: false},
    { name: 'Bayo' , premium: false},
    {name:"dunni", premium: true}
       
];

const premiumUsers = users.filter((users => users.premium
))
console.log(premiumUsers)

//get age lesser than 25

const ages =[19,16,4,5,30,40,50]

const youngAges = ages.filter((ages => ages < 20))
console.log(youngAges)

//find +ve number only
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positiveNumber = numbers.filter((numbers => numbers >= 0))
console.log(positiveNumber)

//finding freelancer with javascript skills
 const freelancer = [{name: "dunni", skill: "JavaScript"},{name: "Tunde", skill: "wordpress"},{name: "David", skill:"JavaScript"}];
// const freelancer = [{name: "dunni", skill: "wordpress"},{name: "Tunde", skill: "Javascript"}, {name: "joshua", skill: "Javascript"}];

const JavascriptFreelancer = freelancer.filter((freelancer =>  freelancer.skill == "JavaScript") );
console.log(JavascriptFreelancer)


// let javascript_freelancers = freelancers.filter(function(freelancer) {
//     return freelancer.skill == "JavaScript"; });

// console.log(javascript_freelancers);