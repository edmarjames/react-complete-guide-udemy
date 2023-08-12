import React from 'react';

import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm({ id }) {
    return (
        <form className={styles.form}>
            <Input label='Amount' input={{ 
                id: id,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }} />
            <button>+Add</button>
        </form>
    );
};
