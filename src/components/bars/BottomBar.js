import React from 'react';
import Pagination from "./Pagination";
import Limit from "./Limit";
import "./Bar.css"

const BottomBar = ({page, pages, limit, changePage, changeLimit}) => {
    return (
        <div className="top_bar">
        <Pagination page={page} pages={pages} limit={limit} changePage={changePage} changeLimit={changeLimit}/>
        <Limit page={page} pages={pages} limit={limit} changePage={changePage} changeLimit={changeLimit}/>
        </div>
    )
}

export default BottomBar;