import React from 'react';

import UserHeader from './userHeader/UserHeader';
import { useSelector } from 'react-redux';
import AdminHeader from './adminHeader/AdminHeader';
import { selectIsAuth } from '../../../services/redux/slices/auth';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return (
      <UserHeader />
      )
    } else {
      return (
      <AdminHeader />
    )
  }
}

export default Header;
