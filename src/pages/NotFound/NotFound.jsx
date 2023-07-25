import React from 'react';
import './NotFound.scss'
import { Link } from 'react-router-dom';
import UContainer from '../../components/ui/container/UContainer';

const NotFound = () => {
  return (
    <>
      <UContainer>
        <div className='notFound'>
          <h2 className="notFound__title">Страница не найдена!</h2>
          <p className="notFound__numb">404</p>
          <p className="notFound__text">Запрошенный URL отсутствует на сервере!</p>
          <Link to='/' className='notFound__btn'>На главную</Link>
        </div>
      </UContainer>
    </>
  );
}

export default NotFound;
