import React, {useEffect} from 'react';

import Staff from './Staff/Staff';
import UContainer from '../../components/ui/container/UContainer';
import ReviewsAbout from './Reviews/ReviewsAbout';
import HeroText from '../../components/ui/HeroText/HeroText';
import { setActivePage } from '../../services/redux/activePage/slice';
import { useDispatch } from 'react-redux';

import styles from './About.module.scss'

const About = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivePage('/about'))
  },[])
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
