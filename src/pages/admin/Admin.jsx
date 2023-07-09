import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';
import UContainer from '../../components/ui/container/UContainer';
import { fetchAuth, selectIsAuth } from '../../services/redux/slices/auth';

import './Admin.scss';

const Admin = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '2test@test.ru',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      alert('Не удалось авторизоватся!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to="/adminreviews"/>
  }
  return (
    <div className='admin'>
      <UContainer>
        <div className="admin__wrap">
          <div className="admin__form">
            <p className="admin__form-title">
              Вход в аккаунт
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="admin_form-login">
                Логин:
                <input
                  type="email"
                  placeholder='Введите почту'
                  className="admin_form-login-input"
                  {...register('email', {required: 'Укажите почту'})}
                />
                <p className="admin__helperText">{errors.login?.message}</p>
              </label>
              <label className="admin__form-password">
                Пароль:
                <input
                  type="password"
                  placeholder='Введите пароль'
                  className="admin__form-password-input"
                  {...register('password', {required: 'Укажите пароль'})}
                />
                <p className="admin__helperText">{errors.password ?.message}</p>
              </label>
              <button type='submit' className="admin__form-submit">Вход</button>
            </form>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Admin;
