import { useState, useEffect } from 'react';
import GameHeader from './components/GameHeader'
import ImageFigure from './components/ImageFigure'
import './App.css'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show} from './helpers/helpers';
import randomWords from 'random-words'


const words = (randomWords(10));
let selectedWord = words[Math.floor(Math.random() * words.length)]; 

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  useEffect(()=> {
    const handleKeydown = event => {
        const { key, keyCode} = event;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
      
              } else {
                show(setShowNotification);
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setwrongLetters(wrongLetters => [...wrongLetters, letter]);
      
              } else {
                show(setShowNotification);
              }
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);
        return()=> window.removeEventListener('keydown', handleKeydown); //cleans up eventlistener so we only have one running
      }, [correctLetters, wrongLetters, playable]); //anytime items in array get updated, function is called

      function playAgain() {
        setPlayable(true);

      //Restore Empty Arrays so we can play again
      setCorrectLetters([]);
      setwrongLetters([]);

      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
      }

      
  //app display, passing required props to components
  return (
    <div className="App">
        <GameHeader playAgain={playAgain} />
        <div className='game-container'>
            <ImageFigure wrongLetters={wrongLetters} />
            <WrongLetters wrongLetters={wrongLetters} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
            <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;