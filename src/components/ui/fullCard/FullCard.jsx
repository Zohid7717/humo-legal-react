import React, { useEffect, useState } from 'react';
import UContainer from '../container/UContainer';
import axios from '../../../services/network/axios';
import { useParams } from 'react-router-dom';

const FullCard = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.post(`/posts/${id}`)
      .then(res => {
        setData(res.data.post)
      })
  }, []);
  return (
    <div className='fullCard'>
      <UContainer>
        <div className="fullCard__wrap">
          <div className="fullCard__image">
            <img src={`http://localhost:3000${data.imageUrl}`} alt="card image" />
          </div>
          <div className="fullCard__text">
            <p>{data.title ? data.title : 'und'}</p>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default FullCard;
