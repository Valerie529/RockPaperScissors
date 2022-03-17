const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput
  } else
  console.log("Please enter a valid choice.");
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins";
    } else {
      return "You win!";
    }
  if (userChoice === "paper") {
    if (computerChoice === "scissors")
      return "Computer wins!";
   } else {
      return "You win!";
   }
};
  if (userChoice === "scissors") {
    if (computerChoice === "rock")
      return "Computer wins!";
  } else {
    return "You win!";
  }
};
 const playGame = () => {
   const userChoice = getUserChoice("scissors");
   const computerChoice = getComputerChoice();
   console.log(`You chose ${userChoice}`);
   console.log(`The computer chose ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
 };

playGame()





