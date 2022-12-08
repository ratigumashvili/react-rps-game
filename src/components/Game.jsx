import { Link } from "react-router-dom";

import { useEffect } from "react";

const Game = ({
  humanScore,
  computerScore,
  message,
  setScore,
  humanChoice,
  computerChoice,
}) => {
  useEffect(() => {
    setTimeout(() => {
      switch (humanChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
          setScore((prev) => {
            return { ...prev, human: humanScore + 1, message: "You win" };
          });
          break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
          setScore((prev) => {
            return {
              ...prev,
              computer: computerScore + 1,
              message: "Computer wins",
            };
          });
          break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
          setScore((prev) => {
            return { ...prev, message: "It's a draw" };
          });
          break;
        default:
          break;
      }
    }, [1000]);
    // eslint-disable-next-line
  }, [computerChoice, humanChoice]);

  const handleResetMessage = () => {
    setScore((prev) => {
      return { ...prev, message: "" };
    });
  };

  return (
    <section className="game">
      <div className="items-wrapper">
        <div className="item">
          <h2>You choosed</h2>
          <div
            className={`icon icon-${humanChoice} ${
              message === "You win" ? `winner` : ``
            }`}
          ></div>
        </div>
        {message && (
          <div className="item">
            <h1>{message}</h1>
            <Link className="play-again" to="/" onClick={handleResetMessage}>
              Play again
            </Link>
          </div>
        )}
        <div className="item">
          <h2>Computer choosed</h2>
          <div
            className={`icon icon-${computerChoice} ${
              message === "Computer wins" ? `winner` : ``
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Game;
