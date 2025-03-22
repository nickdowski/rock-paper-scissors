# Rock Paper Scissors Game

## Overview
This is a simple **Rock Paper Scissors** game implemented in HTML, CSS, and JavaScript. The game is played entirely in the browser with a graphical interface using buttons instead of prompts. The player selects rock, paper, or scissors by clicking a button, and the computer randomly chooses its move. The game then determines a winner and updates the score. The first to 5 points wins.

## How It Works
1. The player clicks one of the three buttons: **Rock**, **Paper**, or **Scissors**.
2. The computer randomly selects one of the three options.
3. The game compares the player's choice with the computer's.
4. The winner is decided based on the standard Rock Paper Scissors rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
5. The winner’s score is incremented.
6. Scores are displayed on the page.
7. Once either player reaches 5 points, a winner is announced and the buttons are disabled.

## Files
- **index.html** – The structure of the webpage (includes scoreboard, buttons, and winner announcement area).
- **script.js** – JavaScript file containing game logic, score tracking, button creation, and DOM manipulation.

## Features
- Interactive buttons for making a move
- Random computer move generation
- Score tracking displayed on the page
- Winner announcement when a score of 5 is reached
- Disables buttons after the game ends
- Clean and simple UI with basic styling

## How to Play
1. Open `index.html` in a browser.
2. Click one of the three buttons: Rock, Paper, or Scissors.
3. Read the alert to see if you won, lost, or tied the round.
4. Watch your score update in real-time.
5. First to 5 points wins the game!
6. Refresh the page to play again (or implement a restart button in a future update).

## Future Updates
- Add a **"Play Again"** button to restart the game without refreshing.
- Add animations or images for better visual feedback.
- Add sound effects for each action.
- Improve responsiveness and styling for mobile devices.

---

🎮 Have fun playing!
