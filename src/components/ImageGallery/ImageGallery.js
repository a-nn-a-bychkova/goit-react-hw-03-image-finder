import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import imageAPI from '../services/images-api';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export default class ImageGallery extends Component {
  state = { images: null, error: null, status: 'idle', page: 1 };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=${this.state.page}&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(images => {
          if (images.hits.length > 0) {
            return this.setState({
              // images,
              images: [...prevState.images.hits, this.state.images.hits],
              status: 'resolved',
            });
          }
          return this.setState({
            error: `по запросу ${this.props.searchQuery} ничего не найдено`,
            status: 'rejected',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  changePageNumber = page => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { error, images, status } = this.state;

    if (status === 'idle') {
      return <></>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error}</h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className={s.ImageGallery}>
            {images.hits.map((image, index) => (
              <ImageGalleryItem
                key={`${image.id}${index}`}
                smallPicture={image.webformatURL}
                largePicture={image.largeImageURL}
              />
            ))}
          </ul>
          <Button onClick={this.changePageNumber} />
        </div>
      );
    }
  }
}
