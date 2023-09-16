import React from 'react';

import './ContactMap.scss'

const ContactMap = () => {
  return (
    <div className='contactMap'>
      <iframe className='contactMap__content' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d630.5701042834414!2d69.15267798012113!3d41.25414850510765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1694843024164!5m2!1sru!2s"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
};

export default ContactMap;