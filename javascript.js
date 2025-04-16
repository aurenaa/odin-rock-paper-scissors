let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
let roundCounter = 0;

function getComputerChoice(){
    let random = Math.random();
    if (random >= 0.6){
        return "ROCK";
    }
    else if (random >= 0.3 && random < 0.6){
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function getHumanChoice(){
    alert("uslo");
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice){
    console.log("Computer choice:", computerChoice);
    console.log("Human choice:", humanChoice);

    if (humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }
    else if (humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    }
    else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }
    else if (humanChoice == computerChoice){
        console.log("It's a draw!");
    }
    else{
        console.log("You won!");
        humanScore++;
    }

    return computerScore, humanScore;
}

function playGame(){
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    roundCounter++;

    if (roundCounter == 5){
        console.log("FINAL SCORES:");
        console.log("Human: ", humanScore);
        console.log("Computer: ", computerScore);

        if (humanScore > computerScore){
            console.log("You won the game!");
        }
        else if (computerScore > humanScore){
            console.log("Computer won the game!");
        }
        else {
            console.log("It's a tie!");
        }
    }
}

let button = document.querySelector("#play");

const list = document.querySelector("ul");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

button.addEventListener("click", () => {
    const listItem = document.createElement("li");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    listItem.appendChild(rockButton);
    listItem.appendChild(paperButton);
    listItem.appendChild(scissorsButton);

    list.appendChild(listItem);
    alert("Choose one of the options.");
});

rockButton.addEventListener("click", () => {
    humanChoice = "ROCK";
    playGame();
});

paperButton.addEventListener("click", () => {
    humanChoice = "PAPER";
    playGame();
});

scissorsButton.addEventListener("click", () => {
    humanChoice = "SCISSORS"
    playGame();
});