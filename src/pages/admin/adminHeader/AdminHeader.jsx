import React, { useEffect, useState } from 'react';
import { RxExit } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UContainer from '../../../components/ui/container/UContainer'
import { logout, selectIsAuth } from '../../../services/redux/slices/auth';

import './AdminHeader.scss'

const AdminHeader = () => {
  const navigate = useNavigate();
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
            <li >
              <Link className="adminHeader__link" to='/adminreviews' >Отзывы</Link>
            </li>
            <li >
              <Link className="adminHeader__link" to='/adminservices'>Услуги</Link>
            </li>
            <li >
              <Link className="adminHeader__link" to='/adminstaff'>Персонал</Link>
            </li>
            <li>
              <Link className="adminHeader__link" to='/adminnews'>Пресс</Link>
            </li>
            <li >
              <Link className="adminHeader__link" to='/adminrequest'>Заявки</Link>
            </li>
            <li >
              <Link className="adminHeader__link">Клиентская база</Link>
            </li>
            <li >
              <Link className="adminHeader__link" to='/adminquestion'>Вопросы</Link>
            </li>
          </ul>
          <Link onClick={onClickLogout} className='adminHeader__exit'><RxExit/></Link>
        </div>
      </UContainer>
    </div>
  );
}

export default AdminHeader;
