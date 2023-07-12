import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import axios from '../../../services/network/axios';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../../components/ui/container/UContainer'
import { fetchPosts, fetchPostsAll } from '../../../services/redux/posts/slice';
import Card from '../../../components/ui/card/Card';
import AdminSidebar from '../adminSidebar/AdminSidebar';
import FormToAdd from './formToAdd/FormToAdd';

import './AdminNews.scss'

const AdminNews = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const [title, setTitle] = useState('');
  const [paramTree, setParamTree] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const stateCategory = useSelector(state => state.postsReducer.category);
  const posts = useSelector(state => state.postsReducer.posts);
  const status = useSelector(state => state.postsReducer.status);

  const [activeFormToAdd, setActiveFormToAdd] = useState(false);
  const [itemStatus, setItemStatus] = useState(false);
  const cardLink = true;

  const catObj = {
    category: stateCategory
  };

  if (!isAuth) {
    return <Navigate to='/' />
  }

  const deletePost = (itemId) => {
    axios.delete(`/posts/${itemId}`)
  }

  const onSubmit = async () => {
    event.preventDefault();
    try {
      const fields = {
        title,
        text,
        paramTree,
        category,
        imageUrl,
      }
      await axios.post('/posts', fields)
      setActiveFormToAdd(false)
      setItemStatus(true)
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании статьи!')
    }
  }

  useEffect(() => {
    if (stateCategory === 'all') {
      dispatch(fetchPostsAll())
    } else {
      dispatch(fetchPosts(catObj))
    }
    setItemStatus(false)
  }, [stateCategory, itemStatus])

  return (
    <div className='adminNews'>
      <UContainer>
        <div className="adminNews__wrap">
          <div className="adminNews__left">
            <AdminSidebar setActiveFormToAdd={setActiveFormToAdd} />
          </div>
          <div className="adminNews__right">
            <div className="card-wrap">
              {status === 'loading'
                ? 'loading'
                : posts.map(items =>
                  <Card
                    key={items._id}
                    id={items._id}
                    title={items.title}
                    image={items.imageUrl}
                    paramTree={items.paramTree}
                    setItemStatus={setItemStatus}
                    deleteItem={deletePost}
                    cardLink={cardLink}
                  />)
              }
            </div>
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
                category={category}
                setImageUrl={setImageUrl}
                setCategory={setCategory}
                onSubmit={onSubmit}
              />
          : ''
          }
        </div>
      </UContainer>
    </div>
  );
}

export default AdminNews;
