import React from 'react';
import './Question.scss';
import up from '../../assets/images/up.svg'
import down from '../../assets/images/down.png'


class Question extends React.Component {

   state = {

      isOpen1: false, name1: 'Для получения повышенного бонуса выпускается специальная бесплатная карта тарифа «ОТП Покупки (к накопительному счету)». Покупки по другим картам банка не учитываются.',
      isOpen2: false, name2: 'Проценты по базовой ставке выплачиваются ежемесячно в последний календарный день месяца. Бонус к ставке (за совершение покупок по карте) выплачивается ежемесячно, до 20 числа месяца, следующего за расчетным.',
      isOpen3: false, name3: 'Проценты по базовой ставке начисляются на накопительный счет, бонус по ставке начисляется на счет карты «ОТП Покупки».',
      isOpen4: false, name4: 'Повышенная ставка начисляется на сумму остатка, не превышающую 350 000 рублей. Количество накопительных счетов при этом не ограничено.'

   }


   handleDeploy1 = () => {
      this.setState(prevState => ({
         isOpen1: !prevState.isOpen1
      }));
   }
   handleDeploy2 = () => {
      this.setState(prevState => ({
         isOpen2: !prevState.isOpen2
      }));
   }
   handleDeploy3 = () => {
      this.setState(prevState => ({
         isOpen3: !prevState.isOpen3
      }));
   }
   handleDeploy4 = () => {
      this.setState(prevState => ({
         isOpen4: !prevState.isOpen4
      }));
   }



   render() {
      const { name1, name2, name3, name4, isOpen1, isOpen2, isOpen3, isOpen4 } = this.state
      return (
         <section>
            <div className="question">
               <div className="container">
                  <div className="question__content">
                     <h1>Вопросы <span>и ответы</span></h1>
                     <ul className="question__content-list">
                        <div className="question__content-list-text">
                           <li onClick={this.handleDeploy1}>У меня уже есть карта ОТП Банка, могу я принять участие в акции?</li>
                           {isOpen1 ? <img className="question-down" src={down} alt="down" /> : <img src={up} alt="up" />}
                        </div>
                        {isOpen1 &&
                           <div className="deployQuestion__text">{name1}</div>
                        }
                        <div className="question__content-list-text">
                           <li onClick={this.handleDeploy2}>В какой срок начисляются проценты по накопительному счету?</li>
                           {isOpen2 ? <img className="question-down" src={down} alt="down" /> : <img src={up} alt="up" />}

                        </div>
                        {isOpen2 &&
                           <div className="deployQuestion__text">{name2}</div>
                        }
                        <div className="question__content-list-text">
                           <li onClick={this.handleDeploy3}>На какой счет зачисляются проценты по накопительному счету?</li>
                           {isOpen3 ? <img className="question-down" src={down} alt="down" /> : <img src={up} alt="up" />}
                        </div>
                        {isOpen3 &&
                           <div className="deployQuestion__text">{name3}</div>
                        }
                        <div className="question__content-list-text">
                           <li onClick={this.handleDeploy4}>На какую сумму остатка на накопительном счете выплачивается повышенная ставка?</li>
                           {isOpen4 ? <img className="question-down" src={down} alt="down" /> : <img src={up} alt="up" />}
                        </div>
                        {isOpen4 &&
                           <div className="deployQuestion__text">{name4}</div>
                        }
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Question;