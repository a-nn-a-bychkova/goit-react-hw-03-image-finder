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

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     fetch(
  //       'https://pixabay.com/api/?key=19110749-e340c63922b3f8a4d502270f7&q={this.state.searchQuery}&image_type=photo',
  //     )
  //       .then(response => response.json())
  //       .then(images => this.setState({ images }))
  //       .finally(() => this.setState({ loading: false }));
  //   }, 2000);
  // }

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
