import { useEffect } from "react";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

export default function Modal({ modalSrc, toogleModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toogleModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toogleModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toogleModal(false);
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={modalSrc} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalSrc: PropTypes.string,
  toogleModal: PropTypes.func,
};
