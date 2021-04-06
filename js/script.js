var yourName = prompt("What's your name?");
var yourSurname = prompt("What's your surname?");
var favColor = prompt("What's your favourite color?");
var favNumber = prompt("What's your favourite number?");
// possibile anche senza chiedere il numero

var password = yourName + yourSurname + favColor + favNumber;

/* var password = yourName + yourSurname + favColor + 21; */

document.getElementById('pwd').innerHTML = password;