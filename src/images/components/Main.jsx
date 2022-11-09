import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Galary from './Galary';
import Photo from './Photo';
import NoMatch from './NoMatch';
import { imagesListSelector } from '../images.selectors';
import { getImagesList } from '../images.actions';
import '../../styles/rest.scss';

const Main = ({ getImagesList, imagesList }) => {
  useEffect(() => {
    getImagesList();
  }, []);

  if (!imagesList.images.length) {
    return null;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Galary imagesList={imagesList.images} />} />
        <Route path="/photo" element={<Photo imagesList={imagesList.images} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

Main.propTypes = {
  imagesList: PropTypes.object.isRequired,
  getImagesList: PropTypes.func.isRequired,
};

const mapState = state => ({
  imagesList: imagesListSelector(state),
});

const mapDispatch = {
  getImagesList: getImagesList,
};

export default connect(mapState, mapDispatch)(Main);
