import React from 'react';
import './Banner.css';

const Banner = ({pageName}) => {
    return (
        <div>
            <div className='text-center bg-dark Banner'>
                <h1 className='text-white'>{pageName} <span>Page</span></h1>
            </div>
        </div>
    )
}

export default Banner;
