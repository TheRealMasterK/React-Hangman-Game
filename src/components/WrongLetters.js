import React from 'react';

// The WrongLetters component provides a space to display the wrong letters selected in the Hangman game.
const WrongLetters = ({ wrongLetters }) => {
  return (
    <div>
      <div className="wrong-letters-container">
        <div>
          {/* Display "Wrong" if there are wrong letters */}
          {wrongLetters.length > 0 && <p>Wrong</p>}
          {/* Map over the wrongLetters array to display each wrong letter */}
          {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            // Add commas between the spans
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </div>
    </div>
  );
};

export default WrongLetters;
