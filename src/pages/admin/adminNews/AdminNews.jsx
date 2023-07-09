import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../../components/ui/container/UContainer'
import { fetchPosts, fetchPostsAll } from '../../../services/redux/posts/slice';

import Card from '../../../components/ui/card/Card';
import AdminSidebar from '../../../components/ui/adminSidebar/AdminSidebar';

import './AdminNews.scss'
import { setPosts } from '../../../services/redux/posts/slice';
import NewsForm from './newForm/NewsForm';

const AdminNews = () => {
  const isAuth = useSelector(selectIsAuth);
  const category = useSelector(state => state.postsReducer.category);
  const posts = useSelector(state => state.postsReducer.posts);
  const status = useSelector(state => state.postsReducer.status);
  const [activeNewsForm, setActiveNewsForm] = useState(false);
  const catObj = {
    category: category
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!category) {
      dispatch(fetchPostsAll())
    } else {
      dispatch(fetchPosts(catObj))
    }
  }, [category])

  if (!isAuth) {
    return <Navigate to='/' />
  }
  return (
    <div className='adminNews'>
      <UContainer>
        <div className="adminNews__wrap">
          <div className="adminNews__left">
            <AdminSidebar setActiveNewsForm={setActiveNewsForm } />
          </div>
          <div className="adminNews__right">
            {status === 'loading'
              ? 'loading'
              : posts.map(items => <Card id={items._id} title={items.title} image={items.image} text={items.text} />)
            }
          </div>
          {
            activeNewsForm
              ? <NewsForm setActiveNewsForm={setActiveNewsForm } />
              : ''
          }
        </div>
      </UContainer>
    </div>
  );
}

export default AdminNews;
