import React from 'react';
import './MobileApp.scss';
import logo from '../../assets/images/mobileApp/logo.png'
import QR from '../../assets/images/mobileApp/QR.png'
import apple from '../../assets/images/mobileApp/apple.png'
import google from '../../assets/images/mobileApp/google.png'


const Mobile = () => {
   return (
      <div className="container container--mobileApp">
         <section className="mobile">
            <div className="container">
               <div className="mobile__wrapper">
                  <div className="mobile__content">
                     <img className="mobile__content-logo" src={logo} alt="otp-bank" />
                     <h2 className="mobile__content-title">Мобильное приложение <span>ОТП Банк</span></h2>
                     <p>Открывайте вклады и накопительные счета прямо в приложении</p>
                     <p>Оплачивайте телефон, ЖКХ и другие услуги</p>
                     <p>Бесплатно пополняйте счёт с карт других банков</p>
                     <div className="mobile__content-row">
                        <img className="mobile__content-row-qr" src={QR} alt="QR" />
                        <div className="mobile__content-col">
                           <a href="/#">
                              <img className="mobile__content-col-apple" src={apple} alt="apple" />
                           </a>
                           <a href="/#">
                              <img className="mobile__content-col-google" src={google} alt="google" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Mobile;