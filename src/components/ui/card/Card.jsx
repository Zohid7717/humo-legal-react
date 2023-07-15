import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/network/axios';
import { RiDeleteBin2Line } from 'react-icons/ri'
import imgSketch from '../../../assets/icon/loggo.avif'

import './Card.scss'
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../services/redux/slices/auth';

const Card = ({ id, title, image, paramTree, setItemStatus, deleteItem, cardLink }) => {
  const isAuth = useSelector(selectIsAuth)
  const deleteContent = (id) => {
    alert('Вы действительно хотите удалить статью?')
    if (image) {
      const fileName = image.substring(9, image.length)
      axios.delete(`/delete/${fileName}`)
    }
    deleteItem(id)
    setItemStatus(true)
  }
  return (
    <div className='card'>
      <div className="card__image">
        <img className='card__img' src={image ? `http://localhost:3000${image}` : imgSketch } alt="image" />
      </div>
      <p className="card__source">{paramTree}</p>
      {
        cardLink
          ? <Link className='card__link' to={`/adminnews/${id}`}>{title}</Link>
          : <p className='card__link' >{title}</p>
      }
      {
        isAuth
          ? <RiDeleteBin2Line className='card__delete' onClick={() => deleteContent(id)} /> : ''
      }
    </div>
  );
}

export default Card;
