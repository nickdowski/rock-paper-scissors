function getComputerChoice() {
    // Create an array of the 3 choices (rock, paper, or scissors)
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random choice
    const randomChoice = Math.floor(Math.random() * choices.length);
    // Return this random choice
    return choices[randomChoice];
}
