import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Searchform from './Searchform';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Modal from './Modal';
import fetchImage from './services/images-api';
import s from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    src: '',
    alt: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleImageClick = (src, alt) => {
    this.setState({ src, alt });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { searchQuery, src, alt, showModal } = this.state;
    return (
      <div>
        <Searchbar>
          <Searchform onSubmit={this.handleFormSubmit} />
        </Searchbar>
        <ImageGallery
          searchQuery={searchQuery}
          onClick={this.handleImageClick}
        />
        {showModal && <Modal src={src} alt={alt} onClose={this.toggleModal} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
