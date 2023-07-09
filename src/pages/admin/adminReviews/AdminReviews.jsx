import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../../components/ui/container/UContainer';

const AdminReviews = () => {
  const isAuth = useSelector(selectIsAuth);
   if (!isAuth) {
    return <Navigate to='/' />
  }
  return (
    <div className='adminReviews'>
      <UContainer>
        reviews
      </UContainer>
    </div>
  );
}

export default AdminReviews;
