import React from 'react';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem({ id, name, description, price}) {

    const formattedPrice = `$${price.toFixed(2)}`;

    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id}/>
            </div>
        </li>
    );
};
