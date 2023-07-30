import React from 'react';
import './HeroText.scss'

const HeroText = ({text}) => {
  return (
    <div className='hero-text'>
      <h1 className="hero-text__content">{text}</h1>
    </div>
  );
}

export default HeroText;
