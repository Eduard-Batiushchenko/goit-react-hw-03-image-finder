import React, { Component } from 'react';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchGallery } from './services/pixabay-api';
import Loader from 'react-loader-spinner';
import './_App.scss';

class App extends Component {
  state = {
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    modalOpen: false,
    largeImg: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, searchQuery, gallery, isLoading } = this.state;

    if (
      prevState.searchQuery !== this.state.searchQuery &&
      searchQuery !== ''
    ) {
      this.setState({ isLoading: !isLoading });
      fetchGallery(currentPage, searchQuery)
        .then(hits =>
          this.setState(prevState => {
            return { gallery: [...gallery, ...hits] };
          }),
        )
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    if (
      prevState.currentPage !== this.state.currentPage &&
      this.state.currentPage !== 1
    ) {
      this.setState({ isLoading: !isLoading });
      fetchGallery(currentPage, searchQuery)
        .then(hits =>
          this.setState(prevState => {
            return { gallery: [...gallery, ...hits] };
          }),
        )
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    if (prevState !== this.state) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmitForm = text => {
    this.setState({ searchQuery: text, gallery: [], currentPage: 1 });
  };

  loadMoreGallery = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };
  handleImage = id => {
    const result = this.state.gallery.find(el => id === el.id);
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen,
        largeImg: result.largeImageURL,
      };
    });
  };
  onCloseModal = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen };
    });
  };

  render() {
    const { gallery, searchQuery, modalOpen, largeImg, isLoading } = this.state;
    return (
      <>
        <Searchbar handleSubmitForm={this.handleSubmitForm} />
        {searchQuery.length > 0 && (
          <ImageGallery gallery={gallery} handleImage={this.handleImage} />
        )}

        {gallery.length > 0 && !isLoading && (
          <Button loadMoreGallery={this.loadMoreGallery} />
        )}
        {isLoading && (
          <Loader
            style={{ textAlign: 'center' }}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        )}
        {modalOpen && (
          <Modal onClose={this.onCloseModal}>
            <img src={largeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
