import RulesModal from "./RulesModal";

import useModal from "../hooks/useModal";

import { useRef } from "react";

const Footer = () => {
  const modalRef = useRef();
  const { isShowing, toggle } = useModal(modalRef);
  return (
    <>
      {isShowing && <RulesModal toggle={toggle} modalRef={modalRef} />}
      <footer>
        <span className="attribution">
          Design picked from{" "}
          <a href="https://www.frontendmentor.io" target="blank">
            frontendmentor.io
          </a>
        </span>
        <button onClick={toggle} className="btn">
          Rules
        </button>
      </footer>
    </>
  );
};

export default Footer;
