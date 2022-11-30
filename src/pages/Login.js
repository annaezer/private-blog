import React from 'react';
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    return (
        <>
            <h1>Hier kun je inloggen</h1>
       <button type="button" onClick={()=> navigate("/blogposts")}>
           Inloggen
       </button>
        </>
    );
}

export default Login;
