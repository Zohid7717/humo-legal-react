import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './Form.scss';
import UContainer from '../../../components/ui/container/UContainer';

const Form = () => {
  return (
    
    <div className='form'>
      <div className="form__bg"></div>
      <UContainer>
        <div className="form__wrap">
          <div className="form__content">
            <h2 className="form__title">Давайте поговорим о ваших потребностях!</h2>
            <p className="form__text">Оставьте заявку и мы перезвоним вам, чтобы обсудить все детали.</p>
          </div>
          <div className="form__form">
            <div className="form__head">
              <input type="text" placeholder="Имя" className="form__name" required />
              <input type="text" placeholder="Фамилия" className="form__surmane" />
              <input type="text" placeholder="Номер телефона" className="form__phone" />
              <input type="text" placeholder="Время удобная для Вас" className="form__date" />
            </div>
            <textarea cols="30" rows="10" className="form__textarea" placeholder="Задайте свой вопрос (не обязателно)"></textarea>
            <button className='form__submit'>ОТПРАВИТЬ</button>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Form;
