
// HTMLements
let winsEL = document.querySelector("#win");
let lossesEL = document.querySelector("#lose");
let wrEL = document.querySelector("#winRate");
let b = document.querySelector(".mainBox")

// for text
let wins = 0;
let losses = 0;
let wr = undefined;
if (wins + losses > 0) {
    wr = wins * 100 / (wins + losses);
}
function setTexts () {
    winsEL.textContent = "Wins: " + String(wins);
    lossesEL.textContent = "Losses: " + String(losses);
    wrEL.textContent = "Win Rate: " + String(wr);
}

let mode = true;
function setSite (m) {
    if (!m) {
        b.childNodes[0].textContent = "Game Thingy?";
        let butt = document.createElement("button");
        butt.textContent = "Huh?";
        butt.addEventListener("click", (mode = !mode));
        b.appendChild(butt);
    }
    else {
        for (i in b.childNodes) {
            i.remove();
        }
    }
}

ilky = ["error", "crash", "shutdown", "existentialDread", "delete", "FML", "Kill me now", "Damn It"];
for (i in ilky) {
    i = i.toLowerCase();
}
//takes array as argument
function wordy (ar) {
    mult = ar.length;
    rint = Math.floor(Math.random()*mult);
    return ar[rint];
}

// assumes windSt == T
function game() {
    q = wordy()
    let ugh = document.createElement("h1");
    guessr = "";
    for (i=0; i < q.length; i++) {
        guessr += "_";
    }
    ugh.textContent = guessr;
    b.appendChild(ugh);
}

function main () {
    setTexts()
    setSite(mode)
}

main();
























//console.log()