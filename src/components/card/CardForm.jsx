import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { createField, Input } from '../common/formControls/FormControls';
import style from './CardForm.scss';


const OrderForm = ({ handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}>
         {createField(null, "name", [required], Input, {}, 'Фамилия Имя Отчество')}
         {createField('г. Москва', "city", [required], Input, {}, 'Город обслуживания')}
         {createField(null, "department", [required], Input, {}, 'Отделение обслуживания')}
         {createField("+7 (999) 999 99 99", "", [required], Input, { type: 'number' }, 'Телефон')}

         { error && <div className={style.formSummaryError}>
            {error}
         </div>
         }
         <div className="form__submit">
            <button className="form__col-btn">Продолжить</button>
            <span>Безопасность данных</span>
         </div>
      </form>
   )
}

const OrderReduxForm = reduxForm({ form: 'CartForm' })(OrderForm)


const CartForm = () => {
   return (
      <div className="form">
         <div className="container">
            <div className="form__row">
               <div className="form__col">
                  <h1>Оставьте заявку</h1>
                  <h3>Заполните анкету за 5 минут, получите вашу карту и откройте счёт</h3>
                  <OrderReduxForm />
                  <h6>Нажимая кнопку «Продолжить», я соглашаюсь с <span>условиями</span> подачи онлайн-заявки</h6>
               </div>
               <div className="form__col">
                  <div>
                     <h1>Заполните заявку онлайн</h1>
                     <h3>вам понадобится паспорт и несколько минут.</h3>
                  </div>
                  <div>
                     <h1>Выберите удобный офис обслуживания</h1>
                     <h3>и получите вашу карту</h3>
                  </div>
                  <div>
                     <h1>Пополните накопительный счёт</h1>
                     <h3>в мобильном приложении или удобным для вас способом.</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CartForm;