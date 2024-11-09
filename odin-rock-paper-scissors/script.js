"use strict";
// Selecting DOM elements
const gameResult = document.querySelector(".game__result");
const gameDesc = document.querySelector(".game__desc");
const humanText = document.querySelector(".human__text");
const humanScoreText = document.getElementById("humanScore");
const computerText = document.querySelector(".computer__text");
const computerScoreText = document.getElementById("computerScore");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.querySelector(".reset");

// Scores
let computerScore = 0;
let humanScore = 0;

// Round
let round = 0;

// Computer Choice
const getComputerChoice = () => {
  const choices = ["✊🏻", "✋🏻", "✌🏻"];
  return choices[Math.floor(Math.random() * choices.length)];
};

// Human Choice
const getHumanChoice = (choice) => {
  return choice.textContent;
};

// Game Logic
const playRound = (choice) => {
  const computer = getComputerChoice();
  const human = getHumanChoice(choice);

  humanText.textContent = human;
  computerText.textContent = computer;

  if (human === computer) {
    gameResult.textContent = "It's a tie!";
    gameDesc.textContent = `${human} ties with ${computer}`;
  }

  if (human === "✊🏻") {
    if (computer === "✋🏻") {
      gameResult.textContent = "You win this round!";
      gameDesc.textContent = `${human} crushes ${computer}`;
      humanScoreText.textContent = ++humanScore;
    } else if (computer === "✌🏻") {
      gameResult.textContent = "Computer wins this round!";
      gameDesc.textContent = `${human} loses to ${computer}`;
      computerScoreText.textContent = ++computerScore;
    }
  }

  if (human === "✋🏻") {
    if (computer === "✌🏻") {
      gameResult.textContent = "You win this round!";
      gameDesc.textContent = `${human} covers ${computer}`;
      humanScoreText.textContent = ++humanScore;
    } else if (computer === "✊🏻") {
      gameResult.textContent = "Computer wins this round!";
      gameDesc.textContent = `${human} gets crushed by ${computer}`;
      computerScoreText.textContent = ++computerScore;
    }
  }

  if (human === "✌🏻") {
    if (computer === "✊🏻") {
      gameResult.textContent = "You win this round!";
      gameDesc.textContent = `${human} smashes ${computer}`;
      humanScoreText.textContent = ++humanScore;
    } else if (computer === "✋🏻") {
      gameResult.textContent = "Computer wins this round!";
      gameDesc.textContent = `${human} gets covered by ${computer}`;
      computerScoreText.textContent = ++computerScore;
    }
  }

  if (round >= 5) {
    reset.classList.remove("hidden");
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    if (humanScore > computerScore) {
      gameResult.textContent = "You win the game!";
      gameDesc.textContent = `Final score - You: ${humanScore}, Computer: ${computerScore}`;
    } else if (computerScore > humanScore) {
      gameResult.textContent = "Computer wins the game!";
      gameDesc.textContent = `Final score - You: ${humanScore}, Computer: ${computerScore}`;
    } else {
      gameResult.textContent = "It's a tie!";
      gameDesc.textContent = `Final score - You: ${humanScore}, Computer: ${computerScore}`;
    }
  }
};

// Reset Logic
const gameReset = () => {
  humanScore = 0;
  computerScore = 0;
  gameResult.textContent = "";
  gameDesc.textContent = "";
  humanScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;
  round = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  reset.classList.add("hidden");
};

// Event listener for the Rock, Paper, Scissors and Reset
rock.addEventListener("click", () => {
  ++round;
  playRound(rock);
});
paper.addEventListener("click", () => {
  ++round;
  playRound(paper);
});
scissors.addEventListener("click", () => {
  ++round;
  playRound(scissors);
});

reset.addEventListener("click", () => {
  gameReset();
});
