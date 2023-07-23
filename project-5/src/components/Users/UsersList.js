import React from 'react'

import Card from '../UI/Card';
import styles from './UsersList.module.css';

export default function UsersList({ users }) {
    return (
        <Card customClass={styles.users}>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    );
};
