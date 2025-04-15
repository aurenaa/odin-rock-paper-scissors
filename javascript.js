let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

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
    humanChoice = prompt("Rock, paper, scissors?");
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
    for (let i = 0; i < 5; i++){

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

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