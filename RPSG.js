const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.querySelector(".player_display");
const computerDisplay = document.querySelector(".computer_display");
const resultDisplay = document.querySelector(".result_display");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const ComputerScoreDisplay = document.querySelector("#computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;

function  playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice){
    result = "IT'S A DRAW! "
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice ===  "scissor") ? "YOU WIN!" : "YOU LOSE!";
        break;
      
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "scissor":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER : ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText","blueText","redText")

switch(result){
  case  "YOU WIN!":
    resultDisplay.classList.remove("redText","blueText","greenText")
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    break;

  case  "YOU LOSE!":
    resultDisplay.classList.remove("greenText","blueText","redText")
    resultDisplay.classList.add("redText");
    computerScore++;
    ComputerScoreDisplay.textContent = computerScore;
    break;
  }
}