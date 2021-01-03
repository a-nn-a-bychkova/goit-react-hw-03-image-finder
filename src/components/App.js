import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Searchform from './Searchform';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';

import Button from './Button';
import fetchImage from './services/images-api';
import s from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar>
          <Searchform onSubmit={this.handleFormSubmit} />
        </Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery} />

        {/* <Button /> */}

        {/* <Modal /> */}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
