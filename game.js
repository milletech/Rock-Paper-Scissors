let splash = document.getElementById("splash");
let playMode = document.getElementById("playMode");
let highScore = document.getElementById('HSboard');
let instr = document.getElementById("Instructions");
let playerImg = document.getElementById("imagePlayer");
let compImg = document.getElementById("imageComp");
let trackScore = document.getElementsByClassName("scoreBoard")[0];
let playerScore = document.getElementById("playerScore");
let compScore = document.getElementById("compScore");


let player = 0;
let comp = 0;;

var choices = ["paper", "rock", "scissors"]


//Play the game function
function PlayGame() {
    splash.style.display = "none";
    highScore.style.display = "none";
    instr.style.display = "none";
    playMode.style.display = "block";
}
//Instruction set fynction;
function Instructions() {
    splash.style.display = "none";
    highScore.style.display = "none";
    instr.style.display = "block";
    playMode.style.display = "none";
}
playerScore.innerHTML = player++;
compScore.innerHTML = comp++;

var optionBtn = document.getElementsByClassName("optionBtn");

const comparingHands = (playerChoice, computerChoice) => {
    //if it is a tie;
    if (playerChoice === computerChoice) {
        trackScore.innerHTML = "Draw";
        return;
    }
    //Rock
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            trackScore.innerHTML = "Computer Wins";
            compScore.innerHTML = comp++;
        } else {
            trackScore.innerHTML = "You Win";
            playerScore.innerHTML = player++;

        }
    }
    //Paper
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            trackScore.innerHTML = "You Win";
            playerScore.innerHTML = player++;
        } else {
            trackScore.innerHTML = "Computer Wins";
            compScore.innerHTML = comp++;
        }
    }
    //Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            trackScore.innerHTML = "Computer Wins";
            compScore.innerHTML = comp++;
        } else {
            trackScore.innerHTML = "You Win";
            playerScore.innerHTML = player++;

        }
    }
}

for (let option of optionBtn) {
    option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = choices[computerNumber];
        const playerChoice = this.name;
        playerImg.src = `myImages/${this.name}.png`;
        compImg.src = `myImages/${computerChoice}.png`;
        comparingHands(playerChoice, computerChoice);
    })

}