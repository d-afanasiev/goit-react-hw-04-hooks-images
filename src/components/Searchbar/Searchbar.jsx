import { useState } from "react";
import { Notify } from "notiflix";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    image.trim() === ""
      ? Notify.warning("Search field is empty.")
      : onSubmit({ image, page: 1, hits: 0 });
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={image}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
