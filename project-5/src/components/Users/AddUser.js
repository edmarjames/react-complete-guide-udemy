import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from './AddUser.module.css';

export default function AddUser({ onAddUser }) {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState();

    const handleReset = () => {
        setUsername('');
        setAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({ 
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({ 
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        onAddUser(enteredName, enteredAge);
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
        <Wrapper>
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
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        id='age'
                        type='number'
                        value={age}
                        onChange={handleChangeAge}    
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};
