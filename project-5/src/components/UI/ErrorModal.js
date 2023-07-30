import React from 'react'
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

function Backdrop({ onConfirm }) {
    return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

function ModalOverlay({ title, message, onConfirm }) {
    return (
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
    )
};

export default function ErrorModal({ title, message, onConfirm }) {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={onConfirm}/>, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={title} message={message} onConfirm={onConfirm}/>,
                document.getElementById('overlay-root')
            )}
        </>
    );
};
