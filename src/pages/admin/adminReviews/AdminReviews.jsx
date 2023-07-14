import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../../components/ui/container/UContainer';
import Card from '../../../components/ui/card/Card';
import axios from '../../../services/network/axios'
import { fetchReviewsAll } from '../../../services/redux/reviews/slice';
import FormToAdd from '../../../components/ui/formToAdd/FormToAdd';
import { setSelectedForm } from '../../../services/redux/formType/slice';
import './AdminReviews.scss'

const AdminReviews = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviewsReducer.reviews);

  const [title, setTitle] = useState('');
  const [paramTree, setParamTree] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const cardLink = false;
  const [itemStatus, setItemStatus] = useState(false);
  const [activeFormToAdd, setActiveFormToAdd] = useState(false);

  if (!isAuth) {
    return <Navigate to='/' />
  }

  const deletePost = (itemId) => {
    axios.delete(`/removeReview/${itemId}`)
  }

  const onSubmit = async () => {
    event.preventDefault();
    try {
      const fields = {
        title,
        text,
        paramTree,
        imageUrl,
      }
      await axios.post('/createReview', fields)
      setActiveFormToAdd(false)
      setItemStatus(true)
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании статьи!')
    }
  }

  useEffect(() => {
    dispatch(fetchReviewsAll())
    setItemStatus(false)
    dispatch(setSelectedForm(1))
  }, [itemStatus]);

  const deleteItem = (itemId) => {
    axios.delete(`/removeReview/${itemId}`)
  }
  return (
    <div className='adminReviews'>
      <UContainer>
        <div className="adminReviews__wrap">
          <div className="card-wrap">
            {
              reviews.map(items => <Card
                key={items._id}
                id={items._id}
                title={items.title}
                image={items.imageUrl}
                paramTree={items.paramTree}
                setItemStatus={setItemStatus}
                deleteItem={deleteItem}
                cardLink={cardLink}
              />)
            }
          </div>
          {
            activeFormToAdd
              ? <FormToAdd
                setActiveFormToAdd={setActiveFormToAdd}
                title={title}
                setTitle={setTitle}
                paramTree={paramTree}
                setParamTree={setParamTree}
                text={text}
                setText={setText}
                setImageUrl={setImageUrl}
                onSubmit={onSubmit}
              />
              : ''
          }
          <button onClick={() => setActiveFormToAdd(true)} className='add-BTN' >
            Добавить
          </button>
        </div>
      </UContainer>
    </div>
  );
}

export default AdminReviews;
