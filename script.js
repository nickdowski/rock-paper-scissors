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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case insensitive
    humanChoice = humanChoice.toLowerCase();
    // Display the choices and determine the winner of round
    if (humanChoice === computerChoice) {
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
    } else {
        computerScore++;
    }
    
    // Update the scores
    const humanScoreDisplay = document.getElementById('human-score');
    humanScoreDisplay.textContent = humanScore;
    const computerScoreDisplay = document.getElementById('computer-score');
    computerScoreDisplay.textContent = computerScore;

    // Check for winner of game
    if (humanScore === 5) {
        alert('You Win!');
    } else if (computerScore === 5) {
        alert('You Lost!');
    }
}




// Create a rock button
const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
document.body.appendChild(rock);

// Create a paper button
const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
document.body.appendChild(paper);

// Create a scissors button
const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
document.body.appendChild(scissors);



