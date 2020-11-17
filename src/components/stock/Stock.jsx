import React from 'react';
import Deploy from './Deploy';
import './Stock.scss';
import s from './Deploy.module.css';

class Stock extends React.Component {

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
         <div>
            <section className="stock">
               <div className="container">
                  <div className="stock__content">
                     <h1 className="stock__content-title">Акция «Будь в плюсе»</h1>
                     <p className="stock__content-p">Получите возможность удвоить остаток на вашем накопительном счете! </p>
                     <a onClick={this.handleDeploy} className={`${isOpen && s.none} ${s.a}`} href="#more">Подробнее</a>
                  </div>
               </div>
            </section>
            { isOpen &&
               <Deploy isOpen={isOpen} handleDeploy={this.handleDeploy} />
            }

         </div>
      );
   }
}
Stock.defaultProps = {
   keks: 'kesk'
}

export default Stock;