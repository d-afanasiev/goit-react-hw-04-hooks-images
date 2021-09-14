import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({
  imageGallery,
  toogleModal,
  writeSrcState,
}) {
  const handleSrcState = (data) => {
    writeSrcState(data);
    toogleModal(true);
  };

  return (
    imageGallery.length !== 0 &&
    imageGallery.map((image) => (
      <li key={image.id} className={css.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={css.ImageGalleryItemImage}
          onClick={() => handleSrcState(image.largeImageURL)}
        />
      </li>
    ))
  );
}

ImageGalleryItem.propTypes = {
  imageGallery: PropTypes.arrayOf(PropTypes.object),
  toogleModal: PropTypes.func,
  writeSrcState: PropTypes.func,
};
