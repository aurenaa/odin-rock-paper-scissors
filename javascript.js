let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

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
console.log(choice);