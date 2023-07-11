import React, { useEffect, useState } from 'react';
import UContainer from '../../../ui/container/UContainer';
import logo from '../../../../assets/icon/loggo.avif'
import phone from '../../../../assets/icon/header_phone.svg'
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

import './UserHeader.scss';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  return (
    <div className='header'>
      <UContainer>
        <div className="header__wrap">
          <div className="header__burger-wrap">
            <div className="header__burger" onClick={() => {
              setMobileMenu(!mobileMenu)
            }}>
              {mobileMenu
                ? <RxHamburgerMenu size={30} />
                : <GrClose size={30} />
              }
            </div>
          </div>
          <div className="header__logo">
            <Link to="/" className="header__logo_link">
              <img src={logo} alt="logo" />
              <div className="header__logo_content">
                <p className="header__logo_title">HUMO LEGAL</p>
                <p className="header__logo_text">АДВАКАТЛИК ФИРМАСИ</p>
              </div>
            </Link>
          </div>
          <div className="header__right">
            <div className="header__phone">
              <a href="tel:+998977383432">
                <div className="header__phone-img">
                  <img src={phone} alt="phone" />
                </div>
                <p className="header__phone_text">+998 97 738 34 32</p>
              </a>
            </div>
            <div className={mobileMenu ? ['header__menu'] : ['header__menu', 'show-menu'].join(' ')}>
              <ul className="header__menu_items">
                <li className="header__menu_item active_menu">
                  <Link to="/" className="header__menu_link">ГЛАВНАЯ</Link>
                </li>
                <li className="header__menu_item">
                  <Link to="about.html" className="header__menu_link">О НАС</Link>
                </li>
                <li className="header__menu_item">
                  <Link to="#" className="header__menu_link">УСЛУГИ</Link>
                </li>
                <li className="header__menu_item">
                  <Link to="#" className="header__menu_link">ПРЕСС ЦЕНТР</Link>
                </li>
                <li className="header__menu_item">
                  <Link to="#" className="header__menu_link">КОНТАКТЫ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default UserHeader;
