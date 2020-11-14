import React from 'react';
import './Score.scss';
import diagram from '../../assets/images/diagram.png'


const Score = () => {
   return (
      <section className="score">
         <div className="container">
            <div className="score__header">
               <h1>Как работает <span>накопительный счёт</span></h1>
               <p>Ставки растут в зависимости от суммы ежемесячных трат по карте «ОТП Покупки»</p>
            </div>
            <div className="score__body">
               <div className="score__body-content">
                  <span>Процент надбавки </span>
                  <span>Ставка с учетом надбавки</span>
                  <span>Сумма трат по карте </span>
               </div>
               <div className="score__body-img">
                  <img src={diagram} alt="diagram" />
               </div>
            </div>
            <div className="score__footer">
               <h2 className="score__footer-text">Повышенная ставка начисляется на среднемесячный остаток по счёту,
           <span> не превышающий 350 000 рублей. Далее – начисление по базовой ставке 4%</span></h2>
               <a href="/#">Правила по накопительному счету</a>
            </div>
         </div>
      </section>
   );
}

export default Score;