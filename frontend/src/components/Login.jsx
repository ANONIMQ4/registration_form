import React, { useState } from 'react';
import axios from 'axios'
import Mybutton from "./UI/button/Mybutton";
import MyInput from "./UI/input/MyInput";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name_1, setName_1] = useState('');
    const [name_2, setName_2] = useState('');
    const [name_3, setName_3] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username: username,
                password: password,
                name_1: name_1,
                name_2: name_2,
                name_3: name_3
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <MyInput type="text" name="Логин" value={username} onChange={(e) => setUsername(e.target.value)}></MyInput>
                <MyInput name="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></MyInput>
                <MyInput type="text" name="Имя" value={name_1} onChange={(e) => setName_1(e.target.value)}></MyInput>
                <MyInput type="text" name="Фамилия" value={name_2} onChange={(e) => setName_2(e.target.value)}></MyInput>
                <MyInput type="text" name="Отчество" value={name_3} onChange={(e) => setName_3(e.target.value)}></MyInput>
                <Mybutton>Registrate</Mybutton>
            </form>
        </div>
    );
}

export default Login;
