import React from 'react'
import './Pagination.css'
const Pagination = ({ pageDetail }) => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-4 pagination'>
            <p className='m-3 fw-bold' onClick={() => { if (pageDetail.currentPage !== 1) pageDetail.setcurrentPage(pageDetail.currentPage - 1) }}>Previous</p>
            {Array.from({ length: pageDetail.totalPage }, (_, index) => (
                <div className={`mx-2 rounded ${pageDetail.currentPage === index + 1 && "activeBtn"} `}>
                    <button key={index + 1} onClick={() => pageDetail.setcurrentPage(index + 1)} className='border-0 px-2 rounded  fw-bold'>
                        {index + 1}
                    </button>
                </div>
            )
            )}
            <p className='m-3 fw-bold' onClick={() => { if (pageDetail.currentPage !== 8) pageDetail.setcurrentPage(pageDetail.currentPage + 1) }}>Next</p>
        </div>
    )
}

export default Pagination;
