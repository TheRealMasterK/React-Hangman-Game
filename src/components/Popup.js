import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';

//This Component governs the Popups during the game
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    //interacts with the checkWin function in helper.js, via App.js
    if ( checkWin(correctLetters, wrongLetters, selectedWord) ==='win') {
        finalMessage = 'Legend Alert - you won!';
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) ==='lose') {
        finalMessage = 'That must have hurt, you lost!';
        finalMessageRevealWord = ` ...the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));
  return (
      <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
        <div className="popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default Popup
