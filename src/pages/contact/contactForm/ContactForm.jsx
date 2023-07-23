import React from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form'
import { parsePhoneNumberFromString } from "libphonenumber-js"

const ContactForm = () => {
  const phoneNumber = parsePhoneNumberFromString("1234567890", "US")
  const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: {}
  })
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }
  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__name-box">
          <label className="contact-form__firstName">
            Имя:
            <input
              {...register('fullName', {
                required: "Поля обязательно к заполнению!"
              })}
              type="text"
            />
            {errors?.fullName && <p className='contact-form__error'>Поля обязательно к заполнению!</p>}
          </label>
          <label className="contact-form__lastName">
            Фамилия:
            <input
              {...register('surname')}
              type="text"
            />
            {errors?.surname && <p className='contact-form__error'>Поля обязательно к заполнению!</p>}
          </label>
        </div>
        <label className='contact-form__phone'>
          Номер телефона:
          <div className="contact-form__phone-wrap">
            {phoneNumber.formatInternational()}
          </div>
          <input
            {...register('phone', {
              required: "Поля обязательно к заполнению!"
            })}
            type="number"
          />
          {errors?.phone && <p className='contact-form__error'>Поля обязательно к заполнению!</p>}
        </label>
        <label className='contact-form__mail'>
          Email:
          <input
            {...register('time')}
            type="text"
          />
          {errors?.time && <p className='contact-form__error'>Поля обязательно к заполнению!</p>}
        </label>
        <label className="contact-form__phone">
          Сообщения:
          <input
            {...register('question', {
              required: "Поля обязательно к заполнению!"
            })}
          />
          {errors?.question && <p className='contact-form__error'>{errors?.question?.message || "Error!"}</p>}
        </label>
        <button disabled={!isValid}>ОТПРАВИТЬ</button>
      </form>
    </div>
  );
}

export default ContactForm;
