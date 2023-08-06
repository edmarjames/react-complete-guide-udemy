import React from 'react'

import classes from './Login.module.css';

export default function InputField({ 
    state, 
    label, 
    type, 
    id, 
    value, 
    onChangeHandler, 
    onBlurHandler
}) {

    return (
        <div
          className={`${classes.control} ${
            state.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">{label}</label>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
    )
};
