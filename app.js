let userPoints = 0;
let computerPoints = 0;

const options = document.querySelectorAll(".game-option");
const resultMessage = document.querySelector("#result-message");

const userPointsPara = document.querySelector("#user-points");
const computerPointsPara = document.querySelector("#computer-points");

const generateComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const handleDraw = () => {
  resultMessage.innerText = "It's a draw. Try again!";
  resultMessage.style.backgroundColor = "#333";
};

const displayWinner = (userWon, userSelection, computerSelection) => {
  if (userWon) {
    userPoints++;
    userPointsPara.innerText = userPoints;
    resultMessage.innerText = `You win! Your ${userSelection} beats ${computerSelection}`;
    resultMessage.style.backgroundColor = "green";
  } else {
    computerPoints++;
    computerPointsPara.innerText = computerPoints;
    resultMessage.innerText = `You lose. ${computerSelection} beats your ${userSelection}`;
    resultMessage.style.backgroundColor = "red";
  }
};

const startGame = (userSelection) => {
  const computerSelection = generateComputerChoice();

  if (userSelection === computerSelection) {
    handleDraw();
  } else {
    let userWins = true;
    if (userSelection === "rock") {
      userWins = computerSelection === "paper" ? false : true;
    } else if (userSelection === "paper") {
      userWins = computerSelection === "scissors" ? false : true;
    } else {
      userWins = computerSelection === "rock" ? false : true;
    }
    displayWinner(userWins, userSelection, computerSelection);
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const userSelection = option.getAttribute("id");
    startGame(userSelection);
  });
});
