import { useState } from "react";
import words from "./data/wordList.json";
import "./styles/appStyles.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div className="app-wrapper">
      <div className="app-text-info">lose or win</div>
    </div>
  );
}

export default App;
