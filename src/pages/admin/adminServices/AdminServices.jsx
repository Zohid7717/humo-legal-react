import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../../services/network/axios'
import UContainer from '../../../components/ui/container/UContainer'
import styles from './AdminServices.module.scss';
import { fetchServicesAll } from '../../../services/redux/services/slice';
import FormToAdd from '../../../components/ui/formToAdd/FormToAdd';
import { setSelectedForm } from '../../../services/redux/formType/slice';
import Card from '../../../components/ui/card/Card';

const AdminServices = () => {
  const dispatch = useDispatch()
  const services = useSelector(state => state.servicesReducer.services)

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [itemStatus, setItemStatus] = useState(false);
  const [activeFormToAdd, setActiveFormToAdd] = useState(false);

  const onSubmit = async () => {
    event.preventDefault();
    try {
      const fields = {
        title,
        text,
        imageUrl,
      }
      await axios.post('/createService', fields)
      setActiveFormToAdd(false)
      setItemStatus(true)
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании статьи!')
    }
  }

  useEffect(() => {
    dispatch(fetchServicesAll())
    dispatch(setSelectedForm(3))
  }, [itemStatus]);

  const deleteItem = (itemId) => {
    axios.delete(`/removeService/${itemId}`)
  }

  return (
    <div className={styles.adminServices}>
      <UContainer>
        <div className={styles.adminServices__wrap}>
          <div className='card-wrap'>
            {
              services.map(items => <Card
                key={items._id}
                id={items._id}
                title={items.title}
                image={items.imageUrl}
                paramTree={items.paramTree}
                setItemStatus={setItemStatus}
                deleteItem={deleteItem}
              />)
            }
          </div>
          {
            activeFormToAdd
              ? <FormToAdd
                setActiveFormToAdd={setActiveFormToAdd}
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                setImageUrl={setImageUrl}
                onSubmit={onSubmit}
              />
              : ''
          }
          <button onClick={() => setActiveFormToAdd(true)} className='add-BTN' >
            Добавить
          </button>
        </div>
      </UContainer>
    </div>
  );
}

export default AdminServices;
