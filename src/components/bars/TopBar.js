import React from 'react';
import Search from "./Search";
import "./Bar.css"

const TopBar = ({page, pages, limit, changePage, changeLimit}) => {
    return (
        <div className="top_bar">
        <Search page={page} pages={pages} limit={limit} changePage={changePage} changeLimit={changeLimit}/>
        </div>
    )
}

export default TopBar;