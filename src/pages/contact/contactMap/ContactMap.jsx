import React from 'react';

import './ContactMap.scss'

const ContactMap = () => {
  return (
    <div className='contactMap'>
      <iframe className='contactMap__content' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.526812122002!2d69.31562837469343!3d41.31915650022677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5cfc7e9e56b%3A0xea0c8e1a5ce4bd17!2z0LDQtNCy0L7QutCw0YLRgdC60LDRjyDRhNC40YDQvNCwIEhVTU8gTEVHQUw!5e0!3m2!1sru!2s!4v1690205261192!5m2!1sru!2s" ></iframe>
    </div>
  )
};

export default ContactMap;