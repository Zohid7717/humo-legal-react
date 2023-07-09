import React from 'react';

import './NewsForm.scss'
import UContainer from '../../../../components/ui/container/UContainer';

const NewsForm = ({ setActiveNewsForm }) => {
  return (
    <div className='newsForm'>
      <UContainer>
        <div className="newsForm__wrap">
          
        </div>
        <button onClick={() => setActiveNewsForm(false)}>
          exit
        </button>
      </UContainer>
    </div>
  );
}

export default NewsForm;
