function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
      return "rock";
  } else if (computerChoice === 1) {
      return "paper";
  } else {
      return "scissors";
  }
}

function displayResult(message) {
  document.getElementById('result').textContent = message;
}

function updateScore() {
  document.getElementById('score').textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
  resetButton.classList.toggle('d-none', !(humanScore === 5 || computerScore === 5));
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function checkForWinner() {
  if (humanScore === 5) {
      displayResult("Game Over - You win the game! 🎉");
      disableButtons();
      return true;
  } else if (computerScore === 5) {
      displayResult("Game Over - Computer wins the game! 🤖");
      disableButtons();
      return true;
  }
  return false;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  displayResult("");
  enableButtons();
  resetButton.classList.add('d-none');
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      displayResult("It's a tie! 🤝");
  }

  if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
          humanScore++;
          displayResult("You win! Rock beats Scissors 🎉");
      } else if (computerChoice === "paper") {
          computerScore++;
          displayResult("You lose! Paper beats Rock 😔");
      }
  }

  if (humanChoice === "paper") {
      if (computerChoice === "rock") {
          humanScore++;
          displayResult("You win! Paper beats Rock 🎉");
      } else if (computerChoice === "scissors") {
          computerScore++;
          displayResult("You lose! Scissors beats Paper 😔");
      }
  }
  
  if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
          humanScore++;
          displayResult("You win! Scissors beats Paper 🎉");
      } else if (computerChoice === "rock") {
          computerScore++;
          displayResult("You lose! Rock beats Scissors 😔");
      }
  }

  updateScore();
  checkForWinner();
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound('rock', computerChoice);
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound('paper', computerChoice);
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound('scissors', computerChoice);
});

resetButton.addEventListener('click', resetGame);