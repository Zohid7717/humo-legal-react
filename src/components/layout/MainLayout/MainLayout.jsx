import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAuthMe, selectIsAuth } from '../../../services/redux/slices/auth'

const MainLayout = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);
  return (
    <div className='wrapper'>
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
