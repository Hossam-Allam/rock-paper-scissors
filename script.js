function scoring(player, computer) {
    if (player > computer) {
        console.log("Congrats you win " + player + " " + computer);
    } else if (computer > player) {
        console.log("The computer wins " + computer + " " + player);
    } else {
        console.log("It ends in a tie");
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Rock, paper, or scissors");
        let random = Math.random();

        let compChoice = "";
        if (random < 0.33) {
            compChoice = "rock";
        } else if (random < 0.66) {
            compChoice = "paper";
        } else {
            compChoice = "scissors";
        }

        if (userChoice.toLowerCase() != "rock" && userChoice.toLowerCase() != "paper" && userChoice.toLowerCase() != "scissors") {
            alert("please enter a valid answer")
            i--;
        } else if (userChoice.toLowerCase() === compChoice.toLowerCase()) {

            console.log("this round ended in a tie");

        } else if ((userChoice.toLowerCase() === "rock" && compChoice.toLowerCase() === "scissors")
            || (userChoice.toLowerCase() === "paper" && compChoice.toLowerCase() === "rock")
            || (userChoice.toLowerCase() === "scissors" && compChoice.toLowerCase() === "paper")) {

            console.log("you win this round");
            playerScore++;
        } else {
            console.log("computer wins this round");
            compScore++;
        }
    }

    scoring(playerScore, compScore);

}

game();
