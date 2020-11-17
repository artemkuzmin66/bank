import React from 'react';
import './CountProfit.scss';
import arrow from '../../assets/images/arrow-2.svg';


class Profit extends React.Component {
   state = {
      activeTabIndex: 0,
      text: [
         { name: 'Всем клиентам' },
         { name: 'ОТП Premium' }
      ]

   }

   handleTabClick = tabIndex => this.setState(state => state.activeTabIndex === tabIndex ? null : ({ activeTabIndex: tabIndex }));


   render() {
      return (
         <div className="profit">
            <div>
               {React.Children.map(this.props.children, (tab, index) =>
                  React.cloneElement(tab, {
                     index,
                     active: index === this.state.activeTabIndex,
                     onClick: this.handleTabClick
                  }))
               }
               <div className="profit__title">
                  <h1 className="profit__title-title">Рассчитайте свой доход по накопительному счету</h1>
               </div>
               <div className="profit__text-row">
                  <ul className="profit__text-list">
                     <li className="profit__text">
                        <img src={arrow} alt="success" />
                        <p>Пополнение и снятие без ограничений</p>
                     </li>
                     <li className="profit__text">
                        <img src={arrow} alt="success" />
                        <p>Выплата процентов каждый месяц</p>
                     </li>
                     <li className="profit__text">
                        <img src={arrow} alt="success" />
                        <p>Возможность открытия онлайн</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div >

      );
   }
}

export default Profit;