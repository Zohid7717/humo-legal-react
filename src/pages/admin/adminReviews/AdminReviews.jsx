import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../../components/ui/container/UContainer';
import Card from '../../../components/ui/card/Card';
import axios from '../../../services/network/axios'
import { fetchReviewsAll } from '../../../services/redux/reviews/slice';

const AdminReviews = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviewsReducer.reviews);


  console.log(reviews)

  useEffect(() => {
    dispatch(fetchReviewsAll())
  }, []);

  if (!isAuth) {
    return <Navigate to='/' />
  }
  return (
    <div className='adminReviews'>
      <UContainer>
        <div className="adminReviews_wrap">
          {
            reviews.map(items => <Card key={items._id} id={items._id} title={items.title} image={items.imageUrl} source={items.text} />)
          }
        </div>
      </UContainer>
    </div>
  );
}

export default AdminReviews;
