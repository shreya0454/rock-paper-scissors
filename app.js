document.addEventListener("DOMContentLoaded", () => {

  let userScore = 0;
  let compScore = 0;

  const choices = document.querySelectorAll(".choice");
  const msg = document.querySelector("#Play");

  const userScorePara = document.querySelector("#userScore");
  const compScorePara = document.querySelector("#compScore");

  // Generate Computer Choice
  const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
  };

  // Determine Winner
  const getWinner = (user, comp) => {
    if (user === comp) return "draw";

    if (
      (user === "rock" && comp === "scissors") ||
      (user === "paper" && comp === "rock") ||
      (user === "scissors" && comp === "paper")
    ) {
      return "user";
    }
    return "comp";
  };

  // Display Result
  const showResult = (result) => {
    if (result === "draw") {
      msg.innerText = "It's a Draw!";
      msg.style.backgroundColor = "blue";
    } 
    else if (result === "user") {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = "You Won!";
      msg.style.backgroundColor = "green";
    } 
    else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = "You Lost!";
      msg.style.backgroundColor = "red";
    }
  };

  // Main Game Function
  const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    const result = getWinner(userChoice, compChoice);
    showResult(result);
  };

  // Add Click Events
  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      playGame(choice.id);
    });
  });

});
