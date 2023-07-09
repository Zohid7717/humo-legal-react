import React from 'react';
import UContainer from '../../../components/ui/container/UContainer';
import why1 from '../../../assets/why-1.avif'
import why2 from '../../../assets/why-2.avif'
import why3 from '../../../assets/why-3.avif'
import why4 from '../../../assets/why-4.avif'
import why5 from '../../../assets/why-5.avif'
import './Why.scss'

const Why = () => {
  return (
    <div className="why">
      <UContainer>
        <div className="why__wrap">
          <h2 className="why__title">ПОЧЕМУ МЫ?</h2>
          <ul className="why__items">
            <li className="why__item">
              <div className="why__item-content">
                <h3 className="why__item-title">Опытные и квалифицированные юристы</h3>
                <p className="why__item-text">Наша компания имеет команду высококвалифицированных юристов и адвокатов, которые
                  имеют опыт работы в различных областях
                  права.</p>
              </div>
              <div className="why__item-img">
                <img src={why1} alt="img-1"/>
              </div>
            </li>
            <li className="why__item">
              <div className="why__item-content">
                <h3 className="why__item-title">Индивидуальный подход к каждому клиенту</h3>
                <p className="why__item-text">Мы стремимся понять потребности каждого клиента и предоставить индивидуальный
                  подход к решению его юридических вопросов.</p>
              </div>
              <div className="why__item-img">
                <img src={why2} alt="img-2"/>
              </div>
            </li>
            <li className="why__item">
              <div className="why__item-content">
                <h3 className="why__item-title">Высокий уровень профессионализма</h3>
                <p className="why__item-text">Мы гарантируем высокий уровень профессионализма и этики во всех наших делах.</p>
              </div>
              <div className="why__item-img">
                <img src={why3} alt="img-3"/>
              </div>
            </li>
            <li className="why__item">
              <div className="why__item-content">
                <h3 className="why__item-title">Комплексный подход к решению проблем</h3>
                <p className="why__item-text">Мы предлагаем комплексный подход к решению юридических проблем наших клиентов,
                  включая консультации, представление
                  интересов в суде и разрешение споров.</p>
              </div>
              <div className="why__item-img">
                <img src={why4} alt="img-4"/>
              </div>
            </li>
            <li className="why__item">
              <div className="why__item-content">
                <h3 className="why__item-title">Репутация и доверие</h3>
                <p className="why__item-text">Наша компания имеет отличную репутацию и доверие клиентов благодаря нашим
                  профессиональным подходам и высокому качеству
                  предоставляемых услуг.</p>
              </div>
              <div className="why__item-img">
                <img src={why5} alt="img-5"/>
              </div>
            </li>
          </ul>
        </div>
      </UContainer>
    </div>
  );
}

export default Why;
