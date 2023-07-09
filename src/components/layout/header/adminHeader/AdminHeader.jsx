import React from 'react';

import UContainer from '../../../ui/container/UContainer'
import './AdminHeader.scss'
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../../../services/redux/slices/auth';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйте?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className='adminHeader'>
      <UContainer>
        <div className="adminHeader__wrap">
          <ul className="adminHeader__menu">
            <li className="adminHeader__link">
              <Link to='/adminreviews' >Отзывы</Link>
            </li>
            <li className="adminHeader__link">
              <Link>Услуги</Link>
            </li>
            <li className="adminHeader__link">
              <Link >Персонал</Link>
            </li>
            <li className="adminHeader__link adminHeader__parent">
              <Link to='/adminnews'>Пресс</Link>
              
            </li>
            <li className="adminHeader__link">
              <Link>Заявки</Link>
            </li>
            <li className="adminHeader__link">
              <Link>Клиентская база</Link>
            </li>
            <li className="adminHeader__link">
              <Link>Вопросы</Link>
            </li>
          </ul>
          <Link onClick={onClickLogout} className='adminHeader__exit'>Выход</Link>
        </div>
      </UContainer>
    </div>
  );
}

export default AdminHeader;
