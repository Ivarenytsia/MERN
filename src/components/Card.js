import React from "react";
import './Main.css'


const Card = ({post}) => {

    const myFunct = () => {
        console.log(post.link)
    };

    return (
        <div className="card">
            <button onClick={myFunct}><img src={post.link} alt={post.link} width="100%" height="300px"/></button>
            <p className="card__title">{post.title}</p>
            <p className="card__body">{post.body}</p>
            <p className="card__author">{post.author}</p>
        </div>
    )
}

export default Card