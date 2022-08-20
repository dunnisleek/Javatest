const title="ali book"
const author = "bayo"

//concatenation way

let bookText ="The textbook is called " + title  + "by " + author;

//template string

let result =`The textbook is called ${title} by ${author}`

//creating html template
let html =`
<h2>${title}</h2>
<p> By ${author}</p>
<span> This is book ${author} likes</span>
`
console.log(bookText)
console.log(result)
console.log(html)

