import Triangle from "../images/bg-triangle.svg";

import { Link } from "react-router-dom";

const CHOICES = ["rock", "paper", "scissors"];

const Play = ({ setChoice }) => {
  const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const handleSelectChoice = (value) => {
    setChoice((prev) => {
      return { ...prev, human: value, computer: random };
    });
  };

  return (
    <section className="play">
      <div className="icons-wrapper">
        <img src={Triangle} alt="triangle" className="triangle" />
        <div className="items">
          {CHOICES.map((item) => (
            <div
              data-id={item}
              key={item}
              className={`icon icon-${item}`}
              onClick={() => handleSelectChoice(item)}
            >
              <Link to="/game"></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Play;
