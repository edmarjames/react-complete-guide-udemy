import React from 'react';

import styles from './Header.module.css';
import Meals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export default function Header({ onShowCart }) {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={Meals} alt='A table full of delicious food!'/>
            </div>
        </>
    );
};
