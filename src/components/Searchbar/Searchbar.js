import React, { Component } from 'react';
import SearchForm from '../Searchform';
import s from './Searchbar.module.css';

const Searchbar = ({ children }) => {
  return <header className={s.Searchbar}>{children}</header>;
};

export default Searchbar;
