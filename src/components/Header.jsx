import React from "react";

const Header = () => {
  return (
    <section className="header">
      <div className="score-wrapper">
        <span className="score-title">Human score</span>
        <span className="score">0</span>
      </div>
      <div className="title">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="score-wrapper">
        <span className="score-title">Computer score</span>
        <span className="score">0</span>
      </div>
    </section>
  );
};

export default Header;
