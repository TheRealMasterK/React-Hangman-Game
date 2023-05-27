import React from 'react';

// The Word component represents the word to be guessed in the Hangman game.
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* Split the selectedWord into individual letters and map over them */}
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {/* Display the letter if it is correct, otherwise display an empty string */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
