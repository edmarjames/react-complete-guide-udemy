import React, { useRef, useImperativeHandle } from 'react'

import classes from './Login.module.css';

const InputField = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    });

    return (
        <div
          className={`${classes.control} ${
            props.state.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
          />
        </div>
    )
});

export default InputField;
