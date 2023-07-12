import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/network/axios';
import { RiDeleteBin2Line } from 'react-icons/ri'

import './Card.scss'

const Card = ({ id, title, image, source, setItemStatus, deleteItem }) => {
  const deleteContent = (id) => {
    alert('Вы действительно хотите удалить статью?')
    const fileName = image.substring(9, image.length)
    axios.delete(`/delete/${fileName}`)
    deleteItem(id)
    setItemStatus(true)
  }
  return (
    <div className='card'>
      <div className="card__image">
        <img className='card__img' src={`http://localhost:3000${image}`} alt="image" />
      </div>
      <p className="card__source">{source}</p>
      <Link className='card__link' to={`/adminnews/${id}`}>
        {title}
      </Link>
      <RiDeleteBin2Line className='card__delete' onClick={() => deleteContent(id)} />
    </div>
  );
}

export default Card;
