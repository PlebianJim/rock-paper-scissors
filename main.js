//Game constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//Keep track of scores
let playerScore = 0;
let computerScore = 0;

//Get computer's choice
function getComputerChoice() {
  const rpsArray = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * rpsArray.length);
  console.log("The computer chooses: " + rpsArray[randomChoice]);
  return String(rpsArray[randomChoice]);
}

//Get player's choice
function getPlayerChoice() {
  const choice = String(prompt("Choose rock, paper or scissors: "));
  console.log(`The player chooses: ${choice}`);
  return choice;
}

//Play a round
function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  //Game logic
  if (playerChoice == computerChoice) {
    console.log("Draw!");
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("Player wins!");
    playerScore++;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins!");
    computerScore++;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("Player wins!");
    playerScore++;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins!");
    computerScore++;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("Player wins!");
    playerScore++;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer Wins!");
    computerScore++;
  } else console.log("Invalid Choice!");
}

//Game loop
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  //Display final scores
  console.log("Final Scores: ");
  console.log("Player Score: ", playerScore);
  console.log("Computer Score: ", computerScore);
}

game();
