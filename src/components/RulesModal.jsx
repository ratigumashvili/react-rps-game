import CloseIcon from "../images/icon-close.svg";
import RulesImage from "../images/image-rules.svg";

const RulesModal = ({ toggle, modalRef }) => {
  return (
    <div ref={modalRef} className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Rules</h1>
          <button className="close-btn" onClick={toggle}>
            <img src={CloseIcon} alt="Close modal" />
          </button>
        </div>
        <div className="modal-content">
          <img src={RulesImage} alt="Game rules" />
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
