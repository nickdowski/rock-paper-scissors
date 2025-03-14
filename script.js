function getComputerChoice() {
    // Create an array of the 3 choices (rock, paper, or scissors)
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random choice
    const randomChoice = Math.floor(Math.random() * choices.length);
    // Return this random choice
    return choices[randomChoice];
}

function getHumanChoice() {
    // Prompt the user for a choice
    const choice = prompt('Please choose rock, paper, or scissors');
    // Return the user's choice
    return choice;
}


function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert( 'Tie!' ) 
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        alert( 'You win!' )
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        alert( 'You win!' )
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        alert( 'You win!' )
    }
    else {
        alert('You lose!')
    }
}

function playRound(humanChoice, computerChoice) {
}

let humanScore = 0;
let computerScore = 0;

function