//Player choice constants
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

// Score variables
let playerScore = 0;
let computerScore = 0;

//Rounds variable
let rounds = 0;

// Get DOM elements
const resultEl = document.getElementById("result");
const finalEl = document.getElementById("final");
const startAgainBtn = document.getElementById("startAgainBtn");

// Button elements
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

// Event listeners
rockBtn.addEventListener("click", () => playRound(ROCK));
paperBtn.addEventListener("click", () => playRound(PAPER));
scissorsBtn.addEventListener("click", () => playRound(SCISSORS));
startAgainBtn.addEventListener("click", startAgain);

// Display round result
function displayRoundResult(player, computer, winner) {
  resultEl.style.color = '#B6C2B7'
  resultEl.innerText = `Player selects: ${player}\n\nComputer selects: ${computer}\n\n ${winner} wins!`;
  
  if (rounds === 5) {
    finalEl.innerText = `Final result: Player: ${playerScore} - Computer: ${computerScore}`;
  }
}

// Play a round
function playRound(playerChoice) {
  if (rounds >= 5) {
    return;
  }

  const computerChoice = getComputerChoice();
  rounds++;

  if (playerChoice === computerChoice) {
    displayRoundResult(playerChoice, computerChoice, "Draw");
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    playerScore++;
    displayRoundResult(playerChoice, computerChoice, "Player");
  } else {
    computerScore++;
    displayRoundResult(playerChoice, computerChoice, "Computer");
  }

  if (rounds === 5) {
    finalEl.style.display = 'block';
    finalEl.style.color = '#B6C2B7'
    finalEl.innerText = `Final result: Player: ${playerScore}\n\nComputer: ${computerScore}`;
    startAgainBtn.style.display = "block";
  }
}

// Function to reset the game and start over
function startAgain() {
  rounds = 0;
  playerScore = 0;
  computerScore = 0;
  finalEl.style.display = "none";
  startAgainBtn.style.display = "none";
  resultEl.innerText = "";
}

// Get random computer choice
function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Display final result
finalEl.innerText = `Final result: Player: ${playerScore} - Computer: ${computerScore}`;
