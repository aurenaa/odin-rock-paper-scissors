let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

let computerChoice;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let random = Math.random();
    if (random >= 0.6){
        choice = rock;
    }
    else if (random >= 0.3 && random < 0.6){
        choice = paper;
    }
    else {
        choice = scissors;
    }

    return choice;
}

computerChoice = getComputerChoice();
let humanChoice = prompt("Rock, paper, scissors?");

function getHumanChoice(humanChoice){
    choice = humanChoice;
    return humanChoice;
}

console.log("Computer choice:", computerChoice);
console.log("Human choice:", humanChoice);

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    console.log("Human choice2:", humanChoice);
    if (humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper"){
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

playRound(humanChoice, computerChoice);
console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);