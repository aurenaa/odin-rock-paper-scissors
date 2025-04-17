let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
let drawCount = 0;
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
        roundResults.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
    }
    else if (humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        roundResults.textContent = "You lose! Scissors beats Paper!";
        computerScore++;
    }
    else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
        roundResults.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    }
    else if (humanChoice == computerChoice){
        roundResults.textContent = "It's a draw!";
        drawCount++;
    }
    else{
        roundResults.textContent = "You won!";
        humanScore++;
    }

    return computerScore, humanScore;
}

function playGame(){
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    roundCounter++;
    scores.textContent = `Won: ${humanScore} | Lost: ${computerScore} | Draw: ${drawCount}`;

    if (roundCounter == 5){

        gameResult.textContent = "FINAL RESULT:";

        if (humanScore > computerScore){
            roundResults.textContent = "You won the game!";
            console.log("You won the game!");
        }
        else if (computerScore > humanScore){
            roundResults.textContent = "Computer won the game!";
            console.log("Computer won the game!");
        }
        else {
            roundResults.textContent = "It's a tie!";
            console.log("It's a tie!");
        }

        button.textContent = "Play again";
    }
}

const button = document.querySelector("#play");
const div = document.querySelector("#body");

const list = document.querySelector("ul");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const scores = document.createElement("p");
const roundResults = document.createElement("p");
const gameResult = document.createElement("p");

button.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    drawCount = 0;
    roundCounter = 0;

    const listItem = document.createElement("li");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    listItem.appendChild(rockButton);
    listItem.appendChild(paperButton);
    listItem.appendChild(scissorsButton);

    list.appendChild(listItem);

    scores.textContent = "Won: 0 | Lost: 0 | Draw: 0";
    roundResults.textContent = "";
    gameResult.textContent = "";
    div.appendChild(gameResult);
    div.appendChild(roundResults);
    div.appendChild(scores);
});

rockButton.classList.add("game-button");
paperButton.classList.add("game-button");
scissorsButton.classList.add("game-button");

rockButton.addEventListener("click", () => {
    humanChoice = "ROCK";
    if (roundCounter >= 5){
        scores.textContent = "";
        roundResults.textContent = "";
        gameResult.textContent = "Click the button to play another game!";
    }
    else{
        playGame();
    }
});

paperButton.addEventListener("click", () => {
    humanChoice = "PAPER";
    if (roundCounter >= 5){
        scores.textContent = "";
        roundResults.textContent = "";
        gameResult.textContent = "Click the button to play another game!";
    }
    else{
        playGame();
    }
});

scissorsButton.addEventListener("click", () => {
    humanChoice = "SCISSORS"
    if (roundCounter >= 5){
        scores.textContent = "";
        roundResults.textContent = "";
        gameResult.textContent = "Click the button to play another game!";
    }
    else{
        playGame();
    }
});