import React from 'react';

import UserHeader from './userHeader/UserHeader';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import AdminHeader from '../../../pages/admin/adminHeader/AdminHeader';

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
