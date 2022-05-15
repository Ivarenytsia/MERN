import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Search = ({page, pages, limit, changePage, changeLimit}) => {
    const [search_id, setSearch] = useState("");
    let navigate = useNavigate();

    return (
        <div className="card__top__bar__limit">
            <div>
                <p>Showing {limit} results. </p>

                <form>
                    <label>ID of a spin you are looking for:
                        <input
                            type="text" 
                            value={search_id}  
                            onChange={(e) => setSearch(e.target.value)}                   
                        />
                    </label>
                </form>
                <button onClick={() => navigate(`/models/${search_id}`)}>Search</button>
                <button onClick={() => setSearch("")}>Clear</button>
            </div>
        </div>
    )
}

export default Search