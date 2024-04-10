import React, {useEffect, useState} from 'react';

import './App.css';
import Login from "./components/Login"
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);
    return (
        <div className="App">
            <Login/>
        </div>
    );
}

export default App;


/*<ul>
    {users.map(user => (
        <li key={user.id}>{user.username}</li>
    ))}
</ul>*/