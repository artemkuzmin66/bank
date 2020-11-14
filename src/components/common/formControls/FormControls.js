import React from 'react';
import { Field } from 'redux-form';
import s from './FormControls.module.scss';

export const FormControl = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
         <div>
            {props.children}
         </div>
         { hasError && <span>{meta.error}</span>}
      </div>
   )
}



export const Input = (props) => {
   const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
   return <div>
      <Field placeholder={placeholder} name={name}
         validators={validators}
         component={component}
         {...props}
      /> {text}
   </div>
}