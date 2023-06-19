import React, { useState } from "react";
import "./styles/HangmanWordStyle.css";

function HangmanWord() {
  const [word, setWord] = useState<string>("word");

  const [guessedLetters, setGuessedLetters] = useState<string[]>(["d", "w"]);
  return (
    <div className="word-wrapper">
      {word.split("").map((letter, index) => (
        <span className="word-letter" key={index}>
          <span
            className="word-letter-guessed"
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
      <div />
    </div>
  );
}

export default HangmanWord;
