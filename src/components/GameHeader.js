import React, { useState } from 'react';

// The GameHeader component represents the header section of a Hangman game.
const GameHeader = ({ playAgain }) => {
  // State variable to control the visibility of the instructions modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the visibility of the instructions modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='titleDiv'>
        {/* Game title */}
        <h1 className='title'>Let's Play Hangman!!</h1>
        {/* Game instructions */}
        <p><em>Type letters to find the hidden word...</em></p>
        
        {/* Button to toggle the instructions modal */}
        <button className='helpButton' onClick={toggleModal}>Toggle Help</button>
        {/* Button to restart the game */}
        <button className='helpButton' onClick={playAgain}>Restart Game</button>
        
        {/* The modal below is toggled visible/invisible by the button above
          using some conditional in-line styling */}
        <div className='instructionsModal' style={{ display: showModal ? 'block' : 'none' }}>
          {/* Modal content */}
          <h5>Game Instructions</h5>
          <p>To play Hangman, you need to guess letters until you identify the missing word below.</p>
          <p>You need to find the letters before you end up in the hangman's noose, so choose your letters carefully!</p>
          <p>If you win or lose, you can click "Play Again" to reset the game. Good Luck!</p>
        </div>
      </div>
    </>
  );
};

export default GameHeader;
