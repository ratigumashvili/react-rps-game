import LaughingCat from "../images/laugh-hard.gif";
import CateWell from "../images/cat-well.gif";
import CatDraw from "../images/draw-cat.gif";

const GameAnimation = ({ message }) => {
  return (
    <div className="game-animation">
      {message === "Computer wins" && (
        <img src={LaughingCat} alt="Laughing cat" />
      )}
      {message === "You win" && <img src={CateWell} alt="Approving  cat" />}
      {message === "It's a draw" && <img src={CatDraw} alt="Draw" />}
    </div>
  );
};

export default GameAnimation;
