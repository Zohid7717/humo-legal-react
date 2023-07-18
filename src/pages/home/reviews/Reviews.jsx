import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Autoplay } from 'swiper';
import UContainer from '../../../components/ui/container/UContainer';
import { fetchReviewsAll } from '../../../services/redux/reviews/slice';
import 'swiper/css';
import './Reviews.scss'

const Reviews = () => {
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.reviewsReducer.reviews);
  useEffect(() => {
    dispatch(fetchReviewsAll())
  }, [])
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
                delay: 7000,
                disableOnInteraction: false,
              }}
            >
              {
                reviews.map((item) => (
                  <SwiperSlide key={item._id} className="reviews__slider-item slider__slide">
                    <div className='reviews__item-text' dangerouslySetInnerHTML={{ __html: item.text }}></div>
                    <p className="reviews__item-name">{item.paramTree}</p>
                  </SwiperSlide>
                ))
              }
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
