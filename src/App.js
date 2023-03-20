import React, { useState } from "react";
import { NavBar } from "./components/navBar";
import { GameBoard } from "./components/gameBoard";

import './styles/general-style.css';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <NavBar currentScore={currentScore} bestScore={bestScore} />
      <GameBoard currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
