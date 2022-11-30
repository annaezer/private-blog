import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Blogposts from "./pages/Blogposts";
import Login from "./pages/Login";
import BlogPost from "./pages/Blogpost";
import Navigation from "./pages/Navigation";
import Blogpost from "./pages/Blogpost";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/blogposts" element={<Blogposts/>}/>
                <Route path="/blogposts/:blogId" element={<Blogpost/>}/>
            </Routes>
        </>
    );
}

export default App;
