import React from "react";

const Header = ({ humanScore, computerScore }) => {
  return (
    <header className="header">
      <div className="score-wrapper">
        <span className="score-title">Your score</span>
        <span className="score">{humanScore}</span>
      </div>
      <div className="title">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="score-wrapper">
        <span className="score-title">Computer score</span>
        <span className="score">{computerScore}</span>
      </div>
    </header>
  );
};

export default Header;
