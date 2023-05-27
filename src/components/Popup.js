import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

// The Popup component handles the display of popups during the Hangman game.
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  // Variables to hold the final message and reveal word message
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // Use the checkWin function from helpers.js to determine the game outcome
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'LOL! You won!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Lol, Try again!';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  }

  // Use the useEffect hook to update the playability of the game
  useEffect(() => setPlayable(playable));

  return (
    // Display the popup container if there is a final message
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        {/* Display the final message */}
        <h2>{finalMessage}</h2>
        {/* Display the reveal word message (if applicable) */}
        <h3>{finalMessageRevealWord}</h3>
        {/* Button to play again */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
