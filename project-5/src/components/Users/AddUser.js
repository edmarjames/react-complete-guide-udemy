import React from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

export default function AddUser() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Card customClass={styles.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Username</label>
                <input type='text' id='name'/>
                <label htmlFor='age'>Age (Years)</label>
                <input type='number' id='age'/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};
