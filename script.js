function getComHand() { // random generates rock, paper, or scissors
    let rng = Math.floor(Math.random() * 3);
    if (rng === 0) {
        return "rock";
    } else if (rng === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumHand () {
    let choice = prompt("rock, paper, or scissors");

    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        return 0;
    }
}

let humScore = 0;
let comScore = 0;

function playRound () {

    let humHand = getHumHand();
    let comHand = getComHand();

    console.log("You chose: " + humHand)
    console.log("The computer chose: " + comHand)

    if (humHand === comHand) {
        console.log("Tie!");
    } else if (humHand === "rock" && comHand === "paper"
        || humHand === "paper" && comHand === "scissors"
        || humHand === "scissors" && comHand === "rock") {
        console.log("Lost!");
        comScore++;
    } else {
        console.log("Wins!");
        humScore++;
    }   
}

function playGame() {
    let round = 1
    do {
        console.log("Round " + round);
        playRound();
        round++;
    } while (round < 6);

    console.log("You: " + humScore);
    console.log("Computer: " + comScore);

    if (humScore === comScore) {
        console.log("It ends in a tie...")
    } else if (humScore > comScore) {
        console.log("Gratz, you won!")
    } else {
        console.log("Sadly, you lost.")
    }
}

playGame()