import React, { useState } from "react";
import "./styles/HangmanWordStyle.css";

type HangmanWordPrps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

function HangmanWord({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordPrps) {
  return (
    <div className="word-wrapper">
      {wordToGuess.split("").map((letter, index) => (
        <span className="word-letter" key={index}>
          <span
            className="word-letter-guessed"
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
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
