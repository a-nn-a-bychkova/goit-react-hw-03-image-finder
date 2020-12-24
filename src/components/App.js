import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGalleryItem />
        <Button />
        <Loader />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
