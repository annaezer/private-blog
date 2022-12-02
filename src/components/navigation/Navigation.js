import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './Navigation.css';

function Navigation({auth, toggleAuth}) {

    const navigate = useNavigate()

    return (
        <nav>
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? "active" : "default"}>
                Home
            </NavLink></li>
            {!auth && <li><NavLink to="/login" className={({isActive}) => isActive ? "active" : "default"}>
                Login
            </NavLink></li>}
            {auth && <li><NavLink to="/blogposts" className={({isActive}) => isActive ? "active" : "default"}>
                Blogposts
            </NavLink></li>}
        </ul>
            {auth && <button type="button" onClick={()=> toggleAuth(false) + navigate("/")}>
                Uitloggen </button>}
        </nav>
    );
}

export default Navigation;
