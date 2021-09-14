import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={css.ImageGallery}>{children}</ul>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.object,
};

export default ImageGallery;
