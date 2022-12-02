import React from 'react';
import {Link} from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
    return (
        <>
        <h3>Deze pagina bestaat niet</h3>
            <Link to="/">Terug naar de homepagina</Link>
        </>
    );
}

export default PageNotFound;
