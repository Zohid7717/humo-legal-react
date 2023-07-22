import React from 'react';

import Staff from './Staff/Staff';
import UContainer from '../../components/ui/container/UContainer';
import styles from './About.module.scss'
import ReviewsAbout from './Reviews/ReviewsAbout';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.adout__hero}>
        <UContainer>
          <p className={styles.adout__hero_text}>
            Доверьте свои юридические вопросы профессионалам!
          </p>
        </UContainer>
      </div>
      <Staff />
      <ReviewsAbout/>
    </div>
  );
}

export default About;
