import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiClose } from 'react-icons/tfi'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import UContainer from '../../components/ui/container/UContainer';
import { fetchServicesAll } from '../../services/redux/services/slice';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { setActivePage } from '../../services/redux/activePage/slice';

import styles from './Service.module.scss'
import HeroText from '../../components/ui/HeroText/HeroText';

const Service = () => {
  const { t, i18n } = useTranslation()
  const services = useSelector(state => state.servicesReducer.services)
  const [view, setView] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchServicesAll())
    dispatch(setActivePage('/service'))

  }, [])

  return (
    <div className={styles.service}>
      <div className={styles.service__hero}>
        <UContainer>
          <HeroText text={'Наша цель - защитить ваши права и интересы, обеспечивая полное удовлетворение ваших потребностей!'} />
        </UContainer>
      </div>
      <UContainer>
        <div className={styles.service__wrap}>
          <SectionTitle title={t('service.title')} />
          <div className={styles.service__card}>
            {
              services.map((item, i) => (
                <div key={i} className={cn('service__card_item', { view: view === item.title })}>
                  <div className={styles.service__card_img}>
                    <img src={`http://localhost:3000${item.imageUrl}`} alt="img" />
                  </div>
                  <p className={styles.service__card_title} onClick={() => setView(view === '' ? item.title : '')}>{item.title}</p>
                  <div className={cn('service__card_text', { viewText: view === item.title })} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                  {
                    view === item.title ? <TfiClose className={styles.exit} onClick={() => setView('')} /> : ''
                  }

                </div>
              ))
            }
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Service;
