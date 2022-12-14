const btnStart = document.querySelector(".btn-start");
const header = document.querySelector(".header");
const gameContainer = document.querySelector(".game-container");
const btnChoicesContainer = document.querySelector(".btn-choices-container");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const resultsMessage = document.querySelector(".results-message");
const btnPlayAgain = document.querySelector(".btn-play-again");
const results = document.querySelector(".results");

const score = [0, 0];
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  let randomNo = Math.trunc(Math.random() * 3);
  return choices[randomNo];
};
const displayScore = function () {
  playerScore.textContent = score[0];
  computerScore.textContent = score[1];
};
const playRound = function (e) {
  if (!e.target.dataset.choice) return;
  let playerSelection = e.target.dataset.choice;
  let computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    score[0] += 1;
  } else if (playerSelection === computerSelection) {
    return;
  } else {
    score[1] += 1;
  }
  displayScore();

  if (score[0] === 5 || score[1] === 5) {
    gameContainer.classList.add("hidden");
    score[0] === 5
      ? (resultsMessage.textContent = "You win!")
      : (resultsMessage.textContent = "You lose!");
    results.classList.remove("hidden");
  }
};
const startGame = function () {
  results.classList.add("hidden");
  header.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  score.forEach((score, i, array) => (array[i] = 0));
  displayScore();
};

const game = function () {
  btnStart.addEventListener("click", startGame);
  btnChoicesContainer.addEventListener("click", playRound);
  btnPlayAgain.addEventListener("click", startGame);
};
game();
