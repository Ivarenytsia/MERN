import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Search from "../bars/Search";
import useScript from "../hooks/useScript";
import "../bars/Bar.css"

function Post() {
  let { postSlug } = useParams();

  const [items_in_post, setItems] = useState([]);
  const [link_1, setLink_1] = useState([]);
  const [count, setCount] = useState([0]);

  useEffect(() =>{
    fetch(`https://mysterious-coast-79724.herokuapp.com/api/posts/s?search=${postSlug}`)
    .then((response) => response.json())
    .then(({count, data}) => {
      if(count != 0){
      setItems(data[0]);
      setLink_1(data[0]["link"])
      setCount(count)} else{
        setLink_1(`NO MODEL FOUND WITH PROVIDED ID OF ${postSlug}`)
      }
    });
  },[console.log("HIIIII")]);

  useScript("https://scripts.sirv.com/sirvjs/v3/sirv.js");

  if (count != 0){
    console.log(count)
    console.log("WHYYYYYYs")
    return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">The post Title is, {items_in_post["title"]}</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <h6 className="mb-5">The link_1 is, {items_in_post["link"]}</h6>
        <iframe src="https://erseenet.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin" width="500px" height="500px" frameborder="0"></iframe>
        <div class="Sirv" data-src="https://erseenet.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin"></div>
        <p>{items_in_post.body}</p>
      </div>
    </div>
  );} else{
    return (
    <div>
    <div>{link_1}</div>
    <Search limit={0}/>
    </div>
    )
  }
}

export default Post;
