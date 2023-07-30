import React, { useEffect, useState, Suspense } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import UContainer from '../../../ui/container/UContainer';
import logo from '../../../../assets/icon/loggo.avif'
import phone from '../../../../assets/icon/header_phone.svg'
import imgUZB from '../../../../assets/icon/uzbekistan(1).png'
import imgRUS from '../../../../assets/icon/russia(1).png'
import imgENG from '../../../../assets/icon/united-kingdom(1).png'

import './UserHeader.scss';
import { useSelector } from 'react-redux';

const UserHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [Scroll, setScroll] = useState(0)
  const activePage = useSelector(state => state.selectPageReducer.activePage)
  const { t, i18n } = useTranslation()
  const menuType = [
    { name: 'ГЛАВНАЯ', value: '/' },
    { name: 'О НАС', value: '/about' },
    { name: 'УСЛУГИ', value: '/service' },
    { name: 'ПРЕСС ЦЕНТР', value: '/press' },
    { name: 'КОНТАКТЫ', value: '/contact' },
  ]
  const langList = [
    { name: 'uz', image: imgUZB },
    { name: 'ru', image: imgRUS },
    { name: 'en', image: imgENG },
  ]

  const handleClickPage = () => {
    if (!mobileMenu) {
      setMobileMenu(true)
    }
  }

  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.remove('fixed')
    } else {
      document.body.classList.add('fixed')
    }
  }, [mobileMenu])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [Scroll])
  return (
    <>
      <div className={Scroll > 180
        ? 'header active-header'
        : 'header'
      }>
        <UContainer>
          <div className="header__wrap">
            <div className="header__burger-wrap" onClick={() => {
              setMobileMenu(!mobileMenu)
            }}>
              <div className="header__burger" >
                {mobileMenu
                  ? <RxHamburgerMenu size={30} />
                  : <GrClose size={30} />
                }
              </div>
            </div>
            <div className="header__logo">
              <Link to="/" className={Scroll > 180 ? "header__logo_link passive" : "header__logo_link"}>
                <img src={logo} alt="logo" />
                <div className={Scroll > 180 ? "header__logo_content passive" : "header__logo_content"} >
                  <p className="header__logo_title">HUMO LEGAL</p>
                  <p className="header__logo_text" >{t('logo.text')}</p>
                </div>
              </Link>
            </div>
            <div className="header__right">
              <div className="header__phone" >
                <a href="tel:+998977383432">
                  <div className="header__phone-img">
                    <img src={phone} alt="phone" />
                  </div>
                  <p className="header__phone_text">+998 97 738 34 32</p>
                </a>
              </div>
              <div className={mobileMenu ? ['header__menu'] : ['header__menu', 'show-menu'].join(' ')}>
                <div className="header__aside">
                  <ul className="header__menu_items">
                    {
                      menuType.map((item, i) => (
                        <li key={i} className={activePage === item.value ? "header__menu_item active_menu" : "header__menu_item"}>
                          <Link to={item.value} value={item.value} onClick={() => handleClickPage()} className="header__menu_link">{item.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                  <div className="header__lang-list">
                    {langList.map((item, i) => (
                      <button key={i} className={i18n.language === item.name ? 'header__lang-item active-lang' : 'header__lang-item'} type='submit' onClick={() => i18n.changeLanguage(item.name)}>
                    <img src={item.image} alt={item.name} />
                  </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </UContainer >
      </div >
    </>
  );
}

export default UserHeader;
