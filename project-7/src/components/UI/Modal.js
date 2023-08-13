import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

function Backdrop({ onClose }) {
    return (
        <div className={styles.backdrop} onClick={onClose}>

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

export default function Modal({ onClose, children }) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};
