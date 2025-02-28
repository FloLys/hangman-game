import { useState } from 'react';
import React from 'react';

export const LetterInput = ({ onGuess, guessedLetters }) => {
  const [letter, setLetter] = useState("");

  const submitLetter = (e) => {
    e.preventDefault();
    onGuess(letter.trim().toLowerCase());
    setLetter("");
  };

  return (
    <>
      <div>
        {guessedLetters.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <form onSubmit={submitLetter}>
        <input
          type="text"
          value={letter}
          maxLength={1}
          onChange={(element) => {
            setLetter(element.target.value);
          }}
        ></input>
      </form>
    </>
  );
};

export default React.memo(LetterInput);
