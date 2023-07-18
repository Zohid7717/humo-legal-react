import React, { useEffect } from 'react';

import Hero from './hero/hero';
import Why from './why/Why';
import Reviews from './reviews/Reviews';
import Faq from './faq/Faq';
import Form from './form/Form';

const Home = () => {

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
