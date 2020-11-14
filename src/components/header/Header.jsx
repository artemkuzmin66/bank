import React from 'react';
import arrow from '../../assets/images/arrow.png'
import './Header.scss'

const Header = () => {
   return (
      <section className="header">
         <div className="container">
            <div className="header__content">
               <h1 className="header__content-title">Повышаем процент по   <span className="header__content-title-inline">накопительному счёту</span></h1>
               <ul className="header__content-list">
                  <li className="header__content-list-item">
                     <p className="header__content-list-item-text">До 6,5% годовых</p>
                     <img className="header__content-list-item-img" src={arrow} alt="success" />
                  </li>
                  <li className="header__content-list-item">
                     <p className="header__content-list-item-text">Пополнение и снятие без ограничений</p>
                     <img className="header__content-list-item-img" src={arrow} alt="success" />
                  </li>
                  <li className="header__content-list-item">
                     <p className="header__content-list-item-text">Акция «Будь в плюсе» — возможность <span>получить до 350 000 рублей </span></p>
                     <img className="header__content-list-item-img" src={arrow} alt="success" />
                  </li>
               </ul>
               <div className="header__content-btn">
                  <a target="_blank" href="/#">Открыть счёт</a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Header;