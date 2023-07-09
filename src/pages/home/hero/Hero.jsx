import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import UContainer from '../../../components/ui/container/UContainer';

import 'swiper/css';
import 'swiper/css/autoplay';
import './Hero.scss';


const Hero = () => {

  return (
    <div className='hero'>
      <UContainer>
        <div className="hero__wrap">
          <div className="hero__slider_wrap">
            <Swiper
              className="hero__slider slider__container"
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
              }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper)=>console.log(swiper)}
            >
              <SwiperSlide className="hero__slider_item slider__slide">
                <div className="hero__slider_left"></div>
                <div className="hero__slider_right">
                  <h2 className="hero__slider-right-title">Мы для Всех</h2>
                  <p className="hero__slider_right_text">Мы являемся одной из ведущих юридических компаний,
                    специализирующихся на предоставлении широкого спектра юридических услуг для бизнеса и частных лиц.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero__slider_item slider__slide">
                <div className="hero__slider_left"></div>
                <div className="hero__slider_right">
                  <h2 className="hero__slider-right-title">Мы во всех сферах</h2>
                  <p className="hero__slider_right_text">Наши опытные юристы готовы оказать помощь в различных областях
                    права, включая корпоративное право, налоговое право, интеллектуальную собственность, трудовое право,
                    иммиграционное право и другие.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero__slider_item slider__slide">
                <div className="hero__slider_left"></div>
                <div className="hero__slider_right">
                  <h2 className="hero__slider-right-title">Мы индевидуальны</h2>
                  <p className="hero__slider_right_text">Мы стремимся к высокому уровню профессионализма и качества
                    обслуживания наших клиентов. Мы понимаем, что каждый клиент уникален и требует индивидуального
                    подхода, поэтому мы работаем над тем, чтобы предоставить нашим клиентам наилучшие решения в
                    соответствии с их потребностями.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero__slider_item slider__slide">
                <div className="hero__slider_left"></div>
                <div className="hero__slider_right">
                  <h2 className="hero__slider-right-title">Мы универсальны</h2>
                  <p className="hero__slider_right_text">Наши услуги доступны как для местных, так и для международных
                    клиентов. Мы готовы оказать помощь на различных языках, включая английский, испанский, французский и
                    другие.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="hero__slider_item slider__slide">
                <div className="hero__slider_left"></div>
                <div className="hero__slider_right">
                  <h2 className="hero__slider-right-title">Мы на связи</h2>
                  <p className="hero__slider_right_text">Свяжитесь с нами, чтобы обсудить свои юридические потребности и
                    получить консультацию от наших экспертов. Мы будем рады помочь вам достичь успеха в ваших делах и
                    защитить ваши права.</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="image-swiper-button-prev"></button>
            <button className="image-swiper-button-next"></button>
          </div>
          <div className="hero__phone_box">
            <a href="tel:+998977383432" className="hero__phone_bth">
              Позвони сейчас и получи бесплатную консультацию
            </a>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Hero;
