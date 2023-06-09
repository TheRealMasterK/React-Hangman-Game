import React from 'react';

// Importing the hangman image files
import hangman1 from '../hangmanImages/state1.GIF';
import hangman2 from '../hangmanImages/state2.GIF';
import hangman3 from '../hangmanImages/state3.GIF';
import hangman4 from '../hangmanImages/state4.GIF';
import hangman5 from '../hangmanImages/state5.GIF';
import hangman6 from '../hangmanImages/state6.GIF';
import hangman7 from '../hangmanImages/state7.GIF';
import hangman8 from '../hangmanImages/state8.GIF';
import hangman9 from '../hangmanImages/state9.GIF';
import hangman10 from '../hangmanImages/state10.gif';
import hangman11 from '../hangmanImages/state11.GIF';
import hangman12 from '../hangmanImages/state11.GIF';

// The ImageFigure component represents the visual display of the Hangman game's hangman figure.
const ImageFigure = ({ wrongLetters }) => {
  // Determine the number of errors based on the length of the `wrongLetters` array
  const errors = wrongLetters.length;

  // Create an array containing all the hangman image variables
  const hangmanImages = [hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7, hangman8, hangman9, hangman10, hangman11, hangman12];

  return (
    <div>
      {/* Display the hangman image corresponding to the current number of errors */}
      <img
        src={hangmanImages[errors]}
        alt="Hangman"
        className="ImageFigure-container"
      />
    </div>
  );
};

export default ImageFigure;
