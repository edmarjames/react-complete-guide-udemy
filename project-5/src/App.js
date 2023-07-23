import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (username, age) => {
        setUsersList((prevState) => [...prevState, {id: Math.random().toString(), name: username, age: age}]);
    };

    return (
        <>
            <AddUser onAddUser={addUserHandler}/>
            {usersList.length > 0 && <UsersList users={usersList}/>}
        </>
    );
};

export default App;
