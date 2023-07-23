import React from 'react'

import styles from './Button.module.css';

export default function Button({ type, clickHandler, children }) {
    return (
        <button 
            className={styles.button} 
            type={type || 'button'}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};
