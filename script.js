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
    console.log("It's a tie!")
  }

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
    } else {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
    } else {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    }
  }
  
  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beats Paper");
    } else {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    }
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game");
  }
}

playGame();
