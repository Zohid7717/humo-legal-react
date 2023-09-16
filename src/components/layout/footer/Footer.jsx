import React, { useState } from 'react';
import { SiFacebook, SiInstagram, SiTelegram, SiLinkedin } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import { selectIsAuth } from '../../../services/redux/slices/auth';
import UContainer from '../../ui/container/UContainer';
import axios from '../../../services/network/axios'

import './Footer.scss'

const Footer = () => {
  const isAuth = useSelector(selectIsAuth);
  const { t, i18n } = useTranslation()

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
      alert(t('footer.num-error'))
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
                  <svg version="1.0"
                    width="403.000000pt" height="424.000000pt" viewBox="0 0 403.000000 424.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,424.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                      <path d="M170 2580 l0 -1559 92 -54 c51 -29 152 -88 225 -130 73 -42 135 -77 138 -77 3 0 5 580 5 1290 0 710 3 1290 6 1290 7 0 435 -245 1162 -667 l232 -135 98 57 c53 32 115 68 137 80 35 20 82 47 255 148 19 11 87 49 150 85 63 35 122 70 130 77 8 7 20 14 25 16 10 4 147 81 175 99 8 6 128 74 265 153 138 79 304 175 370 214 66 38 125 72 130 74 6 2 36 20 68 39 l57 35 0 263 0 263 -22 -12 c-65 -34 -164 -94 -170 -103 -4 -6 -8 -8 -8 -4 0 4 -62 -30 -137 -74 -76 -44 -158 -92 -183 -106 -25 -14 -88 -50 -140 -80 -52 -31 -162 -94 -244 -141 -82 -47 -169 -98 -195 -113 -25 -15 -66 -39 -91 -53 -25 -14 -52 -29 -60 -35 -14 -8 -95 -55 -180 -102 -19 -11 -60 -35 -90 -53 -246 -147 -344 -197 -359 -187 -9 6 -54 32 -101 58 -47 26 -108 63 -137 81 -29 18 -55 33 -58 33 -3 0 -22 11 -43 23 -20 13 -57 35 -82 49 -25 15 -117 68 -205 119 -88 51 -176 102 -197 113 -47 27 -334 193 -373 216 -16 10 -73 42 -125 72 -52 31 -135 78 -183 107 -49 28 -90 51 -93 51 -2 0 -27 15 -56 33 -29 18 -83 50 -120 70 l-68 37 0 -1560z"/>
                      <path d="M3836 3042 c-27 -15 -56 -31 -65 -37 -9 -5 -67 -39 -130 -75 -62 -36 -132 -76 -156 -90 -23 -14 -80 -47 -126 -73 -108 -62 -167 -96 -204 -118 -16 -10 -48 -28 -70 -40 -22 -12 -92 -52 -155 -89 -63 -37 -180 -105 -260 -150 -80 -46 -168 -98 -197 -117 -28 -18 -54 -33 -56 -33 -3 0 -91 -49 -196 -110 -104 -60 -194 -110 -198 -110 -5 0 -14 5 -21 12 -7 7 -36 26 -66 43 -70 39 -151 85 -201 115 -22 13 -61 35 -86 49 -26 14 -73 41 -105 60 -33 19 -72 42 -89 51 -16 10 -82 48 -145 84 -63 37 -134 79 -157 92 l-43 25 0 -264 0 -265 68 -40 c37 -22 141 -82 232 -134 91 -53 210 -121 265 -153 55 -32 158 -91 228 -131 l128 -74 192 111 c960 555 1177 680 1192 685 13 5 15 -91 15 -791 0 -438 4 -795 8 -793 4 2 59 32 121 68 62 36 132 76 154 89 23 12 72 41 110 62 l67 40 0 1064 c0 586 -1 1065 -2 1065 -2 -1 -25 -13 -52 -28z"/>
                      <path d="M1280 882 l0 -501 83 -49 c138 -82 365 -212 371 -212 3 0 6 236 6 524 l0 523 -222 104 c-121 57 -225 106 -230 107 -4 2 -8 -221 -8 -496z"/>
                      <path d="M2670 1332 c-53 -26 -153 -74 -223 -106 l-127 -59 0 -523 0 -522 230 131 230 132 0 498 c0 273 -3 497 -7 496 -5 0 -51 -21 -103 -47z"/>
                    </g>
                  </svg>
                  <div className="footer__logo_content">
                    <p className="footer__logo_title">ADOLAT</p>
                    <p className="footer__logo_text">{t('logo.text')}</p>
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
                <h3 className="footer__address-title">{t('footer.cty')}</h3>
                <p className="footer__address-street">{t('footer.address')}<br></br> {t('footer.street')} <br></br>{t('footer.index')}</p>
                <p className="footer__address-email">
                  <a href="mailto:hello@employeelawyer.com">hello@employeelawyer.com</a>
                  <Link to='tel:+998 97 738 34 32'>+998 97 738 34 32</Link>
                </p>
              </div>
              <div className="footer__feed">
                <h3 className="footer__feed-title">{t('footer.form')}</h3>
                <label className="footer__feed-input">{t('footer.form-label')}
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+998 XX XXX XX XX' />
                </label>
                <button onClick={Submit} className='footer__feed-submit'>{t('footer.btn')}</button>
              </div>
            </div>
          </div>
          <div className="footer__tail">
            <p className="footer__tail-low">Ⓒ2000.ADOLAT.{t('footer.low')}</p>
            <Link to="/admin" className="footer__tail-back">admin</Link>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Footer;
