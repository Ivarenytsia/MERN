import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../bars/Bar.css"

function Posts({post}) {
  let navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/models/${post.id}`)}>
      <div class="container">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={post.link}
                alt=""
                width="200px" height="200px"
              />

              {/*<h5 className="card__author">By: {post.author}</h5>
              <p className="card__body"><br />{post.body}</p>  */}
              <h1 className="card__title">{post.title}</h1> 

      </div>
    </div>
  );
}

export default Posts;
