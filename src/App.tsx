import { useState } from "react";
import words from "./data/wordList.json";
import "./styles/AppStyle.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // return random word from word list
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div className="app-wrapper">
      <div className="app-text-info">lose or win</div>
      <HangmanDrawing />
      <HangmanWord />
    </div>
  );
}

export default App;
