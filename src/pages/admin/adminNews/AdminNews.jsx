import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import axios from '../../../services/network/axios';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../../components/ui/container/UContainer'
import { fetchPosts, fetchPostsAll } from '../../../services/redux/posts/slice';
import Card from '../../../components/ui/card/Card';
import AdminSidebar from '../adminSidebar/AdminSidebar';
import NewsForm from './newForm/NewsForm';

import './AdminNews.scss'

const AdminNews = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const category = useSelector(state => state.postsReducer.category);
  const posts = useSelector(state => state.postsReducer.posts);
  const status = useSelector(state => state.postsReducer.status);
  
  const [activeNewsForm, setActiveNewsForm] = useState(false);
  const [itemStatus, setItemStatus] = useState(false)
  
  const catObj = {
    category: category
  };


  if (!isAuth) {
    return <Navigate to='/' />
  }

  const deletePost = (itemId) => {
    axios.delete(`/posts/${itemId}`)
  }

  useEffect(() => {
    if (category==='all') {
      dispatch(fetchPostsAll())
    } else {
      dispatch(fetchPosts(catObj))
    }
    setItemStatus(false)
  }, [category, itemStatus])

  return (
    <div className='adminNews'>
      <UContainer>
        <div className="adminNews__wrap">
          <div className="adminNews__left">
            <AdminSidebar setActiveNewsForm={setActiveNewsForm} />
          </div>
          <div className="adminNews__right">
            <div className="adminNews__right-wrap">
              {status === 'loading'
                ? 'loading'
                : posts.map(items => <Card key={items._id} id={items._id} title={items.title} image={items.imageUrl} source={items.source} setItemStatus={setItemStatus} deleteItem={deletePost} />)
              }
            </div>
          </div>
          {
            activeNewsForm
              ? <NewsForm setActiveNewsForm={setActiveNewsForm} />
              : ''
          }
        </div>
      </UContainer>
    </div>
  );
}

export default AdminNews;
