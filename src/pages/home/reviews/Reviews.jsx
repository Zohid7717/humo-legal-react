import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import UContainer from '../../../components/ui/container/UContainer';
import 'swiper/css';
import './Reviews.scss'

const Reviews = () => {
  return (
    <div className='reviews'>
      <UContainer>
        <div className="reviews">
          <div className="reviews__slider-wrap">
            <Swiper
              className="reviews__slider slider__container"
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".reviews__prev",
                prevEl: ".reviews__next",
                disabledClass: "swiper-button-disabled"
              }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="reviews__slider-item slider__slide">
                <p className="reviews__item-text">Я был очень доволен работой юристов данной компании. Они профессионально и внимательно подошли к моей проблеме, помогли ее решить и дали мне ценные советы. Рекомендую!</p>
                <p className="reviews__item-name">Alisher Olimov</p>
              </SwiperSlide>
              <SwiperSlide className="reviews__slider-item slider__slide">
                <p className="reviews__item-text">Обратился в эту компанию с вопросом о наследстве. Юристы быстро и эффективно решили все мои проблемы, объяснили все нюансы и дали полезные рекомендации. Очень благодарен!</p>
                <p className="reviews__item-name">Barno Abdullayeva</p>
              </SwiperSlide>
              <SwiperSlide className="reviews__slider-item slider__slide">
                <p className="reviews__item-text">Сотрудничество с данной юридической компанией оставило только положительные впечатления. Юристы работают профессионально и ответственно, всегда готовы помочь и дать квалифицированный совет. Рекомендую!</p>
                <p className="reviews__item-name">Abduraxmon Saidov</p>
              </SwiperSlide>
              <SwiperSlide className="reviews__slider-item slider__slide">
                <p className="reviews__item-text">Я обратился в эту компанию для решения спора с работодателем. Юристы быстро разобрались в ситуации и помогли мне защитить свои права. Очень доволен результатом и рекомендую данную компанию всем, кто нуждается в юридической помощи.</p>
                <p className="reviews__item-name">Komil Karimov</p>
              </SwiperSlide>
              <SwiperSlide className="reviews__slider-item slider__slide">
                <p className="reviews__item-text">Я неоднократно обращался в данную юридическую компанию по различным вопросам и всегда получал квалифицированную помощь. Юристы работают быстро и эффективно, всегда готовы ответить на все вопросы и дать ценные советы. Очень рекомендую!</p>
                <p className="reviews__item-name">Svetlana Yun</p>
              </SwiperSlide>
            </Swiper>
            <button className="reviews__prev"></button>
            <button className="reviews__next"></button>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Reviews;
