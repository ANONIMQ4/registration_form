import React, {useEffect, useState} from 'react';
import './App.css';
import Reg from "./pages/Reg"
import axios from "axios";


function App() {


    return (
        <div className="App">
            <Reg/>
        </div>
    );
}

export default App;


/*<ul>
    {users.map(user => (
        <li key={user.id}>{user.username}</li>
    ))}
</ul>*/