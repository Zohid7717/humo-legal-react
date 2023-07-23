import React, { useEffect } from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import UContainer from '../../../components/ui/container/UContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsAll } from '../../../services/redux/reviews/slice';

import 'swiper/css';
import './ReviewsAbout.scss'
import SectionTitle from '../../../components/ui/SectionTitle/SectionTitle';

const ReviewsAbout = () => {
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.reviewsReducer.reviews);
  const reviewsStatus = useSelector(state => state.reviewsReducer.status)
  useEffect(() => {
    dispatch(fetchReviewsAll())
  }, [])
  return (
    <div className="about-reviews">
      <UContainer>
        <SectionTitle title={'ОТЗЫВЫ НАШИХ ПОСТОЯНЫХ КЛИЕНТОВ'}/>
        {/* <h2 className='about-reviews__title'><span></span></h2> */}
        <div className="about-reviews__wrap">
          <Swiper
            className="about-reviews__slider"
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
                <SwiperSlide key={item._id} className="about-reviews__slider-item">
                  <div className="about-reviews__slider-wrap">
                    <div className="about-reviews__slider-content">
                      <p className='about-reviews__slider-company'>{item.title}</p>
                      <div className='about-reviews__item-text' dangerouslySetInnerHTML={{ __html: item.text }}></div>
                      <p className="about-reviews__item-name">{item.paramTree}</p>
                    </div>
                    <div className="about-reviews__slider-img">
                      <img src={`http://localhost:3000${item.imageUrl}`} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </UContainer>
    </div>
  );
}

export default ReviewsAbout;
