import React from 'react';
import {useParams, Link} from "react-router-dom";
import posts from "../../data/posts.json"
import './Blogpost.css';

function Blogpost() {
    const {blogId} = useParams()

    return (
        <>
            <article>
                <h1>{posts[blogId].title}</h1>
                <h3>{posts[blogId].date}</h3>
                <p>{posts[blogId].content}</p>
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
        </>
    );
};

export default Blogpost;
