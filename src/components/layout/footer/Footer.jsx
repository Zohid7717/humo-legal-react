import React from 'react';
import { SiFacebook, SiInstagram, SiTelegram, SiLinkedin } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icon/loggo.avif';
import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../ui/container/UContainer';

import './Footer.scss'

const Footer = () => {
  const isAuth = useSelector(selectIsAuth);
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
                <a href="#" className="footer__logo_link">
                  <img src={logo} alt="logo" />
                  <div className="footer__logo_content">
                    <p className="footer__logo_title">HUMO LEGAL</p>
                    <p className="footer__logo_text">АДВАКАТЛИК ФИРМАСИ</p>
                  </div>
                </a>
              </div>
              <div className="footer__socials-icon">
                <Link className='footer__socials-icon-wrap'>
                  <SiFacebook color='white' size={26} />
                </Link>
                <Link className='footer__socials-icon-wrap'>
                  <SiInstagram color='white' size={26} />
                </Link>
                <Link className='footer__socials-icon-wrap'>
                  <SiTelegram color='white' size={26} />
                </Link>
                <Link className='footer__socials-icon-wrap'>
                  <SiLinkedin color='white' size={26} />
                </Link>
              </div>
            </div>
            <div className="footer__address">
              <h3 className="footer__address-title">TASHKENT</h3>
              <p className="footer__address-street">Адрес:<br></br> улица Мирзо-Улугбек 25/201, <br></br>Tashkent 100007</p>
              <p className="footer__address-email">
                <a href="mail:hello@employeelawyer.com">hello@employeelawyer.com</a>
                <a href='tel:+1.675.332.6756'>+1.675.332.6756</a>
              </p>
            </div>
            <div className="footer__feed">
              <h3 className="footer__feed-title">ДЛЯ ОБРАТНОЙ СВЯЗИ</h3>
              <label className="footer__feed-input">Введите свой номер
              <input type="text" placeholder='+998 XX XXX XX XX'  />
              </label>
              <button className='footer__feed-submit'>ОТПРАВИТЬ НОМЕР</button>
            </div>
          </div>
          <div className="footer__tail">
            <p className="footer__tail-low">Ⓒ2000.HUMO LEGAL.Все права защищены</p>
            <a href="#" className="footer__tail-back">В начало</a>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Footer;
