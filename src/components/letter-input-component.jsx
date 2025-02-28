import './letter-input-component.css';

import { useState } from 'react';
import React from 'react';

export const LetterInput = ({ onGuess, guessedLetters }) => {
  const [letter, setLetter] = useState("");

  const submitLetter = (inputLetter) => {
    inputLetter.preventDefault();
    onGuess(letter.trim().toLowerCase());
    setLetter("");
  };

  return (
    <div className="letter-input-container">
      <div className="letter-input-display">
        {guessedLetters.split("").map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ))}
      </div>
      <form onSubmit={submitLetter}>
        <input
          type="text"
          value={letter}
          maxLength={1}
          onChange={(inputLetter) => setLetter(inputLetter.target.value)}
        />
      </form>
    </div>
  );
};

export default React.memo(LetterInput);
