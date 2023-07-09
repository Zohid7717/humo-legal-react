import React from 'react';
import UContainer from '../../../components/ui/container/UContainer';
import FAQImg from '../../../assets/FAQ.avif';
import './Faq.scss';
import CustomizedAccordions from '../../../components/ui/faqAccordion/FAQAccordion';

const Faq = () => {
  return (
    <div className='faq'>
      <UContainer>
        <div className="faq__wrap">
          <div className="faq__img">
            <img src={FAQImg} alt="FAQ"/>
          </div>
          <div className="faq__content">
            <h2 className="faq__title">
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </h2>
            <CustomizedAccordions/>
            <a className="faq__btn" href="#">БОЛЬШЕ ВОПРОСОВ</a>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Faq;
