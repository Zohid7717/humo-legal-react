import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import UContainer from '../../../ui/container/UContainer';
import logo from '../../../../assets/icon/loggo.avif'
import phone from '../../../../assets/icon/header_phone.svg'

import './UserHeader.scss';

const UserHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [Scroll, setScroll] = useState(0)
  const [activeMenu, setActiveMenu] = useState('/')

  const menuType = [
    { name: 'ГЛАВНАЯ', value: '/' },
    { name: 'О НАС', value: '/about' },
    { name: 'УСЛУГИ', value: '/service' },
    { name: 'ПРЕСС ЦЕНТР', value: '/press' },
    { name: 'КОНТАКТЫ', value: '/contact' },
  ]

  const handleClickPage = (e) => {
    setActiveMenu(e)
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
                  <p className="header__logo_text" >АДВАКАТЛИК ФИРМАСИ</p>
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
                <ul className="header__menu_items">
                  {
                    menuType.map((item, i) => (
                      <li key={i} className={activeMenu === item.value ? "header__menu_item active_menu" : "header__menu_item"}>
                        <Link to={item.value} onClick={()=> handleClickPage(item.value)} value={item.value} className="header__menu_link">{item.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </UContainer >
      </div >
    </>
  );
}

export default UserHeader;
