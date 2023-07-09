import React from 'react';
import { Link } from 'react-router-dom';

import './AdminSidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../services/redux/posts/slice';

const AdminSidebar = ({ setActiveNewsForm }) => {
  const dispatch = useDispatch();
  const handleChangeCategory = (value) => {
    dispatch(setCategory(value))
  }
  return (
    <div className='adminSidebar'>
      <ul className="adminSidebar__menu">
        <li className="adminSidebar__link">
          <button className='adminSidebar__categoryBTN' onClick={() => handleChangeCategory('')}>
            Все
          </button>
        </li>
        <li className="adminSidebar__link">
          <button className='adminSidebar__categoryBTN' onClick={() => handleChangeCategory('news')}>
            Новости
          </button>
        </li>
        <li className="adminSidebar__link">
          <button className='adminSidebar__categoryBTN' onClick={() => handleChangeCategory('low')}>
            Меморандум
          </button>
        </li>
        <li className="adminSidebar__link">
          <button className='adminSidebar__categoryBTN' onClick={() => handleChangeCategory('events')}>
            События
          </button>
        </li>
        <li className="adminSidebar__link">
          <button onClick={() => setActiveNewsForm(true)} className='adminSidebar__categoryBTN' >
            Добавить
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
