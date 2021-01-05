import React, { Component } from 'react';
import api from '../services/images-api';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallPicture, largePicture, alt }) => {
  return (
    <li className={s.item}>
      <img
        src={smallPicture}
        alt={alt}
        className={s.image}
        data-url={largePicture}
      />
    </li>
  );
};

export default ImageGalleryItem;
