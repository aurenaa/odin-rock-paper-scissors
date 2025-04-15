let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let choice;

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

choice = getComputerChoice();
let humanChoice = prompt("Rock, paper, scissors?");

function getHumanChoice(humanChoice){
    choice = humanChoice;
    return humanChoice;
}

console.log("Computer choice:", choice);
console.log("Human choice:", humanChoice);