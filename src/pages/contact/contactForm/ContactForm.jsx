import React from 'react';
import { useForm } from 'react-hook-form'
import PhoneInputWithCountrySelect from 'react-phone-number-input/react-hook-form';
import { useTranslation } from 'react-i18next'

import axios from '../../../services/network/axios'

import 'react-phone-number-input/style.css'
import './ContactForm.scss'

const ContactForm = ({ setModal }) => {
  const { t, i18n } = useTranslation()
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
    <div className='contact-form'>
      <h3 className="contact-form__title">{t('contacts.form-title') }</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='contact-form__wrap'>
        <div className="contact-form__name-box">
          <label className="contact-form__firstName">
            <p>{t('form.name')}:</p>
            <input
              {...register('fullName', {
                required: "Поля обязательно к заполнению!"
              })}
              type="text"
            />
            {errors?.fullName && <p className='contact-form__error'>{t('form.required') }</p>}
          </label>
          <label className="contact-form__lastName">
            Фамилия:
            <input
              {...register('surname')}
              type="text"
            />
          </label>
        </div>
        <label className='contact-form__phone'>
          Номер телефона:
          <PhoneInputWithCountrySelect
            name='phone'
            control={control}
            rules={{ required: true }}
            defaultCountry = 'UZ'
          />
          {errors?.phone && <p className='contact-form__error'>{ t('form.required')}</p>}
        </label>
        <label className='contact-form__mail'>
          Email:
          <input
            {...register('time', {
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: t('form.req-mes')
              }
            })}
            type="text"
          />
          {errors?.time && <p className='contact-form__error'>{ errors.time.message}</p>}
        </label>
        <label className="contact-form__text">
          {t('form.question')}
          <textarea
            {...register('question', {
              required: t('form.required')
            })}
          />
          {errors?.question && <p className='contact-form__error'>{t('form.required')}</p>}
        </label>
        <button disabled={!isValid}>ОТПРАВИТЬ</button>
      </form>
    </div>
  );
}

export default ContactForm;
