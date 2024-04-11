import React, {useEffect, useState} from 'react';
import './App.css';
import Reg from "./pages/Reg"
import Log from "./pages/Log"
import axios from "axios";
import cors from "cors";
import {BrowserRouter, Link, Route, Routes, Navigate} from "react-router-dom";


function App() {


    return (
        <BrowserRouter>

            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/registrate">Регистрация</Link>
                    <Link to="/login">Вход</Link>
                </div>
            </div>
            <Routes>
                <Route exact path='/registrate' element={<Reg/>}/>
                <Route exact path='/login' element={<Log/>}/>


            </Routes>
            <Navigate to="/registrate"/>
        </BrowserRouter>
    );

}

export default App;


/*<ul>
    {users.map(user => (
        <li key={user.id}>{user.username}</li>
    ))}




     <div className="App">

            </div>
</ul>*/