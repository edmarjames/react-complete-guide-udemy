import React from 'react'

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

export default function ErrorModal({ title, message, onConfirm }) {
    return (
        <>
            <div className={styles.backdrop} onClick={onConfirm}></div>
            <Card customClass={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button clickHandler={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
};
