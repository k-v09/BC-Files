let accGuess = ['rock', 'paper', 'scissors'];

 function userGuess () {
    var ui = String(prompt("Rock, Paper, or Scissors?!?\nThe choice is yours"));
    ui = ui.toLowerCase();
    return ui;
 }

 function dumbComp() {
    let cnum = Math.floor(Math.random() * 3);
    let cotp = accGuess[cnum];
    return cotp;
 } 

 function gamePlay(user, computer) {
   console.log(user, computer)
   if (user == computer) {
      return 0;
   }
 }

 gamePlay(user_input, computer_input);

 function main() {
   alert("Rock Paper Scissors or whatever\nstart playing already");
   let tie = 0;
   let win = 0;
   let lose = 0;
   let winner = gamePlay(userGuess(), dumbComp());
   if (winner == 0) {
      tie++;
   }
   else if (winner == 1) {
      win++;
   }
   else if (winner == 2) {
      lose ++
   }
   else {
      alert("What have you done to my code?!?!?!")
   }
 }