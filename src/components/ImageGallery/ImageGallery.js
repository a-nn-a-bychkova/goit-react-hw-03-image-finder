import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';

export default class ImageGallery extends Component {
  state = { images: null, loading: false, error: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      // console.log('предыдущие пропы', prevProps.searchQuery);
      // console.log('текущие пропы', this.props.searchQuery);
      this.setState({ loading: true, images: null });

      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`по запросу ${this.props.searchQuery} ничего не найдено`),
          );
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ul className={s.ImageGallery}>
            {this.state.images.hits.map(image => (
              <ImageGalleryItem
                id={image.id}
                smallPicture={image.webformatURL}
                largePicture={image.largeImageURL}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

//code with statuses
// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };
// ​
// export default class ImageGallery extends Component {
//   state = { images: null, error: null, status: Status.IDLE };
// ​
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchQuery !== this.props.searchQuery) {
//       // console.log('предыдущие пропы', prevProps.searchQuery);
//       // console.log('текущие пропы', this.props.searchQuery);
//       this.setState({ status: Status.PENDING });
// ​
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12`,
//       )
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(
//             new Error(`по запросу ${this.props.searchQuery} ничего не найдено`),
//           );
//         })
//         .then(images => this.setState({ images, status: Status.RESOLVED }))
//         .catch(error => this.setState({ error, status: Status.REJECTED }));
//     }
//   }
// ​
//   render() {
//     const { error, images, status } = this.state;
// ​
//     if (status === 'pending') {
//       return <Loader />;
//     }
//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>;
//     }
// ​
//     if (status === 'resolved') {
//       return (
//         <ul className={s.ImageGallery}>
//           {images.hits.map(image => (
//             <ImageGalleryItem
//               id={image.id}
//               smallPicture={image.webformatURL}
//               largePicture={image.largeImageURL}
//             />
//           ))}
//         </ul>
//       );
//     }

//   }
// }
