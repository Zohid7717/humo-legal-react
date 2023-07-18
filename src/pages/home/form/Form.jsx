import React, { useState } from 'react';
import UContainer from '../../../components/ui/container/UContainer';
import axios from '../../../services/network/axios'

import './Form.scss';

const Form = () => {
  const [fullName, setFullName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [question, setQuestion] = useState('')

  const Submit = async () => {
    try {
      const fields = {
        fullName,
        surname,
        phone,
        time,
        question
      }
      await axios.post('/createRequest', fields)
      setFullName('')
      setSurname('')
      setPhone('')
      setTime('')
      setQuestion('')
    } catch (error) {
      console.error(error)
      alert('Ошибка при создании вопроса!')
    }
  }

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
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Имя" className="form__name" required />
              <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Фамилия" className="form__surmane" />
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Номер телефона 998*********" className="form__phone" />
              <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Время удобная для Вас" className="form__date" />
            </div>
            <textarea cols="30" rows="10" value={question} onChange={(e) => setQuestion(e.target.value)} className="form__textarea" placeholder="Задайте свой вопрос (не обязателно)"></textarea>
            <button className='form__submit' onClick={() => Submit()}>ОТПРАВИТЬ</button>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Form;
