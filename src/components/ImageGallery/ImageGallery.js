import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import imageAPI from '../services/images-api';
import PropTypes from 'prop-types';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export default class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const currentSearchQuery = this.props.searchQuery;
    const currentPage = this.state.page;
    if (
      prevProps.searchQuery !== currentSearchQuery ||
      prevState.page !== currentPage
    ) {
      this.setState({ status: 'pending' });

      imageAPI
        .fetchImage(currentSearchQuery, currentPage)
        .then(newImages => {
          console.log(newImages);
          if (newImages.hits.length > 0) {
            return this.setState(prevState => ({
              images: [...prevState.images, ...newImages.hits],
              status: 'resolved',
            }));
          }
          return this.setState({
            error: `по запросу ${currentSearchQuery} ничего не найдено`,
            status: 'rejected',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  changePageNumber = page => {
    this.setState({ page: this.state.page + 1 });
  };

  handleImgClick = event => {
    if (event.target.tagName === 'IMG') {
      this.props.onClick(event.target.dataset.url, event.target.alt);
    }
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
          <ul className={s.ImageGallery} onClick={this.handleImgClick}>
            {images.map((image, index) => (
              <ImageGalleryItem
                key={`${image.id}${index}`}
                smallPicture={image.webformatURL}
                largePicture={image.largeImageURL}
                alt={image.tags}
              />
            ))}
          </ul>
          <Button onClick={this.changePageNumber} />
        </div>
      );
    }
  }
}
