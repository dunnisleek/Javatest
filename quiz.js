//for( var i = 0; i < 10; i++){
//  document.write(i + "<br>")
//}
var questions = [
    {
      prompt: "What color are apples?\n(a)  Red/Green\n\
     (b) Purple\n (c) Orange",
  
  answer:"a"
    },
  {
    prompt:"what color is Bananas?\n(a) Teal\n\ (b) magenta\n (c) Yellow",
      answer:"c"
  },]
  var score= 0;
  
  for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    
    if(response== questions[i].answer){
      score++;
      alert("Correct");
    }
    else{
      alert("WRONG");
    }
  }
    
  
  alert("you got" + score + "/" + questions.length)