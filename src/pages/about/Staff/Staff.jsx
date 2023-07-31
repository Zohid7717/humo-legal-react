import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'

import UContainer from '../../../components/ui/container/UContainer';
import { fetchStaffAll } from '../../../services/redux/staff/slice';
import SectionTitle from '../../../components/ui/SectionTitle/SectionTitle';

import styles from './Staff.module.scss'

const Staff = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const staffStatus = useSelector(state => state.staffReducer.status)
  useEffect(() => {
    dispatch(fetchStaffAll())
  }, [])
  const staff = useSelector(state => state.staffReducer.staff)
  if (staffStatus === 'loading') {
    return 'loading'
  }
  return (
    <div className={styles.staff}>
      <UContainer>
        <SectionTitle title={t('about.team')} />
        <div className={styles.staff__items}>
          {
            staff.map((item, i) => (
              <div key={i} className={styles.staff__item}>
                <div className={styles.staff__img}>
                  <img src={`http://localhost:3000${item.imageUrl}`} alt="" />
                </div>
                <div className={styles.staff__content}>
                  <h4 className={styles.staff__title}>{item.title}</h4>
                  <div className={styles.staff__text} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </div>
              </div>
            ))
          }
        </div>
      </UContainer>
    </div>
  );
}

export default Staff;
