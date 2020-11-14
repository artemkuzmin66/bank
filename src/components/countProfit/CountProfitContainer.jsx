import React from 'react';
import Calculator from './Calculator';
import './CountProfit.scss';
import Profit from './Profit';
import Tabs from './Tabs';

class CountProfitContainer extends React.Component {
   render() {
      return (
         <section className="calculator-main">
            <div>
               <div className="container">
                  <Profit>
                     <Tabs label="Всем клиентам" />
                     <Tabs label="ОТП Premium" />
                  </Profit>
                  <Calculator />
               </div>
            </div>
         </section>
      )
   }
}
export default CountProfitContainer;