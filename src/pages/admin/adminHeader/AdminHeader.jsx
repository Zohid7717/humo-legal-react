import React from 'react';
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
    navigate('/')
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
          <Link onClick={onClickLogout} className='adminHeader__exit'><RxExit/></Link>
        </div>
      </UContainer>
    </div>
  );
}

export default AdminHeader;
