import React from 'react';
import { Link } from 'react-router-dom';

import './Card.scss'

const Card = ({ id, title, image, text }) => {
  return (
    <div className='card'>
      <div className="card__image">
        <img className='card__img' src={image} alt="image" />
      </div>
      <Link className='card__link' to={`/adminnews/${id}`}>
        {title}
      </Link>
      <button className='card__delete'>Удалить</button>
    </div>
  );
}

export default Card;
