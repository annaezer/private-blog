import React, {useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Blogposts from "./pages/blogpostOverview/Blogposts";
import Login from "./pages/login/Login";
import Navigation from "./components/navigation/Navigation";
import Blogpost from "./pages/blogpost/Blogpost";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {

    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log(isAuthenticated);

    return (
        <>
            <Navigation auth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login auth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />}/>
                <Route path="/blogposts" element={isAuthenticated ? <Blogposts/> : <Navigate to="/"/> }/>
                <Route path="/blogposts/:blogId" element={isAuthenticated ? <Blogpost/> : <Navigate to="/"/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
