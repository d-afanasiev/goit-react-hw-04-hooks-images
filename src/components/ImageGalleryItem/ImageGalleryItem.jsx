import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  writeSrcState = (e) => {
    this.props.writeSrcState(e.target.dataset.src);
    this.props.toogleModal(true);
  };

  render() {
    const { imageGallery } = this.props;

    return (
      imageGallery.length !== 0 &&
      imageGallery.map((image) => (
        <li key={image.id} className={css.ImageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            data-src={image.largeImageURL}
            className={css.ImageGalleryItemImage}
            onClick={this.writeSrcState}
          />
        </li>
      ))
    );
  }
}

ImageGalleryItem.propTypes = {
  imageGallery: PropTypes.arrayOf(PropTypes.object),
  toogleModal: PropTypes.func,
  writeSrcState: PropTypes.func,
};

export default ImageGalleryItem;
