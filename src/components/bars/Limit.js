import React from 'react';

const Limit = ({page, pages, limit, changePage, changeLimit}) => {
    return (
        <div className="card__top__bar__limit">
            <div>
                <p>Showing {limit} results. </p>
                <button onClick={() => changeLimit(limit - 2)}>See Less</button>
                <button onClick={() => changeLimit(limit+2)}>See More</button>
            </div>
        </div>
    )
}

export default Limit