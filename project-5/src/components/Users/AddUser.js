import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

export default function AddUser() {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const handleReset = () => {
        setUsername('');
        setAge('');
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        console.log(username);
        console.log(age);
        handleReset();
    };
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <Card customClass={styles.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Username</label>
                <input 
                    id='name' 
                    type='text' 
                    value={username}
                    onChange={handleChangeUsername}
                />
                <label htmlFor='age'>Age (Years)</label>
                <input 
                    id='age'
                    type='number'
                    value={age}
                    onChange={handleChangeAge}    
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};
