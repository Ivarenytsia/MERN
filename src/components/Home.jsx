import React from "react";
import { useState, useEffect } from 'react';
import TopBar from './bars/TopBar';
import BottomBar from './bars/BottomBar';
import Posts from './blog/Posts'
import "./bars/Bar.css"


const Home = () => {
  const [items_in_post, setItems] = useState([]);
  const [curr_page_num, setCurrPage] = useState(1);
  const [page_limit, setPageLimit] = useState(12);
  const [tot_page_num, setTotPage] = useState(0);


  useEffect(() =>{
    fetch(`https://mysterious-coast-79724.herokuapp.com/api/posts/p?page=${curr_page_num}&limit=${page_limit}`)
    .then((response) => response.json())
    .then(({count, page, pages, data}) => {
      setItems(data);
      setCurrPage(page);
      setTotPage(pages);
    });
  },[curr_page_num, page_limit]);

  return (
    
    <div className="App">
    <TopBar page={curr_page_num} pages={tot_page_num} limit={page_limit} changePage={setCurrPage} changeLimit={setPageLimit}/>
    <div className="app__main">
      <div className="app__posts">
        {items_in_post.map((post) => (
           <Posts key={post._id} post={post}/>
        ))}
        </div>
      <div className="app__ad__vertical">THIS IS GOODLE ADS</div>
    </div>
    <BottomBar page={curr_page_num} pages={tot_page_num} limit={page_limit} changePage={setCurrPage} changeLimit={setPageLimit}/>
  </div>
      
  );
}

export default Home;
