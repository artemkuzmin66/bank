import React from 'react';
import './Rate.scss';
import icoOne from '../../assets/images/rate/ico-one.png';
import icoTwo from '../../assets/images/rate/ico-two.png';
import icoThree from '../../assets/images/rate/ico-three.png';
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png';
import three from '../../assets/images/3.png';

const Rate = () => {
   return (
      <section className="rate">
         <div className="container">
            <h1>Как получить повышенную ставку</h1>
            <div className="rate__row">

               <div className="rate__col">
                  <div className="rate__col-wrapper">
                     <img className="rate__col-ico" src={icoOne} alt="card" />
                     <img className="rate__col-img" src={one} alt="1" />
                     <h3>Откройте накопительный счёт</h3>
                  </div>
                  <p>и получите <span>карту «ОТП Покупки»</span>.Карту можно оформить в отделении банка или заказать доставку</p>

               </div>

               <div className="rate__col">
                  <div className="rate__col-wrapper">
                     <img className="rate__col-ico" src={icoTwo} alt="bonus" />
                     <img className="rate__col-img" src={two} alt="2" />
                     <h3 className="rate__col-text">Совершайте покупки</h3>
                  </div>
                  <p>по карте и получайте бонус: дополнительно до 2,5% годовых к ставке по накопительному счету</p>

               </div>

               <div className="rate__col">
                  <div className="rate__col-wrapper">
                     <img className="rate__col-ico" src={icoThree} alt="present" />
                     <img className="rate__col-img" src={three} alt="3" />
                     <h3 className="rate__col-text">Получайте призы</h3>
                  </div>
                  <p>Станьте одним из 100 обладателей денежных призов с помощью ваших обычных покупок по карте</p>

               </div>

            </div>
         </div>
      </section>
   );
}

export default Rate;