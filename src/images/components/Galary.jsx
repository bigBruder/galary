import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/galary.scss';

const Galary = ({ imagesList }) => (
  <>
    <header className="header">
      <h2 className="header-title">Galary (officially API resource: https://picsum.photos)</h2>
    </header>
    <ul className="galary">
      {imagesList.map(image => (
        <Link key={image.id} className="galary__link" to={`/photo?id=${image.id}`}>
          <li className="galary__li">
            <img className="galary__li-image" src={image.download_url} alt="image" />
            <h3 className="galary__li-author">{image.author}</h3>
          </li>
        </Link>
      ))}
    </ul>
  </>
);

export default Galary;
