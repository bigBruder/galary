import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/rest.scss';

const Photo = ({ imagesList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  return <img className="photo" src={imagesList[id].download_url} alt="image" />;
};

export default Photo;
