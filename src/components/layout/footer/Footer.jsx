import React, { useState } from 'react';
import { SiFacebook, SiInstagram, SiTelegram, SiLinkedin } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icon/loggo.avif';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../ui/container/UContainer';
import axios from '../../../services/network/axios'

import './Footer.scss'

const Footer = () => {
  const isAuth = useSelector(selectIsAuth);

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
      setPhone('')
    } catch (error) {
      console.error(error);
      alert('Ошибка при отправке номера!')
    }
  }

  if (isAuth) {
    return ""
  }
  return (
    <div className='footer'>
      <UContainer>
        <div className="footer__wrap">
          <div className="footer__content">
            <div className="footer__socials">
              <div className="footer__logo">
                <Link to="#" className="footer__logo_link">
                  <img src={logo} alt="logo" />
                  <div className="footer__logo_content">
                    <p className="footer__logo_title">HUMO LEGAL</p>
                    <p className="footer__logo_text">АДВАКАТЛИК ФИРМАСИ</p>
                  </div>
                </Link>
              </div>
              <div className="footer__socials-icon">
                <Link to='' className='footer__socials-icon-wrap'>
                  <SiFacebook color='white' size={26} />
                </Link>
                <a href='https://www.instagram.com/humo_legal/?igshid=MzRlODBiNWFlZA%3D%3D' className='footer__socials-icon-wrap' target="_blank">
                  <SiInstagram color='white' size={26} />
                </a>
                <a href='#' className='footer__socials-icon-wrap'>
                  <SiTelegram color='white' size={26} />
                </a>
                <a href='https://www.linkedin.com/company/humo-legal/' className='footer__socials-icon-wrap' target='_blank'>
                  <SiLinkedin color='white' size={26} />
                </a>
              </div>
            </div>
            <div className="footer__text">
              <div className="footer__address">
                <h3 className="footer__address-title">TASHKENT</h3>
                <p className="footer__address-street">Адрес:<br></br> улица Мирзо-Улугбек 25/201, <br></br>Tashkent 100007</p>
                <p className="footer__address-email">
                  <a href="mailto:hello@employeelawyer.com">hello@employeelawyer.com</a>
                  <Link to='tel:+998 97 738 34 32'>+998 97 738 34 32</Link>
                </p>
              </div>
              <div className="footer__feed">
                <h3 className="footer__feed-title">ДЛЯ ОБРАТНОЙ СВЯЗИ</h3>
                <label className="footer__feed-input">Введите свой номер
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+998 XX XXX XX XX' />
                </label>
                <button onClick={Submit} className='footer__feed-submit'>ОТПРАВИТЬ НОМЕР</button>
              </div>
            </div>
          </div>
          <div className="footer__tail">
            <p className="footer__tail-low">Ⓒ2000.HUMO LEGAL.Все права защищены</p>
            <Link to="#" className="footer__tail-back"></Link>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Footer;
