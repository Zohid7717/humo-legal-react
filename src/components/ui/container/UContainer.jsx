import React from 'react';
import './UContainer.scss'

const UContainer = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export default UContainer;
