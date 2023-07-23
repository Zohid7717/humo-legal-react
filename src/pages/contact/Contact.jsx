import React from 'react';
import UContainer from '../../components/ui/container/UContainer';
import HeroText from '../../components/ui/HeroText/HeroText';
import ContactForm from './contactForm/ContactForm'

import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__hero">
        <UContainer>
          <HeroText text={'Наши контакты'}/>
        </UContainer>
      </div>
      <div className="contact__body">
        <div className="contact__form">
          <ContactForm/>
        </div>
        <div className="contact__map"></div>
      </div>
    </div>
  );
}

export default Contact;
