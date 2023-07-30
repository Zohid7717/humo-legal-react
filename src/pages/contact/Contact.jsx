import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import UContainer from '../../components/ui/container/UContainer';
import HeroText from '../../components/ui/HeroText/HeroText';
import ContactForm from './contactForm/ContactForm'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import ContactMap from './contactMap/ContactMap';
import { setActivePage } from '../../services/redux/activePage/slice';

import './Contact.scss'
import Modal from '../../components/ui/modal/modal';

const Contact = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActivePage('/contact'))
  }, [])
  return (
    <div className='contact'>
      <div className="contact__hero">
        <UContainer>
          <HeroText text={'Мы ценим каждого клиента и готовы предоставить индивидуальный подход к каждому делу!'} />
        </UContainer>
      </div>
      <UContainer>
        <SectionTitle title={'Наши контакты!'} />
        <div className="contact__body">
          <div className="contact__form">
            <ContactForm setModal={setModal} />
          </div>
          <div className="contact__map">
            <ContactMap />
          </div>
          <div className={modal ? "contact__modal active" : "contact__modal"}>
            <Modal />
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Contact;
