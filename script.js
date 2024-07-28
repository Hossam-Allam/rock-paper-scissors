const info = document.querySelector("#visual");

const userScore = document.querySelector("#userScore");

const machineScore = document.querySelector("#machineScore");

const resetButton = document.querySelector("#resetButton");


let playerScore = 0;
let compScore = 0;

function scoring(player, computer) {
    if (player > computer) {
        info.textContent = "Congrats you win " + player + " to " + computer;
    } else if (computer > player) {
        info.textContent = "The computer wins " + computer + " to " + player;
    } else {
        info.textContent = "It ends in a tie";
    }
}

function game(playerChoice) {



    let random = Math.random();

    let compChoice = "";
    if (random < 0.33) {
        compChoice = "rock";
    } else if (random < 0.66) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    if (playerScore === 5 || compScore === 5) {
        info.textContent = "Press the reset button to play again";

    } else if (playerChoice.toLowerCase() === compChoice.toLowerCase()) {

        console.log("this round ended in a tie");
        info.textContent = "this round ended in a tie";

    } else if ((playerChoice.toLowerCase() === "rock" && compChoice.toLowerCase() === "scissors")
        || (playerChoice.toLowerCase() === "paper" && compChoice.toLowerCase() === "rock")
        || (playerChoice.toLowerCase() === "scissors" && compChoice.toLowerCase() === "paper")) {

        console.log("you win this round");
        info.textContent = "computer picked " + compChoice + " you win";
        playerScore++;
        userScore.textContent = playerScore;
    } else {
        console.log("computer wins this round");
        info.textContent = "computer picked " + compChoice + " you lose";
        compScore++;
        machineScore.textContent = compScore;
    }

    if (playerScore === 5 || compScore === 5) {
        scoring(playerScore, compScore);
    }



}


function resetGame() {
    playerScore = 0;
    compScore = 0;
    userScore.textContent = playerScore;
    machineScore.textContent = compScore;
    info.textContent = "Game has been reset. Play again!";
}

const rock = document.querySelector("#rock");

rock.addEventListener("click", () => {
    console.log("rock clicked");
    game("rock");
});

const paper = document.querySelector("#paper");

paper.addEventListener("click", () => {
    console.log("paper clicked");
    game("paper");
});

const scissors = document.querySelector("#scissors");

scissors.addEventListener("click", () => {
    console.log("scissors clicked");
    game("scissors");
});


resetButton.addEventListener("click", resetGame);
