import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbWorldWww } from 'react-icons/tb';
import UContainer from '../container/UContainer';
import axios from '../../../services/network/axios';
import './FullCard.scss'

const FullCard = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.post(`/posts/${id}`)
      .then(res => {
        setData(res.data.post)
      })
  }, []);
  const dataText = data.text
  return (
    <div className='fullCard'>
      <UContainer>
        <div className="fullCard__wrap">
          <p className='fullCard__title'>{data.title ? data.title : 'und'}</p>
          <div className="fullCard__image">
            <img src={`http://localhost:3000${data.imageUrl}`} alt="card image" />
          </div>
          <p className="fullCard__source"><TbWorldWww />{data.source}</p>
          <div className='render-news' dangerouslySetInnerHTML={{ __html: dataText }}></div>
        </div>
      </UContainer>
    </div>
  );
}

export default FullCard;
