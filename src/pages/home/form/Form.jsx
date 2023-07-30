import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import PhoneInputWithCountrySelect from 'react-phone-number-input/react-hook-form'

import UContainer from '../../../components/ui/container/UContainer';
import axios from '../../../services/network/axios'
import 'react-phone-number-input/style.css'
import './Form.scss';
import Modal from '../../../components/ui/modal/modal';

const Form = () => {
  const [modal, setModal] = useState(false)

  const { register, formState: { errors, isValid }, handleSubmit, control, reset } = useForm({
    mode: "onBlur",
    defaultValues: {}
  })

  const modalHidden = () => {
    setTimeout(() => {
      setModal(false)
    }, 3000);
  }

  const onSubmit = async (data) => {
    try {
      await axios.post('/createRequest', data)
      setModal(true)
      reset()
      modalHidden()
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
          <form onSubmit={handleSubmit(onSubmit)} className="form__form" >
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
              <textarea
                {...register('question', {
                  required: "Поля обязательно к заполнению!"
                })}
                placeholder="Задайте свой вопрос"
              />
              {errors?.question && <p className='form__error'>{errors?.question?.message || "Error!"}</p>}
            </label>
            <button className='form__submit' disabled={!isValid}>ОТПРАВИТЬ</button>
          </form>
          <div className={modal ? "form__modal active" : "form__modal"}>
            <Modal />
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Form;
