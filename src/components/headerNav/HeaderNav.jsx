import React from 'react';
import logo from '../../assets/images/logo.png';
import s from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
   return (
      <header className={s.nav}>
         <div className="container">
            <div className={s.content}>
               <img className={s.img} src={logo} />
               {/* <nav>
                  <div className={s.item}>
                     <NavLink to='/profile' activeClassName={s.active}>Рассчитать доход</NavLink>
                  </div>
                  <div className={s.item}>
                     <NavLink to='/user' activeClassName={s.active}>Вопросы и ответы</NavLink>
                  </div>
                  <button className={s.item}>
                     <NavLink to='/grow' activeClassName={s.active}>Открыть счёт</NavLink>
                  </button>
               </nav> */}
            </div>
         </div>
      </header>
   );
}

export default HeaderNav;