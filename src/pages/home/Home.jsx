import React, { useEffect } from 'react';

import Hero from './hero/hero';
import Why from './why/Why';
import Reviews from './reviews/Reviews';
import Faq from './faq/Faq';
import Form from './form/Form';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../services/redux/activePage/slice';

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivePage('/'))
  },[])
  return (
    <div>
      <Hero />
      <Why />
      <Reviews />
      <Faq />
      <Form />
    </div>
  );
}

export default Home;
