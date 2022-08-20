var textbox = document.getElementById("textbox");
var button = document.getElementById("btn");

button.addEventListeners("click" , function(){
    localStorage.name = textbox.Value;
});

document.write(localStorage.name);