import React from 'react';
import './CountProfit.scss';

const Earn = () => {
   return (
      <div className="earn">
         <div className="earn-title">Сколько я заработаю</div>
         <p className="earn-subtitle">к 20 февраля 2021</p>
         <ul className="earn-list">
            <li>
               <p className="earn-text">Доход по счёту</p>
               <p className="earn-num">9 200 ₽</p>
            </li>
            <li>
               <p className="earn-text">Ставка</p>
               <p className="earn-num">+ 4,2 %</p>
            </li>
            <li>
               <p className="earn-text">Сумма к получению</p>
               <p className="earn-num-total">309 200 ₽</p>
            </li>
         </ul>
         <a href="/#" target="_blank" className="earn-btn">Открыть счёт</a>
      </div>

   );
}

export default Earn;