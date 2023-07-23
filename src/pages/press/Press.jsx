import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UContainer from '../../components/ui/container/UContainer'
import PressContent from './PressContent/PressContent';
import { fetchPostsAll } from '../../services/redux/posts/slice';
import HeroText from '../../components/ui/HeroText/HeroText'

import './Press.scss'

const Press = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.postsReducer.posts)
  const status = useSelector(state => state.postsReducer.status)
  const [News, setNews] = useState([]);
  const [Memoranda, setMemoranda] = useState([]);
  const [Events, setEvents] = useState([]);
  let news = []
  useEffect(() => {
    dispatch(fetchPostsAll());
  }, []);
  useEffect(() => {
    if (status === 'loading') {
    } else {
      setNews(posts.filter(item => item.category === 'news'))
      setMemoranda(posts.filter(item => item.category === 'low'))
      setEvents(posts.filter(item => item.category === 'events'))
    }
  }, [status]);
  return (
    <div className='press'>
      <div className="press__hero">
        <UContainer>
          <HeroText text='Добро пожаловать на наш пресс-центр' />
        </UContainer>
      </div>
      <div className="press__news-wrap">
        <UContainer>
          <div className="press__news">
            <PressContent title='Новости' data={News} />
          </div>
          <div className="press__news">
            <PressContent title='Меморандум' data={Memoranda} />
          </div>
          <div className="press__news">
            <PressContent title='События' data={Events} />
          </div>
        </UContainer>
      </div>
    </div>
  );
}

export default Press;
