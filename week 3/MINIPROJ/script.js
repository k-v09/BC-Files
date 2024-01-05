
const opts = ['r', 'p', 's'];
const accGuess = ['rock', 'paper', 'scissors'];

 function userGuess () {
    var ui = prompt("Rock, Paper, or Scissors?!?\nThe choice is yours");
    ui = ui.toLowerCase();
    while (!(ui in opts || ui in accGuess)) {
        alert("Invalid input!!\nPlease input 'rock', 'paper', or 'scissors'")
        ui = prompt("Rock, Paper, or Scissors?!?\nThe choice is yours").toLowerCase();
    }
    return ui;
 }
 function dumbComp() {
    cnum = Math.floor(Math.random() * 3)
 }
 function smartComp() {

 }