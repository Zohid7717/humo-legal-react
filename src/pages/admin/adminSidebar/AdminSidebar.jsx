import React from 'react';
import { Link } from 'react-router-dom';

import './AdminSidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../services/redux/posts/slice';
import { selectIsAuth } from '../../../services/redux/slices/auth';

const AdminSidebar = ({ setActiveNewsForm }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const category = useSelector(state => state.postsReducer.category);

  const handleChangeCategory = (value) => {
    dispatch(setCategory(value))
  }

  const categories = [
    { name: 'all', value: "Все" },
    { name: 'news', value: "Новости" },
    { name: 'low', value: "Меморандумы" },
    { name: 'events', value: "События" },
  ]

  return (
    <div className='adminSidebar'>
      <div className="adminSidebar__menu">
        {
          categories.map((items, i) => (
            <button key={i} className={
              category === items.name
                ? 'adminSidebar__categoryBTN active'
                : 'adminSidebar__categoryBTN'
            } onClick={() => handleChangeCategory(items.name)}>
              {items.value}
            </button>
          ))
        }
        <button onClick={() => setActiveNewsForm(true)} className='adminSidebar__categoryBTN' >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
