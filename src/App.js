import { useState, useEffect } from "react";
import { Notify } from "notiflix";
import Loader from "react-loader-spinner";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import fetchImages from "./services/pixabay-api";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";

export default function App(params) {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [page, setpage] = useState(1);
  const [hits, setHits] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  useEffect(() => {
    if (!name) {
      return;
    }

    toogleLoader(true);
    fetchImages(name, page)
      .then((totalImages) => {
        setHits(totalImages.data.hits.length);
        if (totalImages.data.hits.length === 0) {
          Notify.failure(
            "Sorry, there are no images matching your search query. Please try again."
          );
          setHits(0);
        }
        setImages((prevImages) => [...prevImages, ...totalImages.data.hits]);
      })
      .catch((error) => {
        Notify.failure(
          "Sorry, there are no images matching your search query. Please try again."
        );
        setHits(0);
      })
      .finally(() => {
        toogleLoader(false);
        scrollToBottom();
      });
  }, [name, page]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const writeValuesToState = (data) => {
    if (data.image) {
      setImages([]);
      setName(data.image);
      setpage(data.page);
    } else {
      setpage(data.page);
    }
  };

  const toogleLoader = (status) => {
    return setShowLoader(status);
  };

  const toogleModal = (data) => {
    setShowModal(data);
  };

  const writeSrcState = (data) => {
    setModalSrc(data);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={writeValuesToState} />
      <ImageGallery>
        <ImageGalleryItem
          imageGallery={images}
          toogleModal={toogleModal}
          writeSrcState={writeSrcState}
        />
      </ImageGallery>
      {showLoader && (
        <Loader
          type="Audio"
          color="#3f51b5"
          height={80}
          width={80}
          timeout={500}
          className="Loader"
        />
      )}
      {!showLoader && hits >= 12 && (
        <Button onSubmit={writeValuesToState} currentPage={page} />
      )}
      {showModal && <Modal modalSrc={modalSrc} toogleModal={toogleModal} />}
    </div>
  );
}
