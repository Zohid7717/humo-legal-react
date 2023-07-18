import React, { useEffect, useState } from 'react';
import UContainer from '../../../components/ui/container/UContainer';
import FAQImg from '../../../assets/FAQ.avif';
import './Faq.scss';
import CustomizedAccordions from '../../../components/ui/faqAccordion/FAQAccordion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionAll, fetchQuestionLimit } from '../../../services/redux/question/slice';

const Faq = () => {
  const faq = useSelector(state => state.questionReducer.question)
  const faqStatus = useSelector(state => state.questionReducer.status)
  const dispatch = useDispatch()
  const [limit, setLimit] = useState(true)

  useEffect(() => {
    if (limit) {
      dispatch(fetchQuestionLimit())
    } else {
      dispatch(fetchQuestionAll())
    }
  }, [limit])

  if (faqStatus === 'loading') {
    return <div className='question-skeleton'> loading </div>
  }
  return (
    <div className='faq'>
      <UContainer>
        <div className="faq__wrap">
          {
            limit
              ? <div className="faq__img">
                <img src={FAQImg} alt="FAQ" />
              </div>
              : ''
          }

          <div className="faq__content">
            <h2 className="faq__title">
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </h2>
            <CustomizedAccordions faq={faq} />
            <button className="faq__btn" onClick={() => setLimit(!limit)}>{limit ? 'РАЗВЕРНУТЬ' : 'СВЕРНУТЬ'}</button>
          </div>
        </div>
      </UContainer>
    </div>
  );
}

export default Faq;
