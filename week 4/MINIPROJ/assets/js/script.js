
// HTMLements
let winsEL = document.querySelector("#win");
let lossesEL = document.querySelector("#lose");
let wrEL = document.querySelector("#winRate");

// for text
let wins = 0;
let losses = 0;
let wr = undefined;
if (wins + losses > 0) {
    wr = wins * 100 / (wins + losses);
}

winsEL.textContent = "Wins: " + String(wins);
lossesEL.textContent = "Losses: " + String(losses);
wrEL.textContent = "Win Rate: " + String(wr);