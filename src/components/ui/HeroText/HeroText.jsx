import React from 'react';
import './HeroText.scss'

const HeroText = ({text}) => {
  return (
    <div className='hero-text'>
      <p className="hero-text__content">{text}</p>
    </div>
  );
}

export default HeroText;
