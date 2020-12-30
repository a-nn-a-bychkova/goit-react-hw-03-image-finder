import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';

// export default class ImageGallery extends Component {
//   state = { images: null, loading: false, error: null };

//   componentDidUpdate(prevProps, prevState) {
//     const { searchQuery } = this.props;

//     if (prevProps.searchQuery !== searchQuery) {
//       // console.log('предыдущие пропы', prevProps.searchQuery);
//       // console.log('текущие пропы', searchQuery);
//       this.setState({ loading: true, images: null });

//       fetch(
//         `https://pixabay.com/api/?q=${searchQuery}&page=1&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12`,
//       )
//         .then(response => response.json())
//         .then(images => {
//           if (images.length > 0) {
//             return this.setState({ images });
//           }

//           return Promise.reject(
//             new Error(`по запросу ${searchQuery} ничего не найдено`),
//           );
//         })

//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   render() {
//     const { error, images, loading } = this.state;
//     return (
//       <div>
//         {error && <h1>{error.message}</h1>}
//         {loading && <Loader />}
//         {images && (
//           <ul className={s.ImageGallery}>
//             {images.hits.map((image, index) => (
//               <ImageGalleryItem
//                 key={`${image.id}${index}`}
//                 smallPicture={image.webformatURL}
//                 largePicture={image.largeImageURL}
//               />
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

//code with statuses

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export default class ImageGallery extends Component {
  state = { images: null, error: null, status: 'idle' };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(images => {
          if (images.length > 0) {
            this.setState({ images });
          } else {
            this.setState({
              error: `по запросу ${this.props.searchQuery} ничего не найдено`,
            });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { error, images, status } = this.state;
    if (status === 'idle') {
      return <></>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          {images.hits.map((image, index) => (
            <ImageGalleryItem
              key={`${image.id}${index}`}
              smallPicture={image.webformatURL}
              largePicture={image.largeImageURL}
            />
          ))}
        </ul>
      );
    }
  }
}
