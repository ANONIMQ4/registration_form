import React, {useEffect, useState} from 'react';
import axios from 'axios'



function Log() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name_1, setName_1] = useState('');
    const [name_2, setName_2] = useState('');
    const [name_3, setName_3] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username: username,
                password: password,
                name_1: name_1,
                name_2: name_2,
                name_3: name_3,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className="FormReg">
            <div className="Login">
                <h2 style={{width: "400px", margin: "0 0 15px 0"}}>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <div className="DivInp">
                        <p className="NameDiv">Имя пользователя</p>
                        <input
                            className="Input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="DivInp">
                        <p className="NameDiv">Пароль</p>
                        <input
                            className="Input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button id="regBtn" className="Btn" type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
}


export default Log;