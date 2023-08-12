import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

function Backdrop() {
    return (
        <div className={styles.backdrop}>

        </div>
    )
};

function ModalOverlay({ children }) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

export default function Modal({ children }) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};
