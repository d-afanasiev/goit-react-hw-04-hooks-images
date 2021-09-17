import PropTypes from "prop-types";
import css from "./Button.module.css";

export default function Button({ onSubmit, currentPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ page: currentPage + 1 });
  };

  return (
    <button type="submit" className={css.Button} onClick={handleSubmit}>
      Load more
    </button>
  );
}

Button.propTypes = {
  totalHits: PropTypes.number,
  onSubmit: PropTypes.func,
  currentPage: PropTypes.number,
};
