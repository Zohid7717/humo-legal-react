import React from 'react';
import Card from '../../../components/ui/card/Card';

import './PressContent.scss'
import SectionTitle from '../../../components/ui/SectionTitle/SectionTitle';

const PressContent = ({title, data }) => {
  const cardLink = true
  return (
    <div className='pressContent'>
      <SectionTitle title={title} />
      <div className='pressContent__data-wrap'>
        {
          data.map((item, i) => (
            <Card
              key={item._id}
              id={item._id}
              title={item.title}
              image={item.imageUrl}
              paramTree={item.paramTree}
              cardLink={cardLink}
            />
          ))
        }
      </div>
    </div>
  );
}

export default PressContent;
