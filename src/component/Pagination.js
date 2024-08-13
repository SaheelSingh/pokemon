import React from 'react'

function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {gotoPrevPage && <button type='button' onClick={gotoPrevPage}>Previous</button>}
            <button type='button' onClick={gotoNextPage}>Next</button>
        </div>
    )
}

export default Pagination
