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

function getHumanChoice() {
  const humanChoice = prompt("Select your action.").toLocaleLowerCase();
  if (["rock", "paper", "scissors"].includes(humanChoice)) {
    return humanChoice;
  } else {
    return "Invalid choice";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    displayResult("It's a tie!")
  }

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      displayResult("You win! Rock beats Scissors");
    } else {
      computerScore++;
      displayResult("You lose! Paper beats Rock");
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      displayResult("You win! Paper beats Rock");
    } else {
      computerScore++;
      displayResult("You lose! Scissors beats Paper");
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      displayResult("You win! Scissors beats Paper");
    } else {
      computerScore++;
      displayResult("You lose! Rock beats Scissors");
    }
  }

  updateScore();
  checkForWinner();
}

let humanScore = 0;
let computerScore = 0;

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

let resetButton = document.createElement('button');
resetButton.textContent = 'Play Again';
resetButton.style.display = 'none';
document.body.appendChild(resetButton);

function displayResult(message) {
  document.getElementById('result').textContent = message
}

function checkForWinner() {
  if (humanScore === 5) {
    displayResult("Game Over - You win the game!");
    disableButtons();
    return true;
  } else if (computerScore === 5) {
    displayResult("Game Over - Computer wins the game!");
    disableButtons();
    return false;
  }
  return false
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  displayResult("");
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function updateScore() {
  document.getElementById('score').textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
  resetButton.style.display = (humanScore === 5 || computerScore === 5) ? 'block' : 'none';
}

resetButton.addEventListener('click', resetGame);

rockButton.addEventListener('click', function () {
  const computerChoice = getComputerChoice();
  playRound('rock', computerChoice);
});

paperButton.addEventListener('click', function () {
  const computerChoice = getComputerChoice();
  playRound('paper', computerChoice);
});

scissorsButton.addEventListener('click', function () {
  const computerChoice = getComputerChoice();
  playRound('scissors', computerChoice);
});
