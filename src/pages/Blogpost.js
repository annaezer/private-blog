import React from 'react';
import {useParams, Link} from "react-router-dom";
import posts from "../data/posts.json"

function Blogpost() {
    const {blogId} = useParams()

    const currentBlog = posts.find((post) => {
        return post.id === blogId;
    });

    return (
        <>
            <article>
                <h1>{currentBlog.title}</h1>
                <h3>{currentBlog.date}</h3>
                <p>{currentBlog.content}</p>
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
        </>
    );
};

export default Blogpost;
