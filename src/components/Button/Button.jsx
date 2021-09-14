import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

class Button extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ page: this.props.currentPage + 1, hits: 0 });
  };

  render() {
    const { totalHits } = this.props;

    return (
      totalHits !== 0 && (
        <button
          type="submit"
          className={css.Button}
          onClick={this.handleSubmit}
        >
          Load more
        </button>
      )
    );
  }
}

Button.propTypes = {
  totalHits: PropTypes.number,
  onSubmit: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Button;
