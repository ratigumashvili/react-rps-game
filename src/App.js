import Header from "./components/Header";
import Footer from "./components/Footer";
import Play from "./components/Play";
import Game from "./components/Game";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
  const [score, setScore] = useState({
    human: 0,
    computer: 0,
    message: "",
  });

  const [choice, setChoice] = useState({
    human: "",
    computer: "",
  });

  const humanScore = score.human;
  const computerScore = score.computer;
  const message = score.message;
  const humanChoice = choice.human;
  const computerChoice = choice.computer;
  return (
    <div className="app-container">
      <Header humanScore={humanScore} computerScore={computerScore} />
      <Routes>
        <Route path="/" element={<Play setChoice={setChoice} />} />
        <Route
          path="/game"
          element={
            <Game
              humanScore={humanScore}
              computerScore={computerScore}
              message={message}
              setScore={setScore}
              humanChoice={humanChoice}
              computerChoice={computerChoice}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
