import React from 'react';
import {useNavigate} from "react-router-dom";
import './Login.css';

function Login({auth, toggleAuth}) {

    const navigate = useNavigate()

    console.log (auth);

    return (
        <>
            <h1>Hier kun je inloggen</h1>
       <button type="button" onClick={()=> navigate("/blogposts") + toggleAuth(true)}>
           Inloggen
       </button>
        </>
    );
}

export default Login;
