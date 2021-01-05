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
    return (
      <div>
        <Searchbar>
          <Searchform onSubmit={this.handleFormSubmit} />
        </Searchbar>
        <ImageGallery
          searchQuery={this.state.searchQuery}
          onClick={this.handleImageClick}
        />
        {this.state.showModal && (
          <Modal
            src={this.state.src}
            alt={this.state.alt}
            onClose={this.toggleModal}
          />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
