import React, { useRef, useState } from 'react';

import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm({ id, onAddToCart }) {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label='Amount' input={{ 
                id: id,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }} />
            <button>+Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};
