import { Component } from "react";
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

class App extends Component {
  state = {
    images: [],
    name: "",
    page: null,
    showLoader: false,
    hits: 0,
    showModal: false,
    modalSrc: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.page !== prevState.page
    ) {
      this.dataRequestAPI();
    }
  }

  dataRequestAPI = () => {
    const { name, page } = this.state;
    this.toogleLoader(true);
    fetchImages(name, page)
      .then((images) => {
        if (images.data.hits.length === 0) {
          Notify.failure(
            "Sorry, there are no images matching your search query. Please try again."
          );
        }

        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...images.data.hits],
            hits: prevState.hits + images.data.hits.length,
          };
        });

        if (this.state.hits >= images.data.totalHits) {
          this.setState({ hits: 0 });
        }
        this.scrollToBottom();
      })
      .catch((error) => {
        Notify.failure(
          "Sorry, there are no images matching your search query. Please try again."
        );
      })
      .finally(() => this.toogleLoader(false));
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  writeValuesToState = (data) => {
    data.image
      ? this.setState({
          images: [],
          name: data.image,
          page: data.page,
          hits: data.hits,
        })
      : this.setState({ page: data.page, hits: data.hits });
  };

  toogleLoader = (status) => {
    return this.setState({ showLoader: status });
  };

  toogleModal = (data) => {
    this.setState({
      showModal: data,
    });
  };

  writeSrcState = (data) => {
    this.setState({
      modalSrc: data,
    });
  };

  render() {
    const { images, page, hits, showModal, modalSrc } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.writeValuesToState} />
        <ImageGallery>
          <ImageGalleryItem
            imageGallery={images}
            toogleModal={this.toogleModal}
            writeSrcState={this.writeSrcState}
          />
        </ImageGallery>
        {this.state.showLoader && (
          <Loader
            type="Audio"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={500}
            className="Loader"
          />
        )}
        <Button
          totalHits={hits}
          onSubmit={this.writeValuesToState}
          currentPage={page}
        />
        {showModal && (
          <Modal
            modalSrc={modalSrc}
            showLoader={showModal}
            toogleModal={this.toogleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
