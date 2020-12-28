import React, { Component } from 'react';
import api from '../services/images-api';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, smallPicture, largePicture }) => {
  return (
    <li key={id} className={s.item}>
      <img src={smallPicture} className={s.image} />
    </li>
  );
};

export default ImageGalleryItem;
