import React from 'react';

import styles from './Header.module.css';
import Meals from '../../assets/meals.jpg';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={Meals} alt='A table full of delicious food!'/>
            </div>
        </>
    );
};
