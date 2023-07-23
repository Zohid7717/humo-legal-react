import React from 'react';

import Staff from './Staff/Staff';
import UContainer from '../../components/ui/container/UContainer';
import ReviewsAbout from './Reviews/ReviewsAbout';
import HeroText from '../../components/ui/HeroText/HeroText';
import styles from './About.module.scss'

const About = () => {
  const text = 'Доверьте свои юридические вопросы профессионалам!'
  return (
    <div className={styles.about}>
      <div className={styles.adout__hero}>
        <UContainer>
          <HeroText text={text} />
        </UContainer>
      </div>
      <Staff />
      <ReviewsAbout />
    </div>
  );
}

export default About;
