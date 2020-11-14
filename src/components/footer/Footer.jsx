import React from 'react';
import './Footer.scss';
import facebook from '../../assets/images/footer/facebook.png'
import youtube from '../../assets/images/footer/youtube.png'
import instagram from '../../assets/images/footer/instagram.png'
import odnoklassniki from '../../assets/images/footer/odnoklassniki.png'
import vk from '../../assets/images/footer/vk.png'
import apple from '../../assets/images/footer/apple.png'
import google from '../../assets/images/footer/google.png'
import logo from '../../assets/images/footer/logo.png'



const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__content">
               <div className="footer__top">
                  <ul className="footer__top-list">
                     <li><a href="/#">Офисы</a></li>
                     <li><a href="/#">Банкоматы</a></li>
                     <li><a href="/#">О банке</a></li>
                     <li><a href="/#">Интернет-банк</a></li>
                  </ul>
               </div>
               <div className="footer__body">
                  <div className="footer__body-left">
                     <div className="footer__body-left-contact">
                        <p>Свяжитесь с нами</p>
                        <a className="footer__body-left-contact-tel" href="tel:+7(495)7754775">+7 (495) 775 47 75</a>
                        <a className="footer__body-left-contact-tel" href="tel:88002007004">8 800 200 70 04</a>
                     </div>
                     <ul className="footer__body-left-contact-list">
                        <li>
                           <a href="/#"><img src={facebook} alt="facebook" /></a>
                        </li>
                        <li>
                           <a href="/#"><img src={youtube} alt="youtube" /></a>
                        </li>
                        <li>
                           <a href="/#"><img src={instagram} alt="instagram" /></a>
                        </li>
                        <li>
                           <a href="/#"><img src={odnoklassniki} alt="odnoklassniki" /></a>
                        </li>
                        <li>
                           <a href="/#"><img src={vk} alt="vk" /></a>
                        </li>
                     </ul>
                  </div>
                  <div className="footer__body-right">
                     <h3 className="footer__body-right-title">Мобильный банк</h3>
                     <div className="footer__body-right-store">
                        <a href="/#"><img src={apple} alt="apple" /></a>
                        <a href="/#"><img src={google} alt="google" /></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div className="footer__two">
            <div className="container">
               <div className="footer__two-content">
                  <a href="/#"><img src={logo} alt="otp-bank" /></a>
                  <p>Генеральная лицензия Банка России №2766 от 27.11.2014 г.</p>
                  <p>© 2020 АО «ОТП Банк»</p>
               </div>
            </div>

         </div>
      </footer>
   );
}

export default Footer;