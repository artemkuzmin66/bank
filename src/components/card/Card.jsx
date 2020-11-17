import React from 'react';
import './Сard.scss';
import card from '../../assets/images/cart.png'
import CardForm from './CardForm';


class Cart extends React.Component {

   state = {
      isOpen: false,
   }

   handleDeploy = () => {
      this.setState(prevState => ({
         isOpen: !prevState.isOpen
      }));
   }


   render() {

      const { isOpen } = this.state

      return (
         <section>
            <div className="cart">
               <div className="container">
                  <div className="cart__header">
                     <h1 className="cart__header-title">Бесплатная карта с доставкой на дом</h1>
                     <p>Закажите карту «ОТП Покупки» онлайн и получайте повышенную ставку уже сейчас</p>
                  </div>
                  <div className="cart__body">
                     <div className="cart__body-img">
                        <img src={card} alt="card" />
                     </div>
                     <div className="cart__body-content">
                        <ul className="cart__body-content-list">
                           <li>Обслуживание карты при выполнении простых условий — <span>0 ₽</span></li>
                           <li>Дополнительно до <span>2,5% </span>годовых к ставке по накопительному счету</li>
                           <li>Снятие наличных в банкоматах любых банков без комиссии — до 30 000 ₽</li>
                        </ul>
                     </div>
                  </div>
                  <div className="cart__footer">
                     <button onClick={this.handleDeploy}>Заказать карту</button>
                     <a href="/#">Тарифы по карте</a>
                  </div>
               </div>
            </div>
            {
               isOpen &&
               <CardForm />
            }
         </section >
      );
   }
}

export default Cart;