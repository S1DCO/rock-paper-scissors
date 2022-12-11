const getComputerChoice = function () {
  let randomNo = Math.trunc(Math.random() * 3 + 1);

  if (randomNo === 1) {
    console.log("Computer Choice:Rock");
    return "Rock";
  } else if (randomNo === 2) {
    console.log("Computer Choice: Paper");
    return "Paper";
  } else if (randomNo === 3) {
    console.log("Computer Choice: Scissor");
    return "Scissor";
  }
};

const playRound = function () {};
const button = document.querySelector(".btn-play");
console.log(button);

button.addEventListener("click", function () {
  let playerSelect = prompt(`Choose between: Rock, Paper, Scissor`);
});
