import React from 'react';
import {useParams, Link} from "react-router-dom";
import posts from "../data/posts.json";

console.log (posts);

function Blogposts() {

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <p>Aantal posts: {posts.length}</p>
            <ul className="blog-overview">
                {posts.map((post) => {
                    return (
                        <li className="blog-post" key={ post.id }>
                            <Link to={ "/blogposts/" + post.id }>{post.title}</Link>
                        </li>
                    );
                } ) }
            </ul>
        </>
    );
};

export default Blogposts;
