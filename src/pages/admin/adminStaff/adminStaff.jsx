import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import axios from '../../../services/network/axios'
import UContainer from '../../../components/ui/container/UContainer'
import styles from './AdminStaff.module.scss';
import { fetchStaffAll } from '../../../services/redux/staff/slice';
import FormToAdd from '../../../components/ui/formToAdd/FormToAdd';
import { setSelectedForm } from '../../../services/redux/formType/slice';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import Card from '../../../components/ui/card/Card';

const AdminStaff = () => {
  const dispatch = useDispatch()
  const staff = useSelector(state => state.staffReducer.staff)
  const isAuth = useSelector(selectIsAuth);

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
      await axios.post('/createStaff', fields)
      setActiveFormToAdd(false)
      setItemStatus(true)
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании информации!')
    }
  }

  useEffect(() => {
    dispatch(fetchStaffAll())
    dispatch(setSelectedForm(2))
  }, [itemStatus, isAuth]);

  const deleteItem = (itemId) => {
    axios.delete(`/removeStaff/${itemId}`)
  }

  if (!isAuth) {
    return <Navigate to='/' />
  }

  return (
    <div className={styles.adminStaff}>
      <UContainer>
        <div className={styles.adminStaff__wrap}>
          <div className='card-wrap'>
            {
              staff.map(items => <Card
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

export default AdminStaff;
