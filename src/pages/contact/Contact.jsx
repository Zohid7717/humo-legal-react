import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import UContainer from '../../components/ui/container/UContainer';
import HeroText from '../../components/ui/HeroText/HeroText';
import ContactForm from './contactForm/ContactForm'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import ContactMap from './contactMap/ContactMap';
import { setActivePage } from '../../services/redux/activePage/slice';

import './Contact.scss'

const Contact = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivePage('/contact'))
  }, [])
  return (
    <div className='contact'>
      <div className="contact__hero">
        <UContainer>
          <HeroText text={'Наши контакты'} />
        </UContainer>
      </div>
      <UContainer>
        <SectionTitle title={'Связь с нами'} />
        <div className="contact__body">
          <div className="contact__form">
            <ContactForm />
          </div>
          <div className="contact__map">
            <ContactMap />
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Contact;
