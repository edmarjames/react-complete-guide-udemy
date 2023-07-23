import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

export default function AddUser({ onAddUser }) {

    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState();

    const handleReset = () => {
        setUsername('');
        setAge('');
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({ 
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+age < 1) {
            setError({ 
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        onAddUser(username, age);
        handleReset();
    };
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal 
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
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
        </>
    );
};
