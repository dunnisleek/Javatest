const scores =[3,10,15,30,40, 50,90]

const firstHighScore = scores.find((score)=>{
    console.log('hfh', score)
    return score;
})
console.log(firstHighScore)