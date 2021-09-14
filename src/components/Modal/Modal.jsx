import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toogleModal(false);
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.toogleModal(false);
    }
  };

  render() {
    const { modalSrc } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={modalSrc} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalSrc: PropTypes.string,
  showLoader: PropTypes.bool,
  toogleModal: PropTypes.func,
};

export default Modal;
