console.log("Welcome to Rock Paper Scissors!");


let UserScore = 0;
let ComputerScore = 0;

let number_of_rounds = 5;

// Computer Choice
function getComputerChoice() {
switch (Math.floor(Math.random()*3)+1) {
    case 1:
        // console.log(1);
        return 'rock';
    case 2:
        // console.log(2);
        return 'paper';
    case 3:
        // console.log(3);
        return 'scissors';}
}

// console.log(getComputerChoice());

// User Choice
function getUserChoice () {
    let userChoice = prompt("Please enter your choice: rock, paper, or scissors: ");
    return userChoice;
}

// console.log(getUserChoice());

for (let i=0 ; i<number_of_rounds ; i++) {
    console.log("Current Round:",i+1,"\n"+"Current User Score:",UserScore,"\n"+"Current Computer Score:",ComputerScore);

    let userChoice = getUserChoice();
    userChoice = userChoice.toLowerCase().trim().replace(/\s+/g, "");

    let computerChoice = getComputerChoice();

    console.log("User Choice:",userChoice,"\n"+"Computer Choice:",computerChoice);

    if (userChoice === computerChoice) {
        UserScore += 1;
        ComputerScore += 1;
        console.log("It's a tie!");
    }

    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        UserScore += 1;
        console.log("User wins!");
    }

    else if (userChoice === 'paper' && computerChoice === 'rock') {
        UserScore += 1;
        console.log("User wins!");
    }

    else if ((userChoice === 'scissors' || userChoice === 'scissor') && computerChoice === 'paper') {
        UserScore += 1;
        console.log("User wins!");
    }

    else {
        ComputerScore += 1;
        console.log("Computer wins!");
    }
}

if (UserScore > ComputerScore) {
    console.log("Game Over!\nFinal Scores:\nFinal User Score:",UserScore,"\nFinal Computer Score:",ComputerScore,"\n"+"User wins!");
    alert("User wins the game!");
} else if (UserScore < ComputerScore) {
    console.log("Game Over!\nFinal Scores:\nFinal User Score:",UserScore,"\nFinal Computer Score:",ComputerScore,"\n"+"Computer wins!");
    alert("Computer wins the game!");
} else {
    console.log("Game Over!\nFinal Scores:\nFinal User Score:",UserScore,"\nFinal Computer Score:",ComputerScore,"\n"+"It's a tie!");
    alert("The Game is a tie!");
}



