import { Component } from "react";
import { Notify } from "notiflix";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    image: "",
  };

  handleChange = (e) => {
    this.setState({
      image: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.image.trim() === ""
      ? Notify.warning("Search field is empty.")
      : this.props.onSubmit({ image: this.state.image, page: 1, hits: 0 });
  };

  render() {
    const { image } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
