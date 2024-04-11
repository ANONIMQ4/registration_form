import React, {useEffect, useState} from 'react';
import axios from 'axios'



function Reg() {
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
        <div className="main">
            <div className="FormReg">
                <div className="Login">
                    <h2 style={{width: "400px", margin: "0 0 15px 0"}}>Регистрация</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="DivInp">
                            <p className="NameDiv">Логин</p>
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
                        <div className="DivInp">
                            <p className="NameDiv">Имя</p>
                            <input
                                className="Input"
                                type="text"
                                value={name_1}
                                onChange={(e) => setName_1(e.target.value)}
                            />
                        </div>
                        <div className="DivInp">
                            <p className="NameDiv">Фамилия</p>
                            <input
                                className="Input"
                                type="text"
                                value={name_2}
                                onChange={(e) => setName_2(e.target.value)}
                            />
                        </div>
                        <div className="DivInp">
                            <p className="NameDiv">Отчество</p>
                            <input
                                className="Input"
                                type="text"
                                value={name_3}
                                onChange={(e) => setName_3(e.target.value)}
                            />
                        </div>
                        <button id="regBtn" className="Btn" type="submit">Создать аккаунт</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Reg;