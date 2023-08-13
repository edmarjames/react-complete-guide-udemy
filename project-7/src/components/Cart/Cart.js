import React, { useContext } from 'react';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

export default function Cart({ onClose }) {

    const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

    const dummyData = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99}
    ];

    const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
    const hasItems = items.length > 0;
    const cartItemRemoveHandler = (id) => {
        removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        addItem(item);
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {items.map(item => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price}    
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{formattedTotalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']} onClick={onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};
