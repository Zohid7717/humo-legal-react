import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import PhoneInputWithCountrySelect from 'react-phone-number-input/react-hook-form'


import UContainer from '../../../components/ui/container/UContainer';
import axios from '../../../services/network/axios'
import 'react-phone-number-input/style.css'
import './Form.scss';

const Form = () => {
  const [fullName, setFullName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [question, setQuestion] = useState('')
  const { register, formState: { errors, isValid }, handleSubmit, control, reset } = useForm({
    mode: "onBlur",
    defaultValues: {}
  })

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
          <form className="form__form">
            <div className="form__head">
              <label className="form__firstName">
                <input
                  {...register('fullName', {
                    required: "Поля обязательно к заполнению!"
                  })}
                  type="text"
                  placeholder="Имя"
                />
                {errors?.fullName && <p className='form__error'>Поля обязательно к заполнению!</p>}
              </label>
              <label className="form__lastName">
                <input
                  {...register('surname')}
                  type="text"
                  placeholder="Фамилия"
                />
                {errors?.surname && <p className='form__error'>Поля обязательно к заполнению!</p>}
              </label>
              <label className='contact-form__phone'>
                <PhoneInputWithCountrySelect
                  name='phone'
                  control={control}
                  rules={{ required: true }}
                  defaultCountry='UZ'
                  placeholder='11 222-33-44'
                />
                {errors?.phone && <p className='form__error'>Поля обязательно к заполнению!</p>}
              </label>
              <label className='form__mail'>
                <input
                  {...register('time', {
                  })}
                  type="text"
                  placeholder='Доп. информация'
                />
              </label>
            </div>
            <label className="form__input-text">
              <input
                {...register('question', {
                  required: "Поля обязательно к заполнению!"
                })}
                placeholder="Задайте свой вопрос"
              />
              {errors?.question && <p className='form__error'>{errors?.question?.message || "Error!"}</p>}
            </label>
            <button className='form__submit' disabled={!isValid}>ОТПРАВИТЬ</button>
          </form>
        </div>
      </UContainer>
    </div>
  );
}

export default Form;
