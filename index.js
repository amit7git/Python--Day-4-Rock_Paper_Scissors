const rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;

const scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;

const gameImages = [rock, paper, scissors];

// Ask user input
let userChoice = prompt(
  "What do you want to choose?\nType 0 for Rock, 1 for Paper, or 2 for Scissors"
);

// Convert input to number
userChoice = Number(userChoice);

// Validate input
if (userChoice < 0 || userChoice > 2 || isNaN(userChoice)) {
  alert("You typed an invalid number. You lose!");
} else {
  console.log("You chose:");
  console.log(gameImages[userChoice]);

  // Computer choice
  const computerChoice = Math.floor(Math.random() * 3);
  console.log("Computer chose:");
  console.log(gameImages[computerChoice]);

  // Game logic
  if (userChoice === 0 && computerChoice === 2) {
    alert("You win!");
  } else if (computerChoice === 0 && userChoice === 2) {
    alert("You lose!");
  } else if (computerChoice > userChoice) {
    alert("You lose!");
  } else if (userChoice > computerChoice) {
    alert("You win!");
  } else {
    alert("It's a draw!");
  }
}
