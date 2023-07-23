import React from 'react'

import styles from './Card.module.css';

export default function Card({ children, customClass }) {
    return (
        <div className={`${styles.card} ${customClass}`}>
            {children}
        </div>
    );
};
