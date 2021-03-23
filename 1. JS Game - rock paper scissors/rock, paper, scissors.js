const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  }
  else {
    console.log('That is an incorrect choice. Please try again.')
  }
};

const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3)
  let choice = "unassigned"
  switch (num){
    case 0:
      choice = "rock"
      break;
    case 1:
      choice = "paper"
      break;
    case 2:
      choice = "scissors"
      break;
    default:
      choice = "broken"
  }
  return choice;
};

const determineWinner = (userChoice, computerChoice) => {
  msg = ""
  if (userChoice === computerChoice) {
    msg = "You have tied!"
  }

  else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      msg = "You lose!"
    }
    else {
      msg = "You win!"
    }
  }

  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      msg = "You lose!"
    }
    else {
      msg = "You win!"
    }
  }

  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      msg = "You lose!"
    }
    else {
      msg = "You win!"
    }
  }

  else {
    msg = "error!"
  }

  return msg

};

function playGame() {
  var userChoice = getUserChoice("rock");
  var computerChoice = getComputerChoice();

  console.log("You threw: " + userChoice);
  console.log("Computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()