import React from 'react'

//This component provides a space to show the wrong letters selected
const WrongLetters = ({wrongLetters}) => {
  return (
    <div>
       <div className="wrong-letters-container">
        <div>
            {wrongLetters.length > 0 && <p>Wrong</p>}
            {wrongLetters
                .map((letter, i) => <span key={i}>{letter}</span>)
                //add commas in between spans
                .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) } 
        </div>
      </div>
    </div>
  )
}

export default WrongLetters
